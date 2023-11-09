const textInput = document.querySelector("#name-input");
console.log(textInput);

const outPut = document.querySelector("#name-output");
console.log(outPut);

textInput.addEventListener("input", (event) => {
    const inputValue = event.currentTarget.value.trim();

    if (inputValue !== "") {
        outPut.textContent = inputValue;

    } else {
        outPut.textContent = "Anonymous";
    }

});