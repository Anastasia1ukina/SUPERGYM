import {iosVhFix} from './utils/ios-vh-fix';
import './modules/modals/video';
import './modules/modals/scroll';
import './modules/modals/subscriptions';
import './modules/modals/footer-scroll';
import Inputmask from 'inputmask';
import Swiper from 'swiper/swiper-bundle';
// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  iosVhFix();

  new Inputmask({
    mask: '+7 (999) 999-99-99',
    showMaskOnHover: false,
  }).mask(document.querySelectorAll('[type="tel"]'));

  (() =>
    new Swiper('.coaches__swiper', {
      navigation: {
        prevEl: '.coaches__button-prev',
        nextEl: '.coaches__button-next',
      },
      slidesPerView: 1,
      spaceBetween: 15,
      initialSlide: 2,
      loop: true,
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1200: {
          initialSlide: 0,
          slidesPerView: 4,
          spaceBetween: 40,
        },
      },
    })
  )();

  (() =>
    new Swiper('.reviews__swiper', {
      navigation: {
        prevEl: '.reviews__button-prev',
        nextEl: '.reviews__button-next',
      },
      slidesPerView: 1,
      spaceBetween: 15,
      autoHeight: true,
    })
  )();

});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
