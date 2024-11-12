// Select all elements with the jscontroller attribute set to "SC7lYd"
const organicResults = { "organic_results": [] };
const results = document.querySelectorAll('[jscontroller="SC7lYd"], [jsname="pKB8Bc"]:not([jscontroller])');


results.forEach((result, index) => {
    // Retrieve elements, defaulting to an empty string if not found
    const sourceName = result.querySelector(".VuuXrf")?.innerText || "";
    const displayedLink = result.querySelector("cite")?.innerText || "";
    const link = result.querySelector('[jsname="UWckNb"]')?.getAttribute("href") || "";
    const date = result.querySelector(".LEwnzc.Sqrs4e span")?.innerText || "";
    
    // Get the snippet element's text content, or default to an empty string
    const snippetElement = result.querySelector(".VwiC3b.yXK7lf.lVm3ye.r025kc.hJNv6b") || result.querySelector(".fzUZNc");
    const snippetText = snippetElement?.lastChild?.nodeType === Node.TEXT_NODE 
        ? snippetElement.lastChild.nodeValue.trim() 
        : snippetElement?.innerText.trim() || "";

    // Add to the organic results
    organicResults.organic_results.push({
        "position": index + 1,
        "source_name": sourceName,
        "displayed_link": displayedLink,
        "link": link,
        "date": date,
        "snippet": snippetText
    });
});

console.log(organicResults);
