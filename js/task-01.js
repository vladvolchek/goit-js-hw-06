const categories = document.querySelectorAll('.item');
let count = 0;
categories.forEach(() => {count++;
});
console.log("Number of categories:", count);

categories.forEach((categoryItem) => {
  
  const titleElement = categoryItem.querySelector('h2');
  const subItems = categoryItem.querySelectorAll('li');
  console.log(`Category: ${titleElement.textContent}`);
  console.log(`Elements: ${subItems.length}`);
});