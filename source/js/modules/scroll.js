const scrollToElement = () => {
  if (document.querySelector('.major') !== null) {
    const majorButton = document.querySelector('.major__link');
    const scrollElement = document.querySelector('#passes');

    majorButton.addEventListener('click', (evt) => {
      evt.preventDefault();

      scrollElement.scrollIntoView({
        behavior: 'smooth',
      });
    });
  }
};

export {scrollToElement};
