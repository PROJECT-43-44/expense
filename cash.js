// cash.js
// document.getElementById('cashInLabel').textContent = '';
// document.getElementById('cashOutLabel').textContent = '';
// document.getElementById('balanceLabel').textContent = '';
const dateInput = document.getElementById("date");
dateInput.addEventListener("change", () => {
    const date = dateInput.value;
    localStorage.setItem('message', date);
});
let date = localStorage.getItem('message');
let connector = "in";
let new_date = date + ' ' + connector;   

document.addEventListener("DOMContentLoaded", function() {
    const cash_out = document.getElementById("button2");

    cash_out.addEventListener("click", function() {
        window.location.href = 'cash_out.html';
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const staffButton = document.getElementById("button1");

    staffButton.addEventListener("click", function() {
        window.location.href = "cash_in.html";
    });
});

const total_cash_in = localStorage.getItem(new_date);
const total_cash_out = localStorage.getItem(date);

document.getElementById('cashInLabel').innerText = total_cash_in || '0';
document.getElementById('cashOutLabel').innerText = total_cash_out || '0';
document.getElementById('balanceLabel').innerText = total_cash_in - total_cash_out || '0';

const ctx = document.getElementById('myPieChart').getContext('2d');
const width = 200; 
const height = 200; 

// const data = {
//     labels: ['Cash In', 'Cash Out'],
//     datasets: [{
//         label: 'Expense',
//         data: [total_cash_in || 0, total_cash_out || 0],
//         backgroundColor: [
//             'rgb(255, 99, 132)',
//             'rgb(54, 162, 235)',
//         ]
//     }]
// };

// const myPieChart = new Chart(ctx, {
//     type: 'pie',
//     data: data
// });
