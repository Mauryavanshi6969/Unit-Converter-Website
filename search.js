document.addEventListener("DOMContentLoaded", function () {
    const unitSearchInput = document.getElementById("unitSearch");
    const searchResultsContainer = document.createElement("div");

    // Styling for search results container
    searchResultsContainer.style.position = "absolute";
    searchResultsContainer.style.width = "100%";
    searchResultsContainer.style.maxHeight = "200px";
    searchResultsContainer.style.overflowY = "auto";
    searchResultsContainer.style.border = "1px solid #ddd";
    searchResultsContainer.style.backgroundColor = "rgba(255, 255, 255, 0.6)";
    searchResultsContainer.style.marginTop = "5px";
    searchResultsContainer.style.display = "none";

    document.body.appendChild(searchResultsContainer);

    unitSearchInput.addEventListener("input", function () {
        const searchTerm = unitSearchInput.value.toLowerCase().trim();
        const unitLinks = document.querySelectorAll(".unit-link");

        // Clear previous results
        searchResultsContainer.innerHTML = "";

        unitLinks.forEach(function (link) {
            const unitName = link.innerText.toLowerCase();

            if (unitName.includes(searchTerm)) {
                const resultItem = document.createElement("div");
                resultItem.innerText = link.innerText;
                resultItem.className = "result-item";

                // Styling for each result item
                resultItem.style.padding = "8px";
                resultItem.style.cursor = "pointer";

                // Handle click event to fill search input with the selected result
                resultItem.addEventListener("click", function () {
                    unitSearchInput.value = resultItem.innerText;
                    searchResultsContainer.style.display = "none";
                });

                searchResultsContainer.appendChild(resultItem);
            }
        });

        // Show or hide the results container based on the search term
        searchResultsContainer.style.display = searchTerm ? "block" : "none";
    });
});
