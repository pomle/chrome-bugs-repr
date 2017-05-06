function handler(name) {
  let last;

  function log() {
    console.log('Delay', name, performance.now() - last);
  }

  return function(e) {
    last = performance.now();
    setTimeout(log, 0);
  }
}

document.addEventListener('touchstart', handler('touchstart'));
