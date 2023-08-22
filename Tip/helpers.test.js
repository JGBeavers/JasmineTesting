describe('Helpers test (with setup and tear-down)', function () {
  beforeEach(function () {
    billAmtInput.value = 100;
    tipAmtInput.value = 15;
    submitPaymentInfo();
  });
  it('should sum total tip amount of all payments on sumPaymentTotal()', function () {
    expect(sumPaymentTotal('tipAmt')).toEqual(15);

    billAmtInput.value = 200;
    tipAmtInput.value = 40;

    submitPaymentInfo();

    expect(sumPaymentTotal('tipAmt')).toEqual(55);
  });

  it('should sum tip percent of a single tip on calculateTipPercent()', function () {
    expect(calculateTipPercent(100, 23)).toEqual(23);
    expect(calculateTipPercent(111, 11)).toEqual(10);
  });

  it('should generate delete td and append to tr on appendDeleteBtn(tr, type)', function () {
    let newTr = document.createElement('tr');

    appendDeleteBtn(newTr);

    expect(newTr.children.length).toEqual(1);
    expect(newTr.firstChild.innerHTML).toEqual('X');
  });

  it('should append a new td given a tr on appendTd()', function () {});
  afterEach(function () {
    billAmtInput.value = '';
    tipAmtInput.value = '';
    paymentTbody.innerHTML = '';
    serverTbody.innerHTML = '';
    allPayments = {};
  });
});
