// Selecionar os elementos
const inputElement = document.querySelector("#input");
const fromElement = document.querySelector("#from");
const toElement = document.querySelector("#to");
const outputElement = document.querySelector("#output");
const convertButton = document.querySelector("#convert-btn");
const messageElement = document.querySelector("#message");

function convert(){
    const fromValue = fromElement.value;
    const toValue = toElement.value;

    if(fromValue === toValue){
        outputElement.value = inputElement.value;
        messageElement.textContent = " ";
        return;
    }

//  Converter a entrada para metros 
    let meters;
    switch(fromValue){
        case "m":
            meters = inputElement.value;
            break;
        case "km":
            meters = inputElement.value * 1000;
            break;
        case "cm":
            meters = inputElement.value / 100;
            break;
        case "mm":
            meters = inputElement.value / 1000;
            break;
            
    }

//  Converter metros para unidade de saída;
let result;
switch(toValue){
    case "m":
        result = inputElement.value;
        break;
    case "km":
        result = inputElement.value / 1000;
        break;
    case "cm":
        result = inputElement.value * 100;
        break;
    case "mm":
        result = inputElement.value * 1000;
        break;
        
}
//  Exibir resultado no input
    outputElement.value = result;

//  Exibir resultado na mensagem
const fromLabel = fromElement.options[fromElement.selectedIndex].text
const toLabel = toElement.options[toElement.selectedIndex].text

const message = `${inputElement.value} ${fromLabel} equivalem a ${result} ${toLabel}`;

    messageElement.textContent = message;
    return;

}
convertButton.addEventListener("click", convert)