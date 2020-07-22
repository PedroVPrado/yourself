/* Register Pop Up */

const popUpModal = document.querySelector('.modal-custom')
const closeModalButtons = document.querySelectorAll('[data-close-pop-up-custom-button]');
const overlay = document.getElementById('overlay-custom'); 
var hasOpened = false;

document.addEventListener('mouseleave', () => {
  openModal(popUpModal);
});

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal-custom');
    closeModal(modal);
  });
});

function openModal(modal) {
  if (!hasOpened) {
    if (modal == null) { console.log(modal); return; }
    modal.classList.add('active');
    overlay.classList.add('active');
    hasOpened = true;
  }
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
}