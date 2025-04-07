document
  .querySelector("[element-functionality='loadmore']")
  .addEventListener("click", async (event) => {
    const target = event.target; 
    const nextURL = target.getAttribute("data-next-url");

    if (!nextURL) {
      console.error("Error: No next URL provided.");
      return;
    }

    target.disabled = true; 
    target.textContent = ""; 

    const urlParts = nextURL.split("=");
    if (urlParts.length !== 2) {
      console.error("Error: Invalid URL format.");
      target.disabled = false;
      target.textContent = "";
      return;
    }
    const currentPageIndex = parseInt(urlParts[1]);
    if (isNaN(currentPageIndex)) {
      console.error("Error: Invalid page index.");
      target.disabled = false;
      target.textContent = "";
      return;
    }
    const newNextPageUrlIndex = currentPageIndex + 1;
    const newNextPageUrl = `${urlParts[0]}=${newNextPageUrlIndex}`;

    try {
      const response = await fetch(nextURL);
      if (!response.ok) {
        throw new Error(
          `Network response was not ok: ${response.status} ${response.statusText}`
        );
      }

      const htmlContent = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlContent, "text/html");
      const newContent = doc.querySelector("#product-grid");

      if (!newContent) {
        throw new Error("Error: New content not found in the fetched HTML.");
      }
      
      document
        .querySelector("#product-grid")
        .insertAdjacentHTML("beforeend", newContent.innerHTML);

      // FETCHED CARDS ADDED AT THE BOTTOM END HERE

      // Fetch the next page to determine if the button should be hidden
      const nextPageResponse = await fetch(newNextPageUrl);
      if (!nextPageResponse.ok) {
        throw new Error(
          `Network response was not ok: ${nextPageResponse.status} ${nextPageResponse.statusText}`
        );
      }

      const htmlContentNextPage = await nextPageResponse.text();
      const docNextPage = parser.parseFromString(
        htmlContentNextPage,
        "text/html"
      );
      const newContentNextPage =
        docNextPage.querySelectorAll("#product-grid li");

      if (!newContentNextPage) {
        throw new Error("Error: New content for the next page not found.");
      }

      if (newContentNextPage.length > 0) {
        target.classList.remove("hidden");
      } else {
        target.classList.add("hidden");
      }

      target.setAttribute("data-next-url", newNextPageUrl);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      target.disabled = false; 
      target.textContent = ""; 
    }
  });




function handleIntersect(entries, observer) {
  for (const entry of entries) {
    if (entry.isIntersecting && !document.querySelector("[element-functionality='loadmore']").classList.contains("hidden") ) {
      document.querySelector("[element-functionality='loadmore']").click();
    } else {
      console.log('Load More button is out of view');
    }
  }
}


let observer = new IntersectionObserver(handleIntersect, {
  root: null, 
  rootMargin: '0px', 
  threshold: 0.1 
});


let target = document.querySelector('.load-more-button-wrapper');
if (target) {
  observer.observe(target);
}


