function handler(name) {
  let last;

  function log() {
    console.log('Delay', name, performance.now() - last);
  }

  return function(e) {
    last = performance.now();
    fetch('./index.html').then(response => log());
  }
}

document.addEventListener('touchstart', handler('touchstart'));
