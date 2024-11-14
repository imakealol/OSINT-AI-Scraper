var organicResults = { "organic_results": [] };
var results = document.querySelectorAll('.BYM4Nd, [jscontroller="SC7lYd"], [jsname="pKB8Bc"]:not([jscontroller]):not(.X4T0U)');

results.forEach((result, index) => {
    // Retrieve elements, defaulting to an empty string if not found
    const sourceName = result.querySelector(".VuuXrf")?.innerText || "";
    const displayedLink = result.querySelector("cite")?.innerText || "";
    const link = result.querySelector('[jsname="UWckNb"]')?.getAttribute("href") || "";
    const date = result.querySelector(".LEwnzc.Sqrs4e span")?.innerText || "";
    const title = result.querySelector(".LC20lb.MBeuO.DKV0Md")?.innerText || "";
    const snippetContainer = result.querySelector('.VwiC3b');
    const snippet = snippetContainer.lastChild.nodeType === Node.TEXT_NODE 
    ? snippetContainer.lastChild.textContent.trim() 
    : snippetContainer.lastElementChild.innerText;

    // Add to the organic results
    organicResults.organic_results.push({
        "position": index + 1,
        "title": title,
        "source_name": sourceName,
        "displayed_link": displayedLink,
        "link": link,
        "date": date,
        "snippet": snippet
    });
});

return organicResults
