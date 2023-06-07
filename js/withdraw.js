document.getElementById("withdraw-btn").addEventListener('click', function () {
    const inputField = document.getElementById("withdraw-input");
    const inputFieldString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldString);

    inputField.value = "";

    const withdraw = document.getElementById("withdraw-display");
    const withdrawString = withdraw.innerText;
    const withdrawValue = parseFloat(withdrawString);

    const balance = document.getElementById('balance-display');
    const blanceString = balance.innerText;
    const balanceValue = parseFloat(blanceString);

    if (isNaN(inputFieldString)) {
        alert("Please enter valid number")
    }
    else if (inputFieldValue > balanceValue) {
        alert("You have not enough balance")
    }

    else {
        const newWithDraw = inputFieldValue + withdrawValue;
        withdraw.innerText = newWithDraw;

        const newBalane = balanceValue - inputFieldValue;
        balance.innerText = newBalane;
    }

})