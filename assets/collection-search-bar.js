
// closeBtn.addEventListener('click', clearInput);
const inputField = document.getElementById('search-inp');
// const productCards = document.querySelectorAll("#product-grid .grid__item");
const paginationElement = document.querySelector(".pagination-wrapper");
const closeBtn = document.querySelector(".collection-card-search-close-btn");
const loader = document.querySelector('.loader');  // Select the loader element
let timeoutId;
let loaderTimeoutId;

function clearInput() {
    inputField.value = "";
    inputField.dispatchEvent(new Event('keyup')); 
}

function activateLoader() {
    if (loader) {
        loader.classList.add('loader-active');
    }
}

function deactivateLoader(callback) {
    if (loader) {
        loader.classList.remove('loader-active');
    }
    if (callback) {
        callback();
    }
}

inputField.addEventListener('keyup', function() {
    clearTimeout(timeoutId);
    clearTimeout(loaderTimeoutId);

    activateLoader();  

    timeoutId = setTimeout(function() {
        let query = inputField.value.trim(); 
        let queryLowerCased = query.toLowerCase();

        loaderTimeoutId = setTimeout(() => {
            deactivateLoader(() => {
                // debugger;
                if (query !== "") { 
                    if (paginationElement) {
                        paginationElement.style.display = "none";
                    }
                    const productCards = document.querySelectorAll("#product-grid .grid__item");
                    productCards.forEach(card => {
                        const dataCardPrice = card.querySelector("[data-card-price]").textContent.toLowerCase(); 
                        if (dataCardPrice.includes(queryLowerCased)) {
                            card.style.display = "block";
                        } else {
                            card.style.display = "none";
                        }
                    });
                } else {
                    if (paginationElement) {
                        paginationElement.style.display = "block";
                    }
                    productCards.forEach(card => {
                        card.style.display = "block";
                    });
                }
               
                console.log(query);
            });
        }, 500);  
    }, 500);
});

closeBtn.addEventListener('click', clearInput);


