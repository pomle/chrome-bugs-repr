function handleTouch(event) {
}

document.addEventListener('touchstart', handleTouch);

const interval = 100;
let last = Date.now();
function callback() {
  const next = Date.now();
  console.log('Discrepancy', interval - (next - last));
  last = next;
}

setInterval(callback, interval);
