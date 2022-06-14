(() => {
  const refs = {
    openModalBtn: document.querySelector('.menu-order__btn'),
    closeModalBtn: document.querySelector('.modal__close-btn'),
    modal: document.querySelector('.backdrop-modal'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
