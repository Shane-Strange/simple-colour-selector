const body = document.getElementById('body');

function setColor(a) {
  body.style.backgroundColor = a;
}

function randomColor() {
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);
  const color = `rgb(${red}, ${green}, ${blue})`;

  body.style.backgroundColor = color;
}

function resetColor() {
  body.style.backgroundColor = 'white';
}
