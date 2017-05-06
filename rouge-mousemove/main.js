let last = performance.now();
let next;

function showEvent(event) {
    next = performance.now();
    console.log(event.type, next - last);
    last = next;
}

document.addEventListener('touchstart', showEvent);
document.addEventListener('mousemove', showEvent);
