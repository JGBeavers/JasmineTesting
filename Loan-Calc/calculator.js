window.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('calc-form');
  if (form) {
    setupIntialValues();
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +document.getElementById('loan-amount').value,
    years: +document.getElementById('loan-years').value,
    rate: +document.getElementById('loan-rate').value,
  };
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const loanValues = { amount: 20000, years: 10, rate: 4 };
  const amountInput = document.querySelector('#loan-amount');
  amountInput.value = loanValues.amount;
  const yearsInput = document.querySelector('#loan-years');
  yearsInput.value = loanValues.years;
  const rateInput = document.querySelector('#loan-rate');
  rateInput.value = loanValues.rate;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const updatedLoanValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(updatedLoanValues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(loanValues) {
  const monthlyRate = loanValues.rate / 100 / 12;
  const n = Math.floor(loanValues.years * 12);
  return (
    (monthlyRate * loanValues.amount) /
    (1 - Math.pow(1 + monthlyRate, -n))
  ).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  monthlyElem = document.querySelector('#monthly-payment');
  monthlyElem.innerText = '$' + monthly;
}
