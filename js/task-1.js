const item = document.querySelectorAll('.item');
console.log(`Number of categories: ${item.length}`);

item.forEach(item => {
  const heading = item.querySelector('h2').textContent;

  const listItemsNumber = item.querySelectorAll('.item li').length;

  console.log(`Category: ${heading}`);
  console.log(`Elements: ${listItemsNumber}`);
});
