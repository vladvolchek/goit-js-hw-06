const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.getElementById("#ingredients");


const makeProducts = (products) => {
  return products.map((product) => {
    const liItem = document.createElement("li");
    liItem.textContent = product;
    liItem.classList.add("item");
  
    return liItem;
  });
};

const elements = makeProducts(ingredients);

ingredientsList.append(...elements);
console.log(elements);