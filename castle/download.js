(() => {
  function revealSection() {
    const target = document.getElementById(location.hash.slice(1));
    if (target instanceof HTMLDetailsElement) target.open = true;
  }
  window.addEventListener('hashchange', revealSection);
  revealSection();
  document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener('click', () => {
      const target = document.getElementById(link.hash.slice(1));
      if (target instanceof HTMLDetailsElement) target.open = true;
    });
  });
  const dialog = document.querySelector('#download-dialog');
  const opener = document.querySelector('[data-open-download]');
  const donationNote = document.querySelector('#donation-note');
  opener.addEventListener('click', () => {
    donationNote.hidden = true;
    dialog.showModal();
  });
  dialog.querySelector('[data-close]').addEventListener('click', () => dialog.close());
  dialog.querySelector('[data-donate-choice]').addEventListener('click', () => {
    donationNote.hidden = false;
    donationNote.focus();
  });
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right ||
        event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });
})();
