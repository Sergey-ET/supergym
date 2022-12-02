const toggleTab = () => {
  const tabList = document.querySelector('.passes__tabs');
  const contentItems = document.querySelectorAll('.passes__content');
  const monthTab = document.querySelector('.passes__tab-link--month');
  const halfYearTab = document.querySelector('.passes__tab-link--half-year');
  const yearTab = document.querySelector('.passes__tab-link--year');
  const monthContent = document.querySelector('.passes__content--month');
  const halfYearContent = document.querySelector('.passes__content--half-year');
  const yearContent = document.querySelector('.passes__content--year');

  tabList.classList.remove('passes__tabs--nojs');
  contentItems.forEach((contentItem) => {
    contentItem.classList.remove('passes__content--nojs');
  });

  monthTab.addEventListener('click', (evt) => {
    evt.preventDefault();
    halfYearTab.classList.remove('is-active');
    halfYearContent.classList.remove('is-active');
    yearTab.classList.remove('is-active');
    yearContent.classList.remove('is-active');
    monthTab.classList.add('is-active');
    monthContent.classList.add('is-active');
  });

  halfYearTab.addEventListener('click', (evt) => {
    evt.preventDefault();
    monthTab.classList.remove('is-active');
    monthContent.classList.remove('is-active');
    yearTab.classList.remove('is-active');
    yearContent.classList.remove('is-active');
    halfYearTab.classList.add('is-active');
    halfYearContent.classList.add('is-active');
  });

  yearTab.addEventListener('click', (evt) => {
    evt.preventDefault();
    monthTab.classList.remove('is-active');
    monthContent.classList.remove('is-active');
    halfYearTab.classList.remove('is-active');
    halfYearContent.classList.remove('is-active');
    yearTab.classList.add('is-active');
    yearContent.classList.add('is-active');
  });
};

export {toggleTab};
