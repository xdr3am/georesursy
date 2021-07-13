'use strict';

(function () {
  const burgerBtn = document.querySelector('.main-nav__burger');
  const siteNav = document.querySelector('.main-nav__item--site-nav');
  const closeBtn = document.querySelector('.main-nav__close-menu');

  if (burgerBtn) {
    burgerBtn.addEventListener('click', function(evt) {
      evt.preventDefault();
      siteNav.classList.add('_active');
    });

    closeBtn.addEventListener('click', function(evt) {
      evt.preventDefault();
      siteNav.classList.remove('_active');
    })
  }
})();
