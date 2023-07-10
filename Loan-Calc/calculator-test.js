it('should calculate the monthly rate correctly', function () {
  const loanValues = { amount: 20000, years: 10, rate: 4 };
  expect(calculateMonthlyPayment(loanValues)).toEqual('202.49');
});

it('should return a result with 2 decimal places', function () {
  const loanValues = { amount: 15000, years: 4, rate: 3.95 };
  expect(calculateMonthlyPayment(loanValues)).toEqual('338.35');
});

/// etc
