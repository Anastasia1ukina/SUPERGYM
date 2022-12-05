let formFeedback = document.getElementById('subscriptions');
let btn = document.querySelector('.promo__button');
let btnMobile = document.querySelector('.promo__button-mobile');

function handleButtonClick() {
  formFeedback.scrollIntoView({block: 'center', behavior: 'smooth'});
}

btn.addEventListener('click', handleButtonClick);
btnMobile.addEventListener('click', handleButtonClick);
