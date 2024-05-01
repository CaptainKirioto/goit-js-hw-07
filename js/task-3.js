const input = document.querySelector('#name-input');
const head = document.querySelector('h1');
head.classList.add('output-head');
const body = document.querySelector('body');
const script = body.querySelector('script');

const container = document.createElement('div');
container.classList.add('container');
container.append(input);
container.append(head);
body.insertBefore(container, script);

input.addEventListener('input', inputHandler);

function inputHandler(event) {
  const name = event.target.value;

  const greeting = document.querySelector('#name-output');
  if (name.trim() != '') {
    greeting.innerHTML = `${name.trim()}`;
  } else {
    greeting.innerHTML = 'Anonymous';
  }
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
