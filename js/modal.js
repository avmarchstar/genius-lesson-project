const modal = document.querySelector('.backdrop');

const screenWidth = window.screen.width
const modalBtnOpens = document.querySelectorAll('.modal-button-open');
let modalBtnOpen = modalBtnOpens[0];
if (screenWidth < 1280) {
    modalBtnOpen = modalBtnOpens[1];

}
const modalBtnClose = document.querySelector('.modal-button-close');
const toggleModal = () => modal.classList.toggle('is-hidden');

modalBtnOpen.addEventListener('click', toggleModal);
modalBtnClose.addEventListener('click', toggleModal);
