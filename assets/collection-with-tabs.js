


const sales_button = document.querySelectorAll(".sale-tag-button");

for (let button of sales_button) {
  button.addEventListener("click", (event) => {
    const clicked_data_attribute = event.currentTarget.getAttribute("data-attribute");
    const card_sales_attribute = document.querySelectorAll("#product-grid li");
    document.querySelector('.active-sale-tab').classList.remove('active-sale-tab');
    event.currentTarget.classList.add('active-sale-tab');

    const buttonText = event.currentTarget.textContent.trim();

    if (buttonText != "All") {
      document.querySelector(".load-more-button-wrapper").style.display = "none";

      for (let item of card_sales_attribute) {
        if (item.getAttribute("sales-attribute") == clicked_data_attribute) {
          console.log(item);
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      }
    } else { 
      for (let item of card_sales_attribute) {
        item.style.display = "block";
        document.querySelector(".load-more-button-wrapper").style.display = "block";
      }
    }
  });
}
