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
