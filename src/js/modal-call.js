
document.addEventListener('DOMContentLoaded', function() {
  const callButton = document.querySelector('.mobile-menu__button-call');
  const headerCallButton = document.querySelector('.header__button-call');
  const modalCall = document.querySelector('.modal-call');
  const closeButton = document.querySelector('.modal-call__close-button');
  const overlay = document.querySelector('.modal-overlay');

  function openModal() {
    modalCall.style.display = 'block';
    overlay.classList.add('modal-overlay--open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modalCall.style.display = 'none';
    overlay.classList.remove('modal-overlay--open');
    document.body.style.overflow = '';
  }

  callButton.addEventListener('click', openModal);
  headerCallButton.addEventListener('click', openModal);
  closeButton.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);

});