//  by using function for deposit and withdraw
function getInputValue(inputId) {
    // debugger; eita diye mane breakpoint for checking in console
    const inputField = document.getElementById(inputId);
    const inputAmount = inputField.value;
    // clear input value 
    inputField.value = '';
    return parseFloat(inputAmount);
}

// updating withdraw and deposit using function
function updateTotalField(totalFieldId, amount) {
    const totalFieldInput = document.getElementById(totalFieldId);
    totalFieldInput.innerText = parseFloat(totalFieldInput.innerText) + amount;
}

// update balance using function 
function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');

    if (isAdd == true) {
        balanceTotal.innerText = parseFloat(balanceTotal.innerText) + amount;
    } else {
        balanceTotal.innerText = parseFloat(balanceTotal.innerText) - amount;
    }
}

/* 
   deposit
*/
document.getElementById('deposit-btn').addEventListener('click', function () {
    /* // get new deposited amount 
    const depositInput = document.getElementById('deposit-input');
    const depositAmount = depositInput.value;
    // console.log(depositAmount);

    // adding new deposited amount to previous deposit amount  
    const depositTotal = document.getElementById('deposit-total');
    depositTotal.innerText = parseFloat(depositTotal.innerText) + depositAmount;

    // clear deposit box 
    depositInput.value = '';

    // update Account balance 
    const balanceTotal = document.getElementById('balance-total');
    balanceTotal.innerText = parseFloat(balanceTotal.innerText) + depositAmount; */

    // by using function 
    const depositAmount = getInputValue('deposit-input');
    if (depositAmount > 0) {
        updateTotalField('deposit-total', depositAmount);
        updateBalance(depositAmount, true);
    }

});

/* 
    withdraw
*/
document.getElementById('withdraw-btn').addEventListener('click', function () {
    /* // amount to withdraw 
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmount = withdrawInput.value;
    // console.log(withdrawAmount);

    // adding withdraw total 
    const withdrawTotal = document.getElementById('withdraw-total');
    withdrawTotal.innerText = parseFloat(withdrawTotal.innerText) + withdrawAmount;

    // clear withdraw box 
    withdrawInput.value = '';

    // update balance 
    const balanceTotal = document.getElementById('balance-total');
    balanceTotal.innerText = parseFloat(balanceTotal.innerText) - withdrawAmount;*/

    // using function 
    const withdrawAmount = getInputValue('withdraw-input');
    const balanceTotal = document.getElementById('balance-total');
    const currentBalance = parseFloat(balanceTotal.innerText);
    
    if (withdrawAmount > 0 && withdrawAmount <= currentBalance) {
        updateTotalField('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false);
    }
    if (withdrawAmount > currentBalance){
        console.log("u can't withdraw!!");
    }

});