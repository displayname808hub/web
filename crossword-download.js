(() => {
  const opener = document.querySelector('[data-open-download]');
  const dialog = document.getElementById('crossword-download');
  const note = document.getElementById('crossword-donation-note');
  const availability = document.getElementById('download-availability');
  opener.addEventListener('click', () => {
    note.hidden = true;
    availability.textContent = 'Crossword is free. Donations are optional.';
    dialog.showModal();
    document.documentElement.classList.add('download-open');
  });
  dialog.querySelector('[data-close-download]').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => {
    document.documentElement.classList.remove('download-open');
    opener.focus();
  });
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });
  dialog.querySelector('[data-free-choice]').addEventListener('click', () => {
    note.hidden = true;
    availability.textContent = 'Crossword is free. Donations are optional.';
  });
  dialog.querySelector('[data-donate-choice]').addEventListener('click', () => {
    note.hidden = false;
    note.focus();
  });
})();
