document.addEventListener('DOMContentLoaded', () => {
    const swiperPrevButtonOfBrowseCars = document.querySelector(".browse-by-cars-tab-prev");
    const swiperNextButtonOfBrowseCars = document.querySelector(".browse-by-cars-tab-next");
    const dummyPrevButton = document.querySelector(".browse-by-cars-tabs-dummy-prev");
    const dummyNextButton = document.querySelector(".browse-by-cars-tabs-dummy-next");
    const tabsSwiperInitializer = document.querySelector(".browse-by-cars-tabs-initialized");

    const isSwiperPrevButtonLocked = swiperPrevButtonOfBrowseCars.classList.contains("swiper-button-lock");
    const isSwiperNextButtonLocked = swiperNextButtonOfBrowseCars.classList.contains("swiper-button-lock");

    if (isSwiperPrevButtonLocked && dummyPrevButton) {
        dummyPrevButton.classList.add("hidden");
        tabsSwiperInitializer.classList.remove('padding-on');
    } else {
       if (dummyPrevButton) {
         dummyPrevButton.classList.remove("hidden");
       }
        tabsSwiperInitializer.classList.add('padding-on');
    }

    if (isSwiperNextButtonLocked && dummyNextButton) {
        dummyNextButton.classList.add("hidden");
        tabsSwiperInitializer.classList.remove('padding-on');
    } else {
        if (dummyNextButton) {
          dummyNextButton.classList.remove("hidden");
        }
        tabsSwiperInitializer.classList.add('padding-on');
    }

    if (dummyNextButton) {
        dummyNextButton.addEventListener("click", function(event) {
            swiperNextButtonOfBrowseCars.click();
        });
    }

    if (dummyPrevButton) {
        dummyPrevButton.addEventListener("click", function(event) {
            swiperPrevButtonOfBrowseCars.click();
        });
    }

// Caetgory Dummy Arrows Initialization
  
    const swiperPrevButtonOfBrowseCarsCategory = document.querySelector(".browse-by-cars-category-prev");
    const swiperNextButtonOfBrowseCarsCategory = document.querySelector(".browse-by-cars-category-next");
    const dummyPrevButtonCategory = document.querySelector(".browse-by-cars-category-dummy-prev");
    const dummyNextButtonCategory = document.querySelector(".browse-by-cars-category-dummy-next");

    const isSwiperPrevButtonLockedCategory = swiperPrevButtonOfBrowseCarsCategory.classList.contains("swiper-button-lock");
    const isSwiperNextButtonLockedCategory = swiperNextButtonOfBrowseCarsCategory.classList.contains("swiper-button-lock");

    if (isSwiperPrevButtonLockedCategory && dummyPrevButtonCategory ) {
        dummyPrevButtonCategory.classList.add("hidden");
    } else {
      if (dummyPrevButtonCategory) {
       dummyPrevButtonCategory || dummyPrevButtonCategory.classList.remove("hidden");
      }
    }

    if (isSwiperNextButtonLockedCategory && dummyNextButtonCategory) {
        dummyNextButtonCategory.classList.add("hidden");
    } else {
       if (dummyNextButtonCategory) {
        dummyNextButtonCategory || dummyNextButtonCategory.classList.remove("hidden");         
       }
    }

    if (dummyNextButtonCategory && dummyNextButtonCategory) {
        dummyNextButtonCategory.addEventListener("click", function(event) {
            swiperNextButtonOfBrowseCarsCategory.click();
        });
    }

    if (dummyPrevButtonCategory && dummyPrevButtonCategory) {
        dummyPrevButtonCategory.addEventListener("click", function(event) {
            swiperPrevButtonOfBrowseCarsCategory.click();
        });
    }
});



// category slider 

const browse_by_cars_category = new Swiper('.browse-by-cars-category-swiper-initialize', {
  loop: false,
  spaceBetween: 20,
  grid: {
    rows: 2,
    fill: "row"
  },
  // navigation: {
  //   nextEl: '.browse-by-cars-category-swiper-initialize .swiper-button-next',
  //   prevEl: '.browse-by-cars-category-swiper-initialize .swiper-button-prev',
  // },
  pagination: {
    el: '.browse-by-cars-category-swiper-initialize  .swiper-pagination',
    clickable: true,
  },
    breakpoints: {
      300: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 5,
        grid: {
          rows: 2,
          fill: "row"
        },
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 5,
        grid: {
          rows: 2,
          fill: "row"
        },
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
        grid: {
          rows: 2,
          fill: "row"
        },
      },
      1024: {
        slidesPerView: 4,
        grid: {
          rows: 2,
          fill: "row"
        },
      },
      1280: {
        slidesPerView: 5,
        grid: {
          rows: 2,
          fill: "row"
        },
      },
      1440: {
        slidesPerView: 6,
      },
    }
});

// Make Slider 
const browse_by_cars_make = new Swiper('.browse-by-cars-make-swiper-initialize', {
  loop: false,
  spaceBetween: 20,
  grid: {
    rows: 2,
    fill: "row"
  },
  // navigation: {
  //   nextEl: '.browse-by-cars-brand-swiper-initialize .swiper-button-next',
  //   prevEl: '.browse-by-cars-brand-swiper-initialize .swiper-button-prev',
  // },
  pagination: {
    el: '.browse-by-cars-make-swiper-initialize  .swiper-pagination',
    clickable: true,
  },
    breakpoints: {
      300: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 5,
        grid: {
          rows: 2,
          fill: "row"
        },
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 5,
        grid: {
          rows: 2,
          fill: "row"
        },
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
        grid: {
          rows: 2,
          fill: "row"
        },
      },
      1024: {
        slidesPerView: 4,
        grid: {
          rows: 2,
          fill: "row"
        },
      },
      1280: {
        slidesPerView: 5,
        grid: {
          rows: 2,
          fill: "row"
        },
      },
      1440: {
        slidesPerView: 6,
      },
    }
});
// Brand Slider
const browse_by_cars_brand = new Swiper('.browse-by-cars-brand-swiper-initialize', {
  loop: false,
  spaceBetween: 20,
  grid: {
    rows: 2,
    fill: "row"
  },
  // navigation: {
  //   nextEl: '.browse-by-cars-brand-swiper-initialize .swiper-button-next',
  //   prevEl: '.browse-by-cars-brand-swiper-initialize .swiper-button-prev',
  // },
  pagination: {
    el: '.browse-by-cars-brand-swiper-initialize  .swiper-pagination',
    clickable: true,
  },
    breakpoints: {
      300: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 5,
        grid: {
          rows: 2,
          fill: "row"
        },
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 5,
        grid: {
          rows: 2,
          fill: "row"
        },
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
        grid: {
          rows: 2,
          fill: "row"
        },
      },
      1024: {
        slidesPerView: 4,
        grid: {
          rows: 2,
          fill: "row"
        },
      },
      1280: {
        slidesPerView: 5,
        grid: {
          rows: 2,
          fill: "row"
        },
      },
      1440: {
        slidesPerView: 6,
      },
    }
});
// Brand Slider
const browse_by_cars_body_type = new Swiper('.browse-by-cars-body-type-swiper-initialize', {
  loop: false,
  spaceBetween: 20,
  grid: {
    rows: 2,
    fill: "row"
  },
  // navigation: {
  //   nextEl: '.browse-by-cars-body-type-swiper-initialize .swiper-button-next',
  //   prevEl: '.browse-by-cars-body-type-swiper-initialize .swiper-button-prev',
  // },
  pagination: {
    el: '.browse-by-cars-body-type-swiper-initialize  .swiper-pagination',
    clickable: true,
  },
    breakpoints: {
      300: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 5,
        grid: {
          rows: 2,
          fill: "row"
        },
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 5,
        grid: {
          rows: 2,
          fill: "row"
        },
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
        grid: {
          rows: 2,
          fill: "row"
        },
      },
      1024: {
        slidesPerView: 4,
        grid: {
          rows: 2,
          fill: "row"
        },
      },
      1280: {
        slidesPerView: 5,
        grid: {
          rows: 2,
          fill: "row"
        },
      },
      1440: {
        slidesPerView: 6,
      },
    }
});
// Body Type Slider
const browse_by_cars_budget = new Swiper('.browse-by-cars-budget-swiper-initialize', {
  loop: false,
  spaceBetween: 20,
  grid: {
    rows: 2,
    fill: "row"
  },
  // navigation: {
  //   nextEl: '.browse-by-cars-body-type-swiper-initialize .swiper-button-next',
  //   prevEl: '.browse-by-cars-body-type-swiper-initialize .swiper-button-prev',
  // },
  pagination: {
    el: '.browse-by-cars-body-type-swiper-initialize  .swiper-pagination',
    clickable: true,
  },
    breakpoints: {
      300: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 5,
        grid: {
          rows: 2,
          fill: "row"
        },
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 5,
        grid: {
          rows: 2,
          fill: "row"
        },
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
        grid: {
          rows: 2,
          fill: "row"
        },
      },
      1024: {
        slidesPerView: 4,
        grid: {
          rows: 2,
          fill: "row"
        },
      },
      1280: {
        slidesPerView: 5,
        grid: {
          rows: 2,
          fill: "row"
        },
      },
      1440: {
        slidesPerView: 6,
      },
    }
});
// model Slider
const browse_by_cars_model = new Swiper('.browse-by-cars-model-swiper-initialize', {
  loop: false,
  spaceBetween: 20,
  grid: {
    rows: 2,
    fill: "row"
  },
  // navigation: {
  //   nextEl: '.browse-by-cars-model-swiper-initialize .swiper-button-next',
  //   prevEl: '.browse-by-cars-model-swiper-initialize .swiper-button-prev',
  // },
  pagination: {
    el: '.browse-by-cars-model-swiper-initialize  .swiper-pagination',
    clickable: true,
  },
    breakpoints: {
      300: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 5,
        grid: {
          rows: 2,
          fill: "row"
        },
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 5,
        grid: {
          rows: 2,
          fill: "row"
        },
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
        grid: {
          rows: 2,
          fill: "row"
        },
      },
      1024: {
        slidesPerView: 4,
        grid: {
          rows: 2,
          fill: "row"
        },
      },
      1280: {
        slidesPerView: 5,
        grid: {
          rows: 2,
          fill: "row"
        },
      },
      1440: {
        slidesPerView: 6,
      },
    }
});


// Tabs Click Listener and removal and adder of active class
const allBrowseTabs = document.querySelectorAll(".browse-by-cars-tabs-initialized [data-label]");
const allBrowseByCarsContainers = document.querySelectorAll(".browse-by-cars-container [data-container-label]");

for (let i = 0; i < allBrowseTabs.length; i++) {
  allBrowseTabs[i].addEventListener("click", function(event){
      const clickedTabLabel = this.getAttribute("data-label").toLowerCase().replace(" ", "-");
      if (!this.classList.contains("active")) {
          document.querySelector(".browse-car-label.active").classList.remove("active");
          document.querySelector(".browse-by-cars-container .active").classList.remove("active");
          this.classList.add("active");

          for (let j = 0; j < allBrowseByCarsContainers.length; j++) {
              if (allBrowseByCarsContainers[j].getAttribute("data-container-label").includes(`${clickedTabLabel}`)) {
                  allBrowseByCarsContainers[j].classList.add("active");
              }
          }
      }
  });
}
