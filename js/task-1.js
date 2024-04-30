const item = document.querySelectorAll('.item');
console.log(`Number of categories: ${item.length}`);

item.forEach(item => {
  const heading = item.querySelector('h2').textContent;

  const listItemsNumber = item.querySelectorAll('.item li').length;

  console.log(`Category: ${heading}`);
  console.log(`Elements: ${listItemsNumber}`);
});

// Google Font //

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
