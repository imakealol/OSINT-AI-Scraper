import pytest
import json
import os
import uuid
from bs4 import BeautifulSoup
from readability import Document
from dotenv import load_dotenv
from lxml import etree

load_dotenv()

# Directory to store temporary results
TEMP_DIR = os.getenv("TEMP_DIR", "temp_results")
URLS_FILE = os.getenv("URLS_FILE", "urls.json")

# Load URLs from the JSON file
def load_urls():
    urls_file_path = os.path.join(TEMP_DIR, URLS_FILE)
    if not os.path.isfile(urls_file_path):
        raise FileNotFoundError(f"URLs file not found: {urls_file_path}")
    with open(urls_file_path, "r", encoding="utf-8") as f:
        urls_json = json.load(f)
        return urls_json.get("urls", [])

# Fixture to provide URLs to pytest
@pytest.fixture(scope="module")
def urls():
    return load_urls()

class WebContentExtractor:
    def __init__(self, url, sb):
        self.url = url
        self.sb = sb

    def scrape_page(self) -> dict:
        """Scrape a web page."""
        try:
            self.sb.wait_for_ready_state_complete()
            self.sb.wait_for_angularjs()
            self.sb.open(self.url)
            self.sb.execute_script("location.reload(true);")
            self.sb.wait_for_ready_state_complete()
            self.sb.wait_for_angularjs()
            self.sb.wait(5)
            html_content = self.sb.get_page_source()

            readable_content = self.extract_content_with_lxml(html_content)

            cleaned_content = self.clean_html_content(readable_content)
            
            return {"url": self.url, "status": "success", "content": cleaned_content}
        except Exception as e:
            return {"url": self.url, "status": "error", "error": str(e)}

    def extract_content_with_lxml(self, html_content) -> str:
        """Extract readable content using Readability and lxml."""
        try:
            doc = Document(html_content)
            raw_html = doc.summary()

            # Utilisation de lxml pour parser le HTML extrait
            parser = etree.HTMLParser()
            tree = etree.fromstring(raw_html, parser=parser)
            body = tree.find(".//body")

            # Convertir le body en chaîne HTML si trouvé
            return etree.tostring(body, pretty_print=True, method="html", encoding="unicode") if body is not None else raw_html
        except Exception as e:
            raise Exception(f"Error extracting content with lxml: {e}")

    def clean_html_content(self, body_content) -> str:
        """Clean the HTML content."""
        try:
            soup = BeautifulSoup(body_content, "html.parser")

            for tag in soup(["script", "style", "noscript", "meta", "link"]):
                tag.decompose()

            for a_tag in soup.find_all("a", href=True):
                link_text = a_tag.get_text(strip=True)
                a_tag.replace_with(f"{link_text} ({a_tag['href']})")

            cleaned_content = soup.get_text(separator="\n")
            return "\n".join(line.strip() for line in cleaned_content.splitlines() if line.strip())
        except Exception as e:
            raise Exception(f"Error cleaning content: {e}")


# Test function with parameterized URLs
@pytest.mark.parametrize("url", load_urls())
def test_multi_threaded(sb, url):
    temp_file = os.path.join(TEMP_DIR, f"result_{uuid.uuid4().hex}.json")
    scraper = WebContentExtractor(url, sb)
    result = scraper.scrape_page()

    os.makedirs(TEMP_DIR, exist_ok=True)
    with open(temp_file, "a", encoding="utf-8") as f:
        f.write(json.dumps(result))
