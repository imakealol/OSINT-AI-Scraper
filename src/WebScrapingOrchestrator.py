import os
import shutil
import json
import subprocess
from dotenv import load_dotenv

load_dotenv()

# Directory where temporary results are stored
TEMP_DIR = os.getenv("TEMP_DIR", "temp_results")
URLS_FILE = os.getenv("URLS_FILE", "urls.json")

class WebScrapingOrchestrator:
    def __init__(self):
        pass

    def execute_scraping_job(self) -> dict:
        combined_results = []
        temp_urls_file = os.path.join(TEMP_DIR, URLS_FILE)

        with open(temp_urls_file, "r", encoding="utf-8") as f:
            data = json.load(f)
            # Calculate the number of workers
            number_of_urls = len(data["urls"])
            workers = min(number_of_urls, 10)  # Limit workers to 10
            # Construct and run the pytest command to scrape the URLS in parallel
            command = f'pytest -n {workers} --uc "./src/WebContentExtractor.py" --extension-zip "./src/browserExtensions/cjpalhdlnbpafiamejdnhcphjbkeiagm.zip,./src/browserExtensions/cjpalhdlnbpafiamejdnhcphjbkeiagm.zip,./src/browserExtensions/mlomiejdfkolichcflejclcbmpeaniij.zip" --headless'
            subprocess.run(command, shell=True, check=True)
        
        os.remove(temp_urls_file)
        for temp_file in os.listdir(TEMP_DIR):
            temp_path = os.path.join(TEMP_DIR, temp_file)
            with open(temp_path, "r", encoding="utf-8") as f:
                for line in f:
                    combined_results.append(json.loads(line))
        shutil.rmtree(TEMP_DIR)
        return combined_results
    
if __name__ == "__main__":
    # Writing JSON data into URLS_FILE (will be done in another class in the actual implementation)
    os.makedirs(TEMP_DIR, exist_ok=True)
    # Example of JSON data contained in URLS_FILE
    data = {
        "urls": [
            "https://www.france24.com/en/tv-shows/a-propos/20241128-french-pm-barnier-announces-concession-in-bid-to-end-budget-standoff",
            "https://www.dailymail.co.uk/news/article-14138119/Transport-Secretary-Louise-Haigh-admits-LYING-police-claiming-phone-stolen.html",
            "https://www.cnbc.com/2024/11/29/oil-prices-mixed-amid-accusations-of-breaches-to-israel-hezbollah-ceasefire.html",
            "https://www.lefigaro.fr/culture/patrimoine/rescapee-de-l-incendie-la-statue-de-la-vierge-a-l-enfant-regagne-la-cathedrale-notre-dame-20241115",
            "https://www.lefigaro.fr/actualite-france/notre-dame-de-paris-pres-d-un-francais-sur-deux-compte-visiter-la-cathedrale-apres-sa-reouverture-20241125"
        ]
    }
    # created example urls_file
    with open(os.path.join(TEMP_DIR, URLS_FILE), "w", encoding="utf-8") as f:
        json.dump(data, f, indent=4)
    
    print(WebScrapingOrchestrator().execute_scraping_job())
