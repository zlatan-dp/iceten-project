(() => {
  const refs = {
    openModalmenuBtn: document.querySelector('[menu-modal-opn]'),
    closeModalmenuBtn: document.querySelector('[menu-modal-close]'),
    modalmenu: document.querySelector('[data-modal]'),
  };

  refs.openModalmenuBtn.addEventListener('click', toggleModalmenu);
  refs.closeModalmenuBtn.addEventListener('click', toggleModalmenu);

  function toggleModalmenu() {
    refs.modalmenu.classList.toggle('is-hidden');
  }
})();
