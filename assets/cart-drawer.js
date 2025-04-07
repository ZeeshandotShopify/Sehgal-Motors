class CartDrawer extends HTMLElement {
  constructor() {
    super();

    this.addEventListener('keyup', (evt) => evt.code === 'Escape' && this.close());
    this.querySelector('#CartDrawer-Overlay').addEventListener('click', this.close.bind(this));
    this.setHeaderCartIconAccessibility();
    this.updateRecommendations();
  }

  setHeaderCartIconAccessibility() {
    const cartLink = document.querySelector('#cart-icon-bubble');
    cartLink.setAttribute('role', 'button');
    cartLink.setAttribute('aria-haspopup', 'dialog');
    cartLink.addEventListener('click', (event) => {
      event.preventDefault();
      this.open(cartLink);
    });
    cartLink.addEventListener('keydown', (event) => {
      if (event.code.toUpperCase() === 'SPACE') {
        event.preventDefault();
        this.open(cartLink);
      }
    });
  }
  startCountdown(duration) {
            let timer = duration, minutes, seconds;
            const countdownElement = document.getElementById('countdown-timer');
            const freeShippingWrapper = document.querySelector(".free-shipping-wrapper");

            const intervalId = setInterval(() => {
                minutes = parseInt(timer / 60, 10);
                seconds = parseInt(timer % 60, 10);

                minutes = minutes < 10 ? '0' + minutes : minutes;
                seconds = seconds < 10 ? '0' + seconds : seconds;

                countdownElement.textContent = minutes + ':' + seconds;
                 freeShippingWrapper.classList.remove("in-active-freeshipping-bar");

                // Save the remaining time to localStorage
                localStorage.setItem('countdownValue', timer);

                if (--timer < 0) {
                    clearInterval(intervalId);
                    countdownElement.textContent = "";
                    freeShippingWrapper.classList.add("in-active-freeshipping-bar");
                    localStorage.removeItem('countdownValue'); // Clear countdown value after it reaches zero
                }
            }, 1000);
        }

  checkAndStartCountdown() {

            const visitDateKey = 'visitDate';
            const countdownValueKey = 'countdownValue';
            const now = new Date();
            const storedVisitDate = localStorage.getItem(visitDateKey);
            const storedCountdownValue = localStorage.getItem(countdownValueKey);
  
            if (storedCountdownValue !== null && storedCountdownValue > 0) {

                this.startCountdown(parseInt(storedCountdownValue));

            } else if (storedVisitDate === null) {

                localStorage.setItem(visitDateKey, now.toISOString());
                this.startCountdown(2 * 60);

            } else {

                const lastVisitDate = new Date(storedVisitDate);
                const timeDifference = now - lastVisitDate;
                const daysDifference = timeDifference / (1000 * 3600 * 24);

                if (daysDifference >= 1) {
                    localStorage.setItem(visitDateKey, now.toISOString());
                    this.startCountdown(2 * 60);
                }
            }

        }
    convertPriceToNumber(price) {
    const priceString = price;
    const priceWithoutPrefix = priceString.replace("Rs.", "");
    const priceWithoutComma = priceWithoutPrefix.replace(",", "");
    const priceNumber = Number(priceWithoutComma);
    return priceNumber;
  }
  open(triggeredBy) {
    if (triggeredBy) this.setActiveElement(triggeredBy);
    const cartDrawerNote = this.querySelector('[id^="Details-"] summary');
    if (cartDrawerNote && !cartDrawerNote.hasAttribute('role')) this.setSummaryAccessibility(cartDrawerNote);
    // here the animation doesn't seem to always get triggered. A timeout seem to help
    setTimeout(() => {
      this.classList.add('animate', 'active');
      document.querySelector("body").classList.add("active-cart-drawer");
    });

    this.addEventListener(
      'transitionend',
      () => {
        const containerToTrapFocusOn = this.classList.contains('is-empty')
          ? this.querySelector('.drawer__inner-empty')
          : document.getElementById('CartDrawer');
        const focusElement = this.querySelector('.drawer__inner') || this.querySelector('.drawer__close');
        trapFocus(containerToTrapFocusOn, focusElement);
      },
      { once: true }
    );
    document.body.classList.add('overflow-hidden');
    const checkoutButton = document.getElementById('CustomCartDrawer-Checkout');
    checkoutButton.addEventListener('click', () => {
    if (localStorage.getItem("countdownValue")) {
 
        window.location.href = '/checkout?discount=0FKYHPZGE6XE';
    } else {

        window.location.href = '/checkout';
    }
});

    setTimeout(() => {
    const newPrice = document.querySelector(".totals__total-value").textContent;
    const convertedNumberPrice =  this.convertPriceToNumber(newPrice);
    if (convertedNumberPrice > 1000 ) {
      this.checkAndStartCountdown();
      if(localStorage.getItem('countdownValue') > 0 && localStorage.getItem('countdownValue') != null) {
        document.getElementById('CustomCartDrawer-Checkout').setAttribute("href","/checkout?discount=0FKYHPZGE6XE");
      }
    } else {
      document.getElementById('CustomCartDrawer-Checkout').setAttribute("href","/checkout");
    }
        }, "1000");
  }

  close() {
    this.classList.remove('active');
    document.querySelector("body").classList.remove("active-cart-drawer");
    removeTrapFocus(this.activeElement);
    document.body.classList.remove('overflow-hidden');
  }

  setSummaryAccessibility(cartDrawerNote) {
    cartDrawerNote.setAttribute('role', 'button');
    cartDrawerNote.setAttribute('aria-expanded', 'false');

    if (cartDrawerNote.nextElementSibling.getAttribute('id')) {
      cartDrawerNote.setAttribute('aria-controls', cartDrawerNote.nextElementSibling.id);
    }

    cartDrawerNote.addEventListener('click', (event) => {
      event.currentTarget.setAttribute('aria-expanded', !event.currentTarget.closest('details').hasAttribute('open'));
    });

    cartDrawerNote.parentElement.addEventListener('keyup', onKeyUpEscape);
  }

  updateRecommendations(){
    const recommendation_element = this.querySelector("[cart-recommendations]");
    if(!recommendation_element){
      return;
    }
    fetch(recommendation_element.dataset.url)
    .then(response => response.text())
    .then(text => {
      var html = document.createElement('div');
      html.innerHTML = text;
      const recommendations = html.querySelector('cart-recommendations');
      if (recommendations && recommendations.innerHTML.trim().length) {
        document.querySelector("[cart-recommendations]").innerHTML = recommendations.innerHTML;
      }
    })
    .catch(e => {
      console.error(e);
    })
  .finally(() => {
    const swiper_mini_cart_recommendations = new Swiper('.mini-cart-swiper-initialize', {
  loop: true,
  slidesPerView: 1,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  speed: 1000, 
  pagination: {
    el: '.mini-cart-swiper-initialize .swiper-pagination',
  }
});

  });
  }
  
  renderContents(parsedState) {
    this.querySelector('.drawer__inner').classList.contains('is-empty') &&
    this.querySelector('.drawer__inner').classList.remove('is-empty');
    this.productId = parsedState.id;
    this.getSectionsToRender().forEach((section) => {
      const sectionElement = section.selector
        ? document.querySelector(section.selector)
        : document.getElementById(section.id);
      sectionElement.innerHTML = this.getSectionInnerHTML(parsedState.sections[section.id], section.selector);
    });

    setTimeout(() => {
      this.querySelector('#CartDrawer-Overlay').addEventListener('click', this.close.bind(this));
      this.updateRecommendations();
      this.open();
    });
  }

  getSectionInnerHTML(html, selector = '.shopify-section') {
    return new DOMParser().parseFromString(html, 'text/html').querySelector(selector).innerHTML;
  }

  getSectionsToRender() {
    return [
      {
        id: 'cart-drawer',
        selector: '#CartDrawer',
      },
      {
        id: 'cart-icon-bubble',
      },
    ];
  }

  getSectionDOM(html, selector = '.shopify-section') {
    return new DOMParser().parseFromString(html, 'text/html').querySelector(selector);
  }

  setActiveElement(element) {
    this.activeElement = element;
  }
}

customElements.define('cart-drawer', CartDrawer);

class CartDrawerItems extends CartItems {
  getSectionsToRender() {
    return [
      {
        id: 'CartDrawer',
        section: 'cart-drawer',
        selector: '.drawer__inner',
      },
      {
        id: 'cart-icon-bubble',
        section: 'cart-icon-bubble',
        selector: '.shopify-section',
      },
    ];
  }
}

customElements.define('cart-drawer-items', CartDrawerItems);

class AddToCart extends HTMLElement {
  constructor() {
    super();
    this.addEventListener('click', this.onClickHandler.bind(this));
  }

  onClickHandler() {
    const variantId = this.dataset.variantId;

    if (variantId) {
      if (window.shopSettings.cartDrawer != 'drawer') {
        Shopify.postLink(window.routes.cart_add_url, {
          parameters: {
            id: variantId,
            quantity: 1
          },
        });
        return;
      }

      this.setAttribute('disabled', true);
      this.classList.add('loading');
      let cart = document.querySelector('cart-notification') || document.querySelector('cart-drawer');
      const sections = cart ? cart.getSectionsToRender().map((section) => section.id) : [];

      const body = JSON.stringify({
        id: variantId,
        quantity: 1,
        sections: sections,
        sections_url: window.location.pathname
      });

      fetch(`${window.routes.cart_add_url}`, { ...fetchConfig('javascript'), body })
        .then((response) => response.json())
        .then((parsedState) => {
          if (parsedState.status === 422) {
             document.dispatchEvent(new CustomEvent('ajaxProduct:error', {
                detail: {
                  errorMessage: parsedState.description
                }
              }));
           }
           else {
             if (cart) {
              cart.renderContents(parsedState);
            }else{
              window.location = window.routes.cart_url;
            }
            if (cart && cart.classList.contains('is-empty')) cart.classList.remove('is-empty');
             
             document.dispatchEvent(new CustomEvent('ajaxProduct:added', {
              detail: {
                product: parsedState
              }
            }));
          }
        })
        .catch((e) => {
          console.error(e);
        })
        .finally(() => {
          this.classList.remove('loading');
          this.removeAttribute('disabled');
        });
    }
  }
}
customElements.define('add-to-cart', AddToCart);
