const input = document.querySelector('#name-input');

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
