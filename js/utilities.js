function getInputValueById(inputId){
    const newDepositAmount = document.getElementById(inputId).value;
    const parseDepositAmount = parseFloat(newDepositAmount)
    document.getElementById(inputId).value = '';
    return parseDepositAmount;
}
function getElementValueById(elementId){
    const previousDepositTotal = document.getElementById(elementId).innerText;
    const paresePreviousDeposit = parseFloat(previousDepositTotal);
    return paresePreviousDeposit;
}
function setTextElementValueById(textValue,depositTotal){
    document.getElementById(textValue).innerText = depositTotal;
}