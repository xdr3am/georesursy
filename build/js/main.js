'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const accordions = document.querySelectorAll('.accordion');

  accordions.forEach(el => {
    const control = el.querySelector('.accordion__control');
    const content = el.querySelector('.accordion__content');

    // если открыт аккордеон
    if (el.classList.contains('open')) {
      control.setAttribute('aria-expanded', true);
      content.setAttribute('aria-hidden', false);
      content.style.maxHeight = content.scrollHeight + 'px';
    }

    control.addEventListener('click', (e) => {
      e.preventDefault();
      el.classList.toggle('open');

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

/* eslint-disable */
/* stylelint-disable */

const swiper1 = document.querySelector('.promo__slider-container');
const swiper2 = document.querySelector('.magazine-view__slider-container');

if (swiper1) {
  new Swiper(swiper1, {
    slidesPerView: 'auto',
    effect: 'coverflow',
    breakpoints: {
      320: {
        coverflowEffect: {
          rotate: 0,
          stretch: 115,
          depth: 200,
          modifier: 2,
          slideShadows: false
        },
      },
      550: {
        coverflowEffect: {
          rotate: 0,
          stretch: 150,
          depth: 100,
          modifier: 2,
          slideShadows: false
        }
      },
      768: {
        coverflowEffect: {
          rotate: 0,
          stretch: 550,
          depth: 150,
          modifier: 1,
          slideShadows: false
        }
      },
      1200: {
        coverflowEffect: {
          rotate: 0,
          stretch: 151,
          depth: 200,
          modifier: 2,
          slideShadows: false
        }
      }
    },
    loop: true,
    navigation: {
      nextEl: '.promo__slider-btn-next',
      prevEl: '.promo__slider-btn-prev',
    },
  });
}

if (swiper2) {
  new Swiper(swiper2, {

    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 30,
      }
    },
    navigation: {
      nextEl: '.magazine-view__slider-btn-next',
      prevEl: '.magazine-view__slider-btn-prev',
    },
  });
}

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

'use strict';

(function() {
  // Scroll-lock
  const body = document.querySelector('body');

  // eslint-disable-next-line consistent-return
  const getScrollbarWidth = () => {
    const outer = document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.overflow = 'scroll';
    outer.style.msOverflowStyle = 'scrollbar';
    body.appendChild(outer);
    const inner = document.createElement('div');
    outer.appendChild(inner);
    const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);
    outer.parentNode.removeChild(outer);
    if (body.offsetHeight > window.innerHeight) {
      return scrollbarWidth;
    }
  };

  const getBodyScrollTop = () => {
    return (
      self.pageYOffset ||
      (document.documentElement && document.documentElement.ScrollTop) ||
      (body && body.scrollTop)
    );
  };

  const disableScrolling = (noScrollbar) => {
    if (!noScrollbar) {
      const scrollWidth = getScrollbarWidth();
      body.setAttribute('style', `padding-right: ${scrollWidth}px;`);
    }
    body.dataset.scrollY = `${getBodyScrollTop()}`;
    body.style.top = `-${body.dataset.scrollY}px`;
    body.classList.add('scroll-lock');
  };

  const enableScrolling = () => {
    body.removeAttribute('style');
    body.classList.remove('scroll-lock');
    window.scrollTo(0, +body.dataset.scrollY);
  };
  //------------------------------


  // Modal-settings
  const openModal = (modal, callback, preventScrollLock) => {
    modal.classList.add('modal--active');

    if (callback) {
      callback();
    }

    // if (!preventScrollLock) {
    //   disableScrolling();
    // }
  };

  const closeModal = (modal, callback, preventScrollLock) => {
    modal.classList.remove('modal--active');

    if (callback) {
      callback();
    }

    // if (!preventScrollLock) {
    //   setTimeout(enableScrolling, 300);
    // }
  };

  const onEscPress = (evt, modal, callback) => {
    const isEscKey = evt.key === 'Escape' || evt.key === 'Esc';

    if (isEscKey && modal.classList.contains('modal--active')) {
      evt.preventDefault();
      closeModal(modal, callback);
    }
  };

  const setModalListeners = (modal, closeCallback, preventScrollLock) => {
    const overlay = modal.querySelector('.modal__overlay');
    const closeBtn = modal.querySelector('.modal__close-btn');

    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        closeModal(modal, closeCallback, preventScrollLock);
      });
    }

    overlay.addEventListener('click', () => {
      closeModal(modal, closeCallback, preventScrollLock);
    });

    document.addEventListener('keydown', (evt) => {
      onEscPress(evt, modal, closeCallback, preventScrollLock);
    });
  };

  const setupModal = (modal, closeCallback, modalBtns, openCallback, noPrevDefault, preventScrollLock) => {
    if (modalBtns) {

      modalBtns.forEach((btn) => {
        btn.addEventListener('click', (evt) => {
          if (!noPrevDefault) {
            evt.preventDefault();
          }
          openModal(modal, openCallback, preventScrollLock);
        });
      });
    }

    setModalListeners(modal, closeCallback, preventScrollLock);
  };
  //---------------------------------


  // Init modals
  const modals = document.querySelectorAll('.modal');
  const modalSearch = document.querySelector('.modal--search');
  const modalSearchBtns = document.querySelectorAll('[data-modal="search"]');
  const modalLogin = document.querySelector('.modal--login');
  const modalLoginBtns = document.querySelectorAll('[data-modal="login"]');
  const modalRegistration = document.querySelector('.modal--registration');
  const modalRegistrationBtns = document.querySelectorAll('[data-modal="registration"]');

  // аргументы setupModal(modal, closeCallback, modalBtns, openCallback, noPrevDefault, preventScrollLock)
  // возможна инициализация только с первыми аргументом,
  // если вам нужно открывать модалку в другом месте под какими-нибудь условиями
  const initModals = () => {
    // фикс для редких случаев, когда модалка появляется при загрузке страницы
    window.addEventListener('load', () => {
      if (modals.length) {
        modals.forEach((el) => {
          setTimeout(() => {
            el.classList.remove('modal--preload');
          }, 100);
        });
      }
    });

    if (modalSearch && modalSearchBtns.length) {
      setupModal(modalSearch, false, modalSearchBtns, false, false);
    }
    if (modalLogin && modalLoginBtns.length) {
      setupModal(modalLogin, false, modalLoginBtns);
    }
    if (modalRegistration && modalRegistrationBtns.length) {
      setupModal(modalRegistration, false, modalRegistrationBtns);
    }
  };

  initModals();
  //---------------------------
})();

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
