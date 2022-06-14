(() => {
  const refs = {
    openAboutBtn: document.querySelector('[about-modal-open]'),
    closeAboutBtn: document.querySelector('[about-modal-close]'),
    about: document.querySelector('[about-modal]'),
  };

  refs.openAboutBtn.addEventListener('click', toggleAbout);
  refs.closeAboutBtn.addEventListener('click', toggleAbout);

  function toggleAbout() {
    refs.about.classList.toggle('is-hidden');
  }
})();
