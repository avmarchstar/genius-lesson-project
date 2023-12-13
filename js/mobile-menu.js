
const mobile = document.querySelector('.mobile-menu');
const mobileBtnOpen = document.querySelector('.mobile-button-open');
const mobileBtnClose = document.querySelector('.mobile-button-close');

const togglemobile = () => mobile.classList.toggle('is-open');

mobileBtnOpen.addEventListener('click', togglemobile);
mobileBtnClose.addEventListener('click', togglemobile);