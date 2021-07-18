'use strict';

(function () {
  const tabsBtn = document.querySelectorAll('.tab');
  const tabsContent = document.querySelectorAll('.content');

  if (tabsBtn) {
    for (let i = 0; i < tabsBtn.length; i++) {
      tabsBtn[i].addEventListener('click', function (evt) {
        evt.preventDefault();
        
        for (let item of tabsBtn) {
          item.classList.remove('active');
        }
        for (let item of tabsContent) {
          item.classList.remove('open');
        }

        const tabContent = document.querySelector('[data-content="' + (i + 1) + '"]');
        tabContent.classList.add('open');
        tabsBtn[i].classList.add('active');
      })
    }
  }
})();
