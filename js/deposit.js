document.getElementById("btn-deposit").addEventListener('click',function(){
    const inputField = getInputValueById("deposit-field");
    if(isNaN(inputField)){
        alert('Please provide a valid number')
        return;
    }
    const elementField = getElementValueById("deposit-total");
    const depositTotal = inputField + elementField;
    setTextElementValueById("deposit-total",depositTotal);
    const parseBalanceTotal = getElementValueById("balance-total",);
    const newParseBalance = parseBalanceTotal + inputField;
    setTextElementValueById("balance-total",newParseBalance)
})