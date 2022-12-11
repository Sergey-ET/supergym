const getCarousel = () => {
  if (document.querySelector('.feedbacks') !== null) {
    const feedbacksSwiper = document.querySelector('.feedbacks__swiper');
    const feedbacksSwiperWrapper = document.querySelector('.feedbacks__swiper-wrapper');
    const feedbacksButtons = document.querySelectorAll('.feedbacks__button');

    feedbacksSwiper.classList.remove('feedbacks__swiper--nojs');
    feedbacksSwiperWrapper.classList.remove('feedbacks__swiper-wrapper--nojs');
    feedbacksButtons.forEach((feedbackButtons) => {
      feedbackButtons.classList.remove('feedbacks__button--nojs');
    });
    // eslint-disable-next-line no-unused-vars,no-undef
    const swiper = new Swiper('.feedbacks__swiper', {
      direction: 'horizontal',
      loop: false,
      slidesPerView: 1,
      spaceBetween: 40,
      speed: 1000,

      navigation: {
        nextEl: '.feedbacks__button--next',
        prevEl: '.feedbacks__button--prev',
      },
    });
  }
};

export {getCarousel};
