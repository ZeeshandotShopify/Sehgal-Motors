$( document ).ready(function() {
    $('.footer-block__heading').click(function() {
      $(this).next('.footer--list').toggleClass('active');
      $(this).find('.toggle-sign').text(function(_, text) {
        return text === '+' ? '-' : '+';
      });
    });
    let items = document.querySelector(".header__inline-menu").querySelectorAll("details");
      // console.log(items)
      items.forEach(item => {
        item.addEventListener("mouseover", () => {
          item.setAttribute("open", true);
          item.querySelector("ul").addEventListener("mouseleave", () => {
            item.removeAttribute("open");
          });
        item.addEventListener("mouseleave", () => {
          item.removeAttribute("open");
        });
      });
      
      });

      let items1 = document.querySelector(".hover--open").querySelectorAll("details");
      // console.log(items1)
      items1.forEach(item => {
        item.addEventListener("mouseover", () => {
          item.setAttribute("open", true);
          item.querySelector("ul").addEventListener("mouseleave", () => {
            item.removeAttribute("open");
          });
        item.addEventListener("mouseleave", () => {
          item.removeAttribute("open");
        });
      });
      
      });
});

// Price Conversion from numbers to Figures 


function formatPrice(price) {
    // if (price >= 10000000) {
    //     return parseFloat((price / 10000000).toFixed(2)) + ' Cr'; 
    // } else if (price >= 100000) {
    //     return parseFloat((price / 100000).toFixed(2)) + ' Lac'; 
    // } else if (price >= 1000) {
    //     return parseFloat((price / 1000).toFixed(2)) + ' Hazar'; 
    // } else {
    //     return price + ' PKR';
    // }
}


function convertPrices() {
    // const priceElements = document.querySelectorAll("[data-list-price]");
    // priceElements.forEach(el => {
    //     let priceString = el.getAttribute("data-list-price");
    //     priceString = priceString.replace('Rs.', '').replace(/,/g, ''); 
    //     const price = parseInt(priceString);
    //     if (!isNaN(price)) {
    //         el.innerText = formatPrice(price);
    //         el.classList.remove("list-view-price-loader");
    //     }
    // });
}


window.addEventListener('DOMContentLoaded', (event) => {
    convertPrices();
});

