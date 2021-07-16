'use strict';

(function () {
  const expands = document.querySelectorAll('.expand')

  expands.forEach(el => {
    const btn = el.querySelector('.expand__btn');
    const image = el.querySelector('.expand__image');

    btn.addEventListener('click', function(e) {
      e.preventDefault();
      image.classList.toggle('open');
    });
  });
})();
