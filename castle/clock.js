(() => {
  const time = document.getElementById('local-clock');
  const dateLabel = document.getElementById('clock-date');
  const zone = document.getElementById('clock-zone');
  const clockFormat = new Intl.DateTimeFormat(undefined, {
    hour: '2-digit', minute: '2-digit', second: '2-digit', hourCycle: 'h23'
  });
  const dateFormat = new Intl.DateTimeFormat(undefined, {
    weekday: 'short', day: 'numeric', month: 'short'
  });
  function updateClock() {
    const now = new Date();
    time.textContent = clockFormat.format(now);
    time.dateTime = now.toISOString();
    dateLabel.textContent = dateFormat.format(now);
    zone.textContent = Intl.DateTimeFormat().resolvedOptions().timeZone.replaceAll('_', ' ');
  }
  updateClock();
  window.setInterval(updateClock, 1000);
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) updateClock();
  });
  window.addEventListener('pageshow', updateClock);
})();
