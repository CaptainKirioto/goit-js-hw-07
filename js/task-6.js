function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector('#controls');
const numberInput = document.querySelector('#controls input[type="number"]');

// numberInput.addEventListener('blur', handleInput);

const create = document.querySelector('button[data-create]');
const destroy = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

create.addEventListener('click', createClick);

function createClick() {
  destroyBoxes();
  createBoxes(numberInput.value);
}

function createBoxes(amount) {
  if (amount < 0 || amount > 100) return;

  let boxArr = [];
  for (let i = 0; i != amount; i++) {
    const boxItem = document.createElement('div');
    const size = 30 + i * 10;
    boxItem.classList.add('box-item');
    boxItem.style.width = `${size}px`;
    boxItem.style.height = `${size}px`;
    boxItem.style.backgroundColor = getRandomHexColor();
    boxArr.push(boxItem);
  }
  boxes.append(...boxArr);
  console.log(boxes);
}

destroy.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  boxes.innerHTML = '';
}
