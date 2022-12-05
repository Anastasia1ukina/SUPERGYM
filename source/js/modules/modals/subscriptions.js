const triggers = document.querySelectorAll('.subscriptions__triggers-item');
const contentsItems = document.querySelectorAll('.subscriptions__content-item');

triggers.forEach((trigger) =>
  trigger.addEventListener('click', (evt) => {
    evt.preventDefault();
    const activeTab = evt.target.getAttribute('href');

    if (activeTab) {
      const id = activeTab.replace('#', '');
      triggers.forEach((item) => {
        if (item.classList.contains('subscriptions__triggers-item--active')) {
          item.classList.remove('subscriptions__triggers-item--active');
        }
      });

      contentsItems.forEach((contentItem) => {
        if (contentItem.classList.contains('subscriptions__content-item--active')) {
          contentItem.classList.remove('subscriptions__content-item--active');
        }
      });

      trigger.classList.add('subscriptions__triggers-item--active');
      document.getElementById(id).classList.add('subscriptions__content-item--active');
    }
  })
);
