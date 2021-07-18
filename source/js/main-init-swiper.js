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
