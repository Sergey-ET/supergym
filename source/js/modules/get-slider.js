const getSlider = () => {
  if (document.querySelector('.coaches__swiper')) {
    const coachesSwiper = document.querySelector('.coaches__swiper');
    const coachesSwiperWrapper = document.querySelector('.coaches__swiper-wrapper');
    const coachesButtons = document.querySelectorAll('.coaches__button');

    coachesSwiper.classList.remove('coaches__swiper--nojs');
    coachesSwiperWrapper.classList.remove('coaches__swiper-wrapper--nojs');
    coachesButtons.forEach((coachesButton) => {
      coachesButton.classList.remove('coaches__button--nojs');
    });

    // eslint-disable-next-line no-unused-vars,no-undef
    const swiper = new Swiper('.coaches__swiper', {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 4,
      spaceBetween: 40,
      speed: 1000,
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      },

      navigation: {
        nextEl: '.coaches__button--next',
        prevEl: '.coaches__button--prev',
      },
    });
  }
};

export {getSlider};
