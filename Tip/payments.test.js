describe('Payments test (with setup and tear-down)', function () {
  beforeEach(function () {
    billAmtInput.value = 100;
    tipAmtInput.value = 15;
  });
  it('should add curPayment object to allPayments on submitPaymentInfo()', function () {
    submitPaymentInfo();

    expect(allPayments['payment1'].billAmt).toEqual('100');
    expect(allPayments['payment1'].tipPercent).toEqual(15);
    expect(allPayments['payment1'].tipAmt).toEqual('15');
  });

  it('should create new payment on createCurPayment()', function () {
    let testPayment = {
      billAmt: '100',
      tipPercent: 15,
      tipAmt: '15',
    };

    expect(createCurPayment()).toEqual(testPayment);
  });

  it('should update payment table on appendPaymentTable()', function () {});
  afterEach(function () {
    billAmtInput.value = '';
    tipAmtInput.value = '';
    allPayments = {};
    paymentTbody.innerHTML = '';
    serverTbody.innerHTML = '';
  });
});
