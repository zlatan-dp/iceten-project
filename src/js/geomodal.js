(() => {
  const refs = {
    openModalgeoBtn: document.querySelector('.btn-location'),
    closeModalgeoBtn: document.querySelector('.geomodal-close-btn'),
    modalgeo: document.querySelector('.geo-backdrop'),
  };

  refs.openModalgeoBtn.addEventListener('click', toggleModalgeo);
  refs.closeModalgeoBtn.addEventListener('click', toggleModalgeo);

  function toggleModalgeo() {
    refs.modalgeo.classList.toggle('is-hidden');
  }
})();
