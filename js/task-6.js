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

/* --- Google Font --- */

function loadGoogleFonts() {
  const linkGoogle = document.createElement('link');
  linkGoogle.rel = 'preconnect';
  linkGoogle.href = 'https://fonts.googleapis.com';
  document.head.appendChild(linkGoogle);

  const linkGstatic = document.createElement('link');
  linkGstatic.rel = 'preconnect';
  linkGstatic.href = 'https://fonts.gstatic.com';
  linkGstatic.crossOrigin = 'anonymous';
  document.head.appendChild(linkGstatic);

  const linkFont = document.createElement('link');
  linkFont.rel = 'stylesheet';
  linkFont.href =
    'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap';
  document.head.appendChild(linkFont);
}

document.addEventListener('DOMContentLoaded', loadGoogleFonts);
