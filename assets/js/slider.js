"use strict";
/*  ================================================== SWIPER SLIDERS ===================================================*/
//============================== Create a Swiper instance =============================
function initializeSwiper(containerClass, options, disableAutoplay) {
  return new Swiper(containerClass, {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    ...options,
    autoplay: disableAutoplay
      ? false
      : {
          delay: 5000,
          disableOnInteraction: false,
        },
    navigation: {
      nextEl: `${containerClass}-next`,
      prevEl: `${containerClass}-prev`,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    speed: 1000,
  });
}

//============================ TEAM SLIDER TWO =============================
const teamTwoSlider = initializeSwiper(".team-slider-two", {
  breakpoints: {
    1024: {
      slidesPerView: 3,
    },
    640: {
      slidesPerView: 2,
    },
  },
  allowTouchMove: true,
  centeredSlides: true,
  slideToClickedSlide: true,
  effect: "coverflow",
  grabCursor: true,
  autoplay: false,
  navigation: {
    nextEl: ".team-slider-two-next",
    prevEl: ".team-slider-two-prev",
  },
  coverflow: {
    rotate: 0,
    stretch: 100,
    depth: 200,
    modifier: 1,
    slideShadows: false,
  },
});



