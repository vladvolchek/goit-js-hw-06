const categoryList = document.getElementById("categories");
const listItem = document.querySelectorAll(".item");
console.log("Number of categories;", listItem.length);

const items = document.querySelectorAll("#categories .item");
items.forEach(item => {
    const headertext = item.querySelector("h2").textContent;
    const numberOfElements = item.querySelectorAll("li").length;

    console.log(`Categories ${headertext}`);
    console.log(`Elements ${numberOfElements}`);
});