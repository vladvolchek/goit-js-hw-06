const textInput = document.querySelector("#font-size-control");

const spanText = document.querySelector("#text");



textInput.addEventListener("input", function (event) {
  
  const textInputValue = event.currentTarget.value;
  spanText.style.fontsize = `${textInputValue}` + "px";
  
});