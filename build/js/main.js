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

/* eslint-disable */
/* stylelint-disable */

const swiper = document.querySelector(`.promo__slider-container`);

if (swiper) {
  new Swiper(swiper, {
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
  };

  initModals();
  //---------------------------
})();
