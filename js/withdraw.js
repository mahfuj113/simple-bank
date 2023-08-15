document.getElementById("btn-withdraw").addEventListener('click',function(){
    const parseWithdrawField = getInputValueById("withdraw-field");
    if(isNaN(parseWithdrawField)){
        alert('Please provide a valid number')
        return;
    }
    const parseWithdrawTotal = getElementValueById("withdraw-total");
    const withdrawParseBalanceTotal = getElementValueById("balance-total");
    if(parseWithdrawField > withdrawParseBalanceTotal){
        alert("Not enough money");
        return;
    }
    const withdrawTotal = parseWithdrawField + parseWithdrawTotal;
    setTextElementValueById("withdraw-total",withdrawTotal);
    const newBalanceTotal = withdrawParseBalanceTotal - parseWithdrawField;
    setTextElementValueById("balance-total",newBalanceTotal);
})