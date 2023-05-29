//first swiper
const firstSwiper = new Swiper(".first", {
  direction: "horizontal",
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }
});

//second swiper
const secondSwiper = new Swiper(".second", {
  loop: true,
  slidesPerView: 5,
  spaceBetween: 10,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }
});

//third swiper
const thirdSwiper = new Swiper(".third", {
  loop: true,
  slidesPerView: 9,
  spaceBetween: 20,

  navigation: {
    nextEl: ".swiper-button-next .partnr",
    prevEl: ".swiper-button-prev .partnr",
  },
});