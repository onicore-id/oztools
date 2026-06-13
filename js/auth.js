function checkAuth() {
  if (!sessionStorage.getItem('oz_auth')) {
    window.location.href = getRoot() + 'index.html';
  }
}

function getRoot() {
  const depth = document.currentScript
    ? document.currentScript.src.split('/').indexOf('js') === -1 ? '../' : ''
    : '';
  const path = window.location.pathname;
  const parts = path.split('/');
  const toolsIndex = parts.lastIndexOf('tools');
  if (toolsIndex !== -1) return '../';
  return '';
}

function logout() {
  sessionStorage.removeItem('oz_auth');
  window.location.href = 'index.html';
}

function serverTime() {
  const el = document.getElementById('server-time');
  if (!el) return;
  function tick() {
    const now = new Date();
    const gmt7 = new Date(now.getTime() + (7 * 60 * 60 * 1000) + (now.getTimezoneOffset() * 60 * 1000));
    const h = String(gmt7.getHours()).padStart(2,'0');
    const m = String(gmt7.getMinutes()).padStart(2,'0');
    const s = String(gmt7.getSeconds()).padStart(2,'0');
    el.textContent = h + ':' + m + ':' + s;
  }
  tick();
  setInterval(tick, 1000);
}
