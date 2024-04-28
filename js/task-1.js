const item = document.querySelectorAll('.item');

console.log(`Number of categories: ${item.length}`);
item.forEach(item => {
  // Для каждого элемента 'item' находим заголовок 'h2' и получаем его текст
  const heading = item.querySelector('.list-head').textContent;

  // Также находим вложенный список 'ul' с классом 'list' и считаем количество элементов 'li' внутри него
  const listItemsNumber = item.querySelectorAll('.list li').length;

  // Выводим информацию в консоль

  console.log(`Category: ${heading}`);
  console.log(`Elements: ${listItemsNumber}`);
});

// let number = 0;
// item.forEach(function (item) {
//   number += 1;
// });
// console.log(`Number of categories: ${number}`);

// const head = document.querySelectorAll('.list-head');
// const list = document.querySelectorAll('.list');

// head.forEach(function (head) {
//   console.log(`Category: ${head.textContent}`);
// });
// list.forEach(function (list) {
//   console.log(`Elements: ${list.children.length}`);
// });

// list.forEach(function (list) {
//   console.log(`Elements: ${list.children.length}`);
// });

// let elemNumber = 0;
// list.forEach(function (list) {
//     list.querySelectorAll('li').forEach(li => {
//       elemNumber += 1;
//     });
//     console.log(`Elements: ${elemNumber}`);
//     elemNumber = 0;
// });
