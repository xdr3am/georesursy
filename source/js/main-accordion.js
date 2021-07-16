'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const accordions = document.querySelectorAll('.accordion');

  accordions.forEach(el => {
    const control = el.querySelector('.accordion__control');
    const content = el.querySelector('.accordion__content');

    control.addEventListener('click', (e) => {
      e.preventDefault();
      el.classList.toggle('open');

      // если открыт аккордеон
      if (el.classList.contains('open')) {
        control.setAttribute('aria-expanded', true);
        content.setAttribute('aria-hidden', false);
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        control.setAttribute('aria-expanded', false);
        content.setAttribute('aria-hidden', true);
        content.style.maxHeight = null;
      }
    });
  });
});
