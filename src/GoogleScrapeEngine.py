from seleniumbase import SB  # Import the SeleniumBase Manager

class GoogleSE:
    def __init__(self):
        pass
    def serp_organic_results(self, query: str) -> dict | None:
        with SB() as sb:  # Initialize SeleniumBase Manager
            sb.open("https://google.com")
            
            # Accept cookies if present
            if sb.is_element_present("#W0wltc"):
                sb.slow_click("#W0wltc")
            
            # Type the query in the search box using the selector
            sb.type('//*[@id="APjFqb"]', query+"\n")  # Type in search query
        
