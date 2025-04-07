// const thumbnailsArray = document.querySelectorAll(".thumbnail-list li");
// const mediaPrevButton = document.querySelector(".product-media-prev-button-event-listener");
// const mediaNextButton = document.querySelector(".product-media-next-button-event-listener");

// function getActiveThumbnail() {
//     return document.querySelector(".thumbnail-list li [aria-current='true']");
// }


// function navigateThumbnail(direction) {
//     const activeThumbnail = getActiveThumbnail();
//     let targetThumbnail;

//     if (direction === 'prev') {
//         targetThumbnail = activeThumbnail.parentElement.previousElementSibling;
//     } else if (direction === 'next') {
//         targetThumbnail = activeThumbnail.parentElement.nextElementSibling;
//     }

//     if (targetThumbnail && targetThumbnail.children[0]) {
//         targetThumbnail.children[0].click();
//     }
// }


// if (mediaPrevButton && mediaNextButton) {
//     mediaPrevButton.addEventListener("click", function(event) {
//         event.preventDefault();
//         navigateThumbnail('prev');
//     });

//     mediaNextButton.addEventListener("click", function(event) {
//         event.preventDefault();
//         navigateThumbnail('next');
//     });
// }

// Cache frequently accessed elements
const thumbnailsArray = document.querySelectorAll(".thumbnail-list li");
const mediaPrevButton = document.querySelector(".product-media-prev-button-event-listener");
const mediaNextButton = document.querySelector(".product-media-next-button-event-listener");

// Function to get the currently active thumbnail
function getActiveThumbnail() {
    return document.querySelector(".thumbnail-list li [aria-current='true']");
}

// Function to handle thumbnail navigation
function navigateThumbnail(direction) {
    const activeThumbnail = getActiveThumbnail();
    let targetThumbnail;

    if (direction === 'prev') {
        targetThumbnail = activeThumbnail.parentElement.previousElementSibling;
    } else if (direction === 'next') {
        targetThumbnail = activeThumbnail.parentElement.nextElementSibling;
    }

    if (targetThumbnail && targetThumbnail.children[0]) {
        targetThumbnail.children[0].click();
    }
}

// Add event listeners if buttons exist
if (mediaPrevButton && mediaNextButton) {
    mediaPrevButton.addEventListener("click", function(event) {
        event.preventDefault();
        navigateThumbnail('prev');
    });

    mediaNextButton.addEventListener("click", function(event) {
        event.preventDefault();
        navigateThumbnail('next');
    });
}

// Add keyboard event listener to the document
document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowLeft") {
        navigateThumbnail('prev');
    } else if (event.key === "ArrowRight") {
        navigateThumbnail('next');
    }
});

// fsLightbox.open();