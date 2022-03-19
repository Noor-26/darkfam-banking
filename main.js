const withdrawBtn = document.getElementById('withdraw-btn');
const depositBtn = document.getElementById('deposit-btn');



function totalInput (newInput , Amount){
    
    const newInputText = document.getElementById(newInput);
    const inputValue = newInputText.value
    const newValue = parseFloat(inputValue);

    const preAmount = document.getElementById(Amount);
    const preAmountText = preAmount.innerText
    const preValue = parseFloat(preAmountText);
    
    const newTotal = newValue + preValue;
    preAmount.innerText = newTotal
    
    newInputText.value = ''
    
}

function totalBalance(valued,isAdd){
    // debugger;
    const newBalanceText = document.getElementById(valued);
    const BalanceValue = newBalanceText.value
    const newBalanceValue = parseFloat(BalanceValue);


    const totalBalance = document.getElementById('total-balance');
    const newTotal = totalBalance.innerText
    const totalBalanceInt = parseFloat(newTotal);

    if (isAdd == true) {
        const newTotalBalance = totalBalanceInt + newBalanceValue
        totalBalance.innerText = newTotalBalance;   
    }
    else{
        const newTotalBalance = totalBalanceInt - newBalanceValue
        totalBalance.innerText = newTotalBalance;   

    }

    // newBalanceText.value = ''
}
depositBtn.addEventListener('click',() =>{
    // deposit
    totalBalance( 'deposit-input' ,true)
    totalInput('deposit-input', 'deposit-amount'  )
    // const preDepositAmountText = depositAmount.innerText
    // const preDepositAmount = parseFloat(preDepositAmountText);
    // const newDepositTotal = newDepositAmount + preDepositAmount;
    // depositAmount.innerText = newDepositTotal
    
    //    total Balance



})


withdrawBtn.addEventListener('click',() => {
    totalBalance('withdraw-input' )

    // withdraw
totalInput('withdraw-input', 'withdraw-amount')
    // balance
    // const totalBalance = document.getElementById('total-balance');
    // const newTotal = totalBalance.innerText
    // const totalBalanceInt = parseFloat(newTotal);
    // const withTotalBalance = totalBalanceInt - totalWithdraw;
    // totalBalance.innerText = withTotalBalance

    
    // withdrawIntput.value = ''
})