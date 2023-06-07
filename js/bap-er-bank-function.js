/**
 * 1. add even listener to the deposite button
 * 2. get diposit amount from the deposit field
 * 3. Convert the value number from string
 * 4. get diposite display value and convert to number from string
 * 5. adding deposite field value and diposit display value
 */

document.getElementById("deposit-btn").addEventListener('click', function () {
    const depositeField = document.getElementById("deposit-input");
    const depositeFieldString = depositeField.value;
    const depositeFieldValue = parseFloat(depositeFieldString);
    depositeField.value = "";

    const depositeDisplay = document.getElementById("deposti-display");
    const depositDisplayString = depositeDisplay.innerText;
    const depositDisplayValue = parseFloat(depositDisplayString);

    const balanceDisplay = document.getElementById("balance-display");
    const balanceDisplayString = balanceDisplay.innerText;
    const balanceDisplayValue = parseFloat(balanceDisplayString);

    const newDepositeTotal = depositeFieldValue + depositDisplayValue;
    depositeDisplay.innerText = newDepositeTotal;

    const newBalanceDisplay = depositeFieldValue + balanceDisplayValue;
    balanceDisplay.innerText = newBalanceDisplay;




})