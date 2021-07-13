'use strict';

(function () {
  const dropdowns = document.querySelectorAll('.dropdown');

  if (dropdowns) {
    for (let dropdown of dropdowns) {
      const dropdownBtn = dropdown.querySelector('.dropdown__btn');
      const dropdownContent = dropdown.querySelector('.dropdown__content');

      if (window.innerWidth < 768) {
        dropdownBtn.addEventListener('click', function (evt) {
          evt.preventDefault();
          dropdownContent.classList.toggle('dropdown__content--active');
        });
      }
    }
  }
})();
