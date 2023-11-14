const textInput = document.querySelector("#font-size-control");

const spanText = document.querySelector("#text");

spanText.style.fontsize = `${textInputValue}` + "px";

textInput.addEventListener("input", function (event) {
  
  const textInputValue = event.currentTarget.value;

  
});