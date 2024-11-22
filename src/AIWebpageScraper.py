from seleniumbase import SB
from bs4 import BeautifulSoup
from readability import Document
from langchain_ollama import OllamaLLM
from langchain_core.prompts import ChatPromptTemplate


class AIWebpageScraper:
    def __init__(self, url):
        self.url = url

    def scrape_webpage(self):
        """
        """
        try:
            with SB(undetectable=True, headless2=True) as sb:
                sb.open(self.url)
                sb.wait_for_element_visible("body", timeout=10)  # Ensure the body is rendered
                page_source = sb.get_page_source()
                return page_source

        except Exception as e:
            print(f"An error occurred while scraping the webpage: {e}")
            return None

    def extract_body_content(self, html_content):
        """
        Extract the main readable content from the HTML source using Readability.
        """
        try:
            doc = Document(html_content)
            readable_html = doc.summary()
            return readable_html
        except Exception as e:
            print(f"Error extracting readable content: {e}")
            return ""

    def clean_body_content(self, body_content):
        """
        Clean the extracted content by removing scripts, styles, and other unnecessary elements.
        """
        try:
            soup = BeautifulSoup(body_content, "html.parser")
            for script_or_style in soup(["script", "style"]):
                script_or_style.extract()

            # Extract visible text
            cleaned_content = soup.get_text(separator="\n")
            cleaned_content = "\n".join(
                line.strip() for line in cleaned_content.splitlines() if line.strip()
            )
            return cleaned_content
        except Exception as e:
            print(f"Error cleaning content: {e}")
            return ""
    # This implementation based on chunking is subject to change
    def split_dom_content(self, dom_content, max_length=6000):
        """
        Split large DOM content into smaller chunks.
        """
        return [
            dom_content[i : i + max_length] for i in range(0, len(dom_content), max_length)
        ]
    
    
    def parse_with_ollama(self, dom_chunks: list[str], parse_description: str):
        model = OllamaLLM(model="mistral:latest")
        template = (
            "You are tasked with extracting specific information from the following text content: {dom_content}. "
            "Please follow these instructions carefully: \n\n"
            "1. **Extract Information:** Only extract the information that directly matches the provided description: {parse_description}. "
            "2. **No Extra Content:** Do not include any additional text, comments, or explanations in your response. "
            "3. **Empty Response:** If no information matches the description, return an empty string ('')."
            "4. **Direct Data Only:** Your output should contain only the data that is explicitly requested, with no other text."
        )
        prompt = ChatPromptTemplate.from_template(template)
        chain = prompt | model

        parsed_results = []

        for i, chunk in enumerate(dom_chunks, start=1):
            response = chain.invoke(
                {"dom_content": chunk, "parse_description": parse_description}
            )
            print(f"Parsed batch: {i} of {len(dom_chunks)}")
            parsed_results.append(response)

        return "\n".join(parsed_results)


if __name__ == "__main__":
    url = "https://en.wikipedia.org/wiki/OK"  # Example website
    scraper = AIWebpageScraper(url)

    try:
        print(f"Scraping the webpage: {url}")
        # Step 1: Scrape page source
        page_source = scraper.scrape_webpage()
        if page_source:
            print("Successfully retrieved page source.")

            # Step 2: Extract readable content
            readable_content = scraper.extract_body_content(page_source)
            print("Readable content extracted.")

            # Step 3: Split content for processing and parsing using LLM
            content_chunks = scraper.split_dom_content(readable_content,6000)
            print(f"Content split into {len(content_chunks)} chunk(s).")

            parsed_result = scraper.parse_with_ollama(content_chunks, 'date of appearance of the word "ok"')
            print(f"Parsed result:\n{parsed_result}")

        else:
            print("Failed to retrieve the page source.")

    except Exception as e:
        print(f"An unexpected error occurred: {e}")
