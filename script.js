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
        alert('Please enter a valid amount');
    }else{
        currentBlance += amount;
        balance.textContent = `Tk: ${currentBlance.toFixed(2)}`;

        const transaction = {                // create class for transaction history
            action: 'Add Money',
            amount: amount,
            balance: currentBlance,
            timestamp: new Date().toLocaleString()      // this get date form localhost
        };

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
        alert('Please enter a valid amount');
    }else if(amount > currentBlance){
        alert('Insufficient balance');
    }else{
        currentBlance -= amount;
        balance.textContent = `Tk ${currentBlance.toFixed(2)}`;

        const transaction ={                  // create class for transaction history
            action: 'Withdraw',
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
transHistory.addEventListener('click',()=>{
    transList.innerHTML = '';
    if(transactionHistory.length === 0){
        transList.innerHTML =`<p class="text-center text-gray-500 italic"> No transactions yet</p>`;
    }else{
        transactionHistory.forEach((transaction) => {
            const transactionItem = document.createElement('div');
            transactionItem.classList.add(
                'bg-white', 'rounded-lg', 'shadow-md', 'p-4', 'mb-4', 'border-4', 'text-sm'
            );

            if(transaction.action === 'Add Money'){
                transactionItem.classList.add('border-green-500');
            }else{
                transactionItem.classList.add('border-red-500');
            }

            transactionItem.innerHTML = `
            <div class="font-semibold text-lg"> ${transaction.action}</div>
            <div class="text-gray-700 mt-1">
            Amount: Tk ${transaction.amount.toFixed(2)}<br>
            Balance: Tk ${transaction.balance.toFixed(2)}
            </div>
            <div class="text-gray-500 mt-2 text-xs">${transaction.timestamp}</div>`;
            transList.prepend(transactionItem);
        });
    }
});


//  add clear history funcation


const clearHistoryButton = document.querySelector('#clearHistory');

clearHistoryButton.addEventListener('click',()=>{
    localStorage.removeItem('transactionHistory');
    transactionHistory = [];
    transList.innerHTML = `<p class="text-center text-gray-500 italic">No transaction yet.</p>`;

    localStorage.setItem('blance', 0);
    currentBlance = 0;
    balance.textContent = `Tk: ${currentBlance.toFixed(2)}`;
});
