(() => {
  const time = document.getElementById('local-clock');
  const dateLabel = document.getElementById('clock-date');
  const zone = document.getElementById('clock-zone');
  const sky = document.getElementById('clock-sky');
  const orb = document.getElementById('sky-orb');
  const phaseLabel = document.getElementById('sky-phase');
  const clockFormat = new Intl.DateTimeFormat(undefined, {
    hour: '2-digit', minute: '2-digit', second: '2-digit', hourCycle: 'h23'
  });
  const dateFormat = new Intl.DateTimeFormat(undefined, {
    weekday: 'short', day: 'numeric', month: 'short'
  });
  function updateClock() {
    const now = new Date();
    const hour = now.getHours() + now.getMinutes() / 60 + now.getSeconds() / 3600;
    time.textContent = clockFormat.format(now);
    time.dateTime = now.toISOString();
    dateLabel.textContent = dateFormat.format(now);
    zone.textContent = Intl.DateTimeFormat().resolvedOptions().timeZone.replaceAll('_', ' ');
    const day = hour >= 6 && hour < 18;
    const phase = hour >= 5 && hour < 7 ? 'dawn' :
      hour >= 17 && hour < 19 ? 'dusk' : day ? 'day' : 'night';
    const progress = day ? (hour - 6) / 12 : ((hour + 6) % 24) / 12;
    sky.dataset.phase = phase;
    orb.textContent = day ? '☀' : '☾';
    orb.style.left = (8 + progress * 84) + '%';
    orb.style.top = (78 - Math.sin(progress * Math.PI) * 53) + '%';
    phaseLabel.textContent = { dawn: 'Dawn over the moat', day: 'Day in the castle',
      dusk: 'Sundown over the towers', night: 'Night in the castle' }[phase];
  }
  updateClock();
  window.setInterval(updateClock, 1000);
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) updateClock();
  });
  window.addEventListener('pageshow', updateClock);
})();
