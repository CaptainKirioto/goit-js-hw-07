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
