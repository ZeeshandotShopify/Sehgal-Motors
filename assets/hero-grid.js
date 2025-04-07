const hero_grid = new Swiper('.hero-grid-swiper-initialize', {
  // Optional parameters
  loop: true,
  slidesPerView: 1.1,
  spaceBetween: 10,
  // If we need pagination
  pagination: {
    el: '.hero-grid-swiper-initialize .swiper-pagination',
    clickable: true
  },
});