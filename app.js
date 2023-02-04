var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");

function clickEventhandler(){
    console.log("clicked!")
    console.log("input", txtInput.value)
}
btnTranslate.addEventListener("click", clickEventhandler )