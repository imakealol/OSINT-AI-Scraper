import os
import shutil
import json
import subprocess
from dotenv import load_dotenv

load_dotenv()

# Directory where temporary results are stored
TEMP_DIR = os.getenv("TEMP_DIR", "temp_results")
URLS_FILE = os.getenv("URLS_FILE", "urls.json")
MAX_WORKERS = int(os.getenv("MAX_WORKERS", "10"))  # Make max workers configurable

class WebScrapingOrchestrator:
    def __init__(self):
        pass

    def execute_scraping_job(self) -> dict:
        try:
            combined_results = []
            temp_urls_file = os.path.join(TEMP_DIR, URLS_FILE)

            with open(temp_urls_file, "r", encoding="utf-8") as f:
                data = json.load(f)
                # Calculate the number of workers
                number_of_urls = len(data["urls"])
                workers = min(number_of_urls, MAX_WORKERS)

            browser_extensions_dir = os.path.abspath("./src/browserExtensions")
            command = [
                "pytest",
                "-n", str(workers),
                "--uc",
                "./src/WebContentExtractor.py",
                "--extension-dir", f"{browser_extensions_dir}/mlomiejdfkolichcflejclcbmpeaniij,{browser_extensions_dir}/dknlfmjaanfblgfdfebhijalfmhmjjjo,{browser_extensions_dir}/cjpalhdlnbpafiamejdnhcphjbkeiagm",
                "--headless2"
            ]

            
            subprocess.run(command, check=True)  # Use check=True to raise an exception on error

            os.remove(temp_urls_file)
            
            # Combine results from all temp files into a single list            
            for temp_file in os.listdir(TEMP_DIR):
                temp_path = os.path.join(TEMP_DIR, temp_file)
                with open(temp_path, "r", encoding="utf-8") as f:
                    result = json.load(f)
                    combined_results.append(result)

        except Exception as e:
            raise Exception(f"Unexpected error: {e}")

        finally:
            # Cleanup: Remove temp files and urls_file after processing
            if os.path.exists(temp_urls_file):
                os.remove(temp_urls_file)
            if os.path.exists(TEMP_DIR):
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
