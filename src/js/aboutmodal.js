(() => {
  const refs = {
    openAboutBtn: document.querySelector('.about-btn'),
    closeAboutBtn: document.querySelector('.about-close-btn'),
    about: document.querySelector('.about-backdrop'),
  };

  refs.openAboutBtn.addEventListener('click', toggleAbout);
  refs.closeAboutBtn.addEventListener('click', toggleAbout);

  function toggleAbout() {
    refs.about.classList.toggle('is-hidden');
  }
})();
