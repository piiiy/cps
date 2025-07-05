
document.addEventListener('DOMContentLoaded', function() {
  const feedbackButton = document.querySelector('.mobile-menu__button-chat');
  const headerChatButton = document.querySelector('.header__button-chat');
  const modalFeedback = document.querySelector('.modal-feedback');
  const closeButton = document.querySelector('.modal-feedback__close-button');
  const overlay = document.querySelector('.modal-overlay');

  function openModal() {
    modalFeedback.style.display = 'block';
    overlay.classList.add('modal-overlay--open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modalFeedback.style.display = 'none';
    overlay.classList.remove('modal-overlay--open');
    document.body.style.overflow = '';
  }

  feedbackButton.addEventListener('click', openModal);
  headerChatButton.addEventListener('click', openModal);
  closeButton.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);

});