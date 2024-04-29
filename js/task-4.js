const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const elements = event.currentTarget.elements;

  if (elements.email.valu === '' || elements.password.value === '') {
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
