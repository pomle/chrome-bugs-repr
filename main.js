let last;

function log() {
  console.log('Delay', Date.now() - last);
}

function handler() {
  last = Date.now();
  setTimeout(log, 0);
}

document.addEventListener('touchstart', handler);
