function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const button = document.querySelector('button');

button.addEventListener('click', handleClick);

function handleClick(event) {
  body.style.backgroundColor = getRandomHexColor();
  const textColor = document.querySelector('.color');
  textColor.innerHTML = `${body.style.backgroundColor}`;
}
