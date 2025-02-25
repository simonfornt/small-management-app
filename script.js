
// variables declears

const balance = document.querySelector('#blance');
const amountInput = document.querySelector('#amountInput');
const addMoney = document.querySelector('#addMoney');
const withdraw = document.querySelector('#withdraw');
const transList = document.querySelector('#transList');
const transHistroy = document.querySelector('#transHistory');


//  use localstorage to sotre value even after reload page
let currentBlance = parseFloat(localStorage.getItem('blance')) || 0;
let transactionHistroy = JSON.parse(localStorage.getItem('transactionHistroy')) || [];

// display the current balance

balance.textContent =  `Tk: ${currentBlance.toFixed(2)}`;