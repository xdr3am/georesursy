'use strict';

(function () {
  // Открытие поисковой строки
  const searchBtn = document.querySelector('.main-nav__search-btn');
  const searchInput = document.querySelector('.main-nav__input-search');

  searchBtn.addEventListener('click', function (e) {
    e.preventDefault();
    searchInput.classList.toggle('main-nav__input-search--active');
  });

  window.addEventListener(`keydown`, function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (searchInput.classList.contains(`main-nav__input-search--active`)) {
        searchInput.classList.remove('main-nav__input-search--active');
      }
    }
  });
  // -------------------------
})();
