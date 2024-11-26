
from langchain_core.tools import Tool, tool
from pydantic import BaseModel, Field
from typing import Optional
from AIWebpageScraper import AIWebpageScraper
from urllib.parse import urlparse

class ScrapingInput(BaseModel):
    url: str = Field(..., description="L'URL complète de la page web à analyser")
    extraction_description: Optional[str] = Field(None, description="Description optionnelle des informations spécifiques à extraire")

class WebTools:
    def __init__(self):
        pass

    def _is_valid_url(self, url: str) -> bool:
        """Vérifie si l'URL est valide"""
        try:
            result = urlparse(url)
            return all([result.scheme, result.netloc])
        except:
            return False

    @tool("scrape_webpage", args_schema=ScrapingInput)
    async def scrape_webpage(self, url: str, extraction_description: Optional[str] = None) -> str:
        """Utiliser cet outil pour extraire des informations d'une page web.
        
        Args:
            url: L'URL de la page web à analyser (doit commencer par http:// ou https://)
            extraction_description: Description optionnelle des informations spécifiques à extraire
            
        Returns:
            str: Le contenu extrait de la page web ou un message d'erreur
        """
        if not self._is_valid_url(url):
            return "URL invalide. Veuillez fournir une URL complète commençant par http:// ou https://"
        
        try:
            scraper = AIWebpageScraper(url)
            page_source = scraper.scrape_webpage()
            
            if not page_source:
                return "Échec du scraping de la page."
            
            extracted_text = scraper.extract_body_content(page_source)
            if not extracted_text:
                return "Aucun contenu lisible extrait."
            
            cleaned_content = scraper.clean_body_content(extracted_text)
            if extraction_description:
                # Si une description spécifique est fournie, utiliser le parsing
                content_chunks = scraper.split_dom_content(cleaned_content)
                return scraper.parse_with_ollama(content_chunks, extraction_description)
            
            return cleaned_content

        except Exception as e:
            return f"Erreur lors du scraping: {str(e)}"

    def get_tools(self):
        """Retourne la liste des outils disponibles"""
        return [
            Tool(
                name="scrape_webpage",
                description="Extraire des informations d'une page web",
                func=self.scrape_webpage
            )
        ]