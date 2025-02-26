const balance = document.querySelector('#blance');
const amountInput = document.querySelector('#amountInput');
const addMoney = document.querySelector('#addMoney');
const withdraw = document.querySelector('#withdraw');
const transList = document.querySelector('#transList');
const transHistory = document.querySelector('#transHistory');

// Variables Initialization:


//Loading Stored Balance and Transaction History:

let currentBlance = parseFloat(localStorage.getItem('blance')) || 0;
let transactionHistory = JSON.parse(localStorage.getItem('transactionHistory')) || [];

// Display the Initial Balance:
balance.textContent = `TK: ${currentBlance.toFixed(2)}`;


//  add money funcation

addMoney.addEventListener('click',()=>{
    const amount = parseFloat(amountInput.value); // getting input value and store them in amount

    if(isNaN(amount) || amount <= 0){       //this condition check is input is empty or less them 0
        alert('Please enter a vaild amount');
    }else{
        currentBlance += amount;
        balance.textContent = `Tk: ${currentBlance.toFixed(2)}`;

        const transaction = {                // create class for transaction history
            action: 'add Money',
            amount: amount,
            balance: currentBlance,
            timestamp: new Date().toLocaleString()      // this get date form localhost
        }

    transactionHistory.push(transaction);
    localStorage.setItem('blance', currentBlance);
    localStorage.setItem('transactionHistory', JSON.stringify(transactionHistory));
    }
    amountInput.value = '';

});



//  add withdraw function

withdraw.addEventListener('click',()=>{
    const amount = parseFloat(amountInput.value);

    if(isNaN(amount) || amount <= 0){
        alert('Please enter a vail amount');
    }else if(amount > currentBlance){
        alert('Insufficient balance');
    }else{
        currentBlance -= amount;
        balance.textContent = `Tk ${currentBlance.toFixed(2)}`;

        const transaction ={                  // create class for transaction history
            action: 'withdraw',
            amount: amount,
            balance: currentBlance,
            timestamp: new Date().toLocaleString()   // this get date form localhost
        };

        transactionHistory.push(transaction);
        localStorage.setItem('blance', currentBlance);
        localStorage.setItem('transactionHistory', JSON.stringify(transactionHistory));
    }
    amountInput.value = '';
});



//  add Transaction History funcation

