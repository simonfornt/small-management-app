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


