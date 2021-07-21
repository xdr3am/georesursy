'use strict';

(function () {
  window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;

    if (window.innerWidth > 768) {
      document.querySelectorAll('.content').forEach((el, i) => {
        if (el.offsetTop <= scrollDistance) {
          document.querySelectorAll('.article-page__tab').forEach((el) => {
            if (el.classList.contains('active')) {
              el.classList.remove('active');
            }
          });

          document.querySelectorAll('.desktop-tab-item')[i].querySelector('.article-page__tab').classList.add('active');
        }
      });
    }
  });
})();
