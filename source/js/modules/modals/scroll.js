let formFeedback = document.getElementById('subscriptions');
let promoBlock = document.querySelector('.promo');
let btn = document.querySelector('.promo__button');
let btnMobile = document.querySelector('.promo__button-mobile');

function handleButtonClick() {
  formFeedback.scrollIntoView({block: 'center', behavior: 'smooth'});
}

if (promoBlock) {
  btn.addEventListener('click', handleButtonClick);
  btnMobile.addEventListener('click', handleButtonClick);
}
