(() => {
  const refs = {
    openModalBtn: document.querySelector('.buy-open'),
    closeModalBtn: document.querySelector('.modal__close-btn'),
    modal: document.querySelector('.backdrop-modal'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
