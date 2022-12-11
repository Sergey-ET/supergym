const toggleTab = () => {
  if (document.querySelector('.passes') !== null) {
    const tabList = document.querySelector('.passes__tabs');
    const contentItems = document.querySelectorAll('.passes__content');
    const tabs = document.querySelectorAll('.passes__tab-link');

    tabList.classList.remove('passes__tabs--nojs');
    contentItems.forEach((contentItem) => {
      contentItem.classList.remove('passes__content--nojs');
    });

    tabs.forEach((tab, i) => {
      tab.addEventListener('click', (evt) => {
        evt.preventDefault();
        tabs.forEach((el) => {
          el.classList.remove('is-active');
        });
        tab.classList.add('is-active');
        contentItems.forEach((contentItem) => {
          contentItem.classList.add('is-hidden');
        });
        contentItems[i].classList.remove('is-hidden');
      });
    });
  }
};

export {toggleTab};
