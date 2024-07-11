// JS code for interactive rotation
const cube = document.querySelector('.cube');

let isDragging = false;
let previousX = 0;

cube.addEventListener('mousedown', (e) => {
  isDragging = true;
  previousX = e.clientX;
});

cube.addEventListener('mouseup', () => {
  isDragging = false;
});

cube.addEventListener('mousemove', (e) => {
  if (isDragging) {
    let delta = e.clientX - previousX;
    cube.style.transform = `rotateY(${delta}deg)`;
    previousX = e.clientX;
  }
});
