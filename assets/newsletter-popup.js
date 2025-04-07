document.addEventListener("DOMContentLoaded", function() {
    if (!window.location.href.includes("collections") && !window.location.href.includes("pages") && !window.location.href.includes("policy") && !window.location.href.includes("product") && !window.location.href.includes("cart")) {
    function shouldShowPopup() {
        return !window.location.href.includes('/challenge#ContactFooter');
    }


    function shouldRemoveClosedDate() {
        var closedDate = localStorage.getItem('newsletterClosedDate');
        if (closedDate) {
            var currentDate = new Date();
            var storedDate = new Date(closedDate);
            var difference = currentDate.getTime() - storedDate.getTime();
            var daysDifference = difference / (1000 * 3600 * 24); 
            return daysDifference >= 5; 
        }
        return false; 
    }


    if (shouldShowPopup() && !shouldRemoveClosedDate() && localStorage.getItem('newsletterSubscribed') !== "true" && localStorage.getItem('newsletterClosed') !== "true") {
        setTimeout(function() {
            document.body.classList.add("active-newsletter-pop-up");
            document.querySelector(".newsletter__wrapper").classList.add("active-newsletter-pop-up-form-wrapper");
        }, 15000);


        document.querySelector(".newsletter-modal-popup-link").addEventListener("click", function(event) {
            event.preventDefault();

            localStorage.setItem('newsletterClosedDate', new Date().toISOString());
 
            document.querySelector(".active-newsletter-pop-up-form-wrapper").classList.remove("active-newsletter-pop-up-form-wrapper");
            document.querySelector(".active-newsletter-pop-up").classList.remove("active-newsletter-pop-up");
            localStorage.setItem('newsletterClosed', 'true');
        });
    }

    }
});

// Success Toaster

document.addEventListener("DOMContentLoaded", () => {
  const toast = document.querySelector(".toast"),
        closeIcon = document.querySelector(".toast .close"),
        progress = document.querySelector(".toast .progress");

  let timer1, timer2;

  // Function to show the toaster
  function showSuccessfullyPostedToast() {
    toast.classList.add("active");
    toast.classList.add("newCustomer");
    progress.classList.add("active");

    timer1 = setTimeout(() => {
      toast.classList.remove("active");
      toast.classList.remove("newCustomer");
    }, 5000); 

    timer2 = setTimeout(() => {
      progress.classList.remove("active");
    }, 5300);
  }
  function showExistingCustomerToast() {
    toast.classList.add("active");
    toast.classList.add("existingCustomer");
    progress.classList.add("active");

    timer1 = setTimeout(() => {
      toast.classList.remove("active");
      toast.classList.remove("existingCustomer");
    }, 5000); 

    timer2 = setTimeout(() => {
      progress.classList.remove("active");
    }, 5300);
  }

  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('customer_posted') === 'true') {   
    showSuccessfullyPostedToast();
  } else if (urlParams.get('form_type') === 'customer') {
    showExistingCustomerToast();
  }

  closeIcon.addEventListener("click", () => {
    toast.classList.remove("active");

    setTimeout(() => {
      progress.classList.remove("active");
    }, 300);

    clearTimeout(timer1);
    clearTimeout(timer2);
  });
});


