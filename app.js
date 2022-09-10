var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector('#txt-input');
var outputDiv = document.querySelector("#output");

// console.log(txtInput);

function clickEventHandler() {
    outputDiv.innerText = "asdfafsa"+ txtInput.value;
    // console.log("clicked!");
    // console.log("input",txtInput.value);
  }

btnTranslate.addEventListener("click", clickEventHandler);

