const getSlider = () => {
  const coachesSwiper = document.querySelector('.coaches__swiper');
  const coachesSwiperWrapper = document.querySelector('.coaches__swiper-wrapper');
  const coachesButtons = document.querySelectorAll('.coaches__button');

  coachesSwiper.classList.remove('coaches__swiper--nojs');
  coachesSwiperWrapper.classList.remove('coaches__swiper-wrapper--nojs');
  coachesButtons.forEach((coachesButton) => {
    coachesButton.classList.remove('coaches__button--nojs');
  });

  const coachesSlider = new Swiper('.coaches__swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 40,
    speed: 1000,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 20,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 30,
      },
      // when window width is >= 1024px
      1024: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 40,
      },
    },

    navigation: {
      nextEl: '.coaches__button--next',
      prevEl: '.coaches__button--prev',
    },
  });
};

export {getSlider};
