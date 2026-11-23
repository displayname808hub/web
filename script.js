(() => {
  const composition = document.getElementById('tile-composition');
  const symbols = ['→', 'Ⅱ', '+1', '●', 'Ⅲ', '÷2', '↓', '', '−1', 'Ⅱ', ''];
  let arrangement = 0;
  function arrange() {
    composition.replaceChildren();
    for (let i = 0; i < 64; i++) {
      const tile = document.createElement('span');
      const x = i % 8, y = Math.floor(i / 8);
      const block = (x * 3 + y * 5 + arrangement * 2) % 9 < 3;
      tile.className = 'art-tile' + (block ? ' block' : '');
      if (i < 9) tile.className = 'art-tile active';
      if (i === 5) tile.className += ' cursor';
      if (!block || i < 9) tile.textContent = symbols[(i * 7 + arrangement * 3) % symbols.length];
      composition.append(tile);
    }
    arrangement++;
  }
  arrange();
  document.getElementById('rearrange').addEventListener('click', arrange);
})();
