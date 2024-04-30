function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector('#controls');
const numberInput = document.querySelector('#controls input[type="number"]');

numberInput.addEventListener('blur', handleInput);

function handleInput(event) {
  const number = event.target.value;
}

const create = document.querySelector('button[data-create]');
const destroy = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

create.addEventListener('click', handleCreate);

function handleCreate(event) {
  console.log(numberInput.value);
}
