const form = document.querySelector('.login-form');
const labels = document.querySelectorAll('label');

labels.forEach(label => {
  label.classList.add('form-label');
});

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const elements = event.currentTarget.elements;

  if (elements.email.value === '' || elements.password.value === '') {
    alert('All form fields must be filled in');
  } else {
    const info = {
      email: elements.email.value,
      password: elements.password.value,
    };
    console.log(info);
    form.reset();
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
