const swiper = new Swiper('.swiper', {
  slidesPerView: 1,

  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },

  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  speed: 800,
  keyboard: true,
});