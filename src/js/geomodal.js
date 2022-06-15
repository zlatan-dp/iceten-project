(() => {
  const refs = {
    openModalgeoBtn: document.querySelector('[geo-modal-open]'),
    closeModalgeoBtn: document.querySelector('[geo-modal-close]'),
    modalgeo: document.querySelector('[geo-modal]'),
  };

  refs.openModalgeoBtn.addEventListener('click', toggleModalgeo);
  refs.closeModalgeoBtn.addEventListener('click', toggleModalgeo);

  function toggleModalgeo() {
    refs.modalgeo.classList.toggle('is-hidden');
  }
})();
