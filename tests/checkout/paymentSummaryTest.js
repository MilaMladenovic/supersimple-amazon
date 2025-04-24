import { cart } from "../../data/cart-class.js";
import { loadProductsFetch } from "../../data/products.js";
import { renderPaymentSummary } from "../../scripts/checkout/paymentSummary.js";

describe('test suite: renderPaymentSummary', () => {
  const productId1 = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6';
  const productId2 = '15b6fc6f-327a-4ec4-896f-486349e85a3d';

  beforeAll(async () => {
    await loadProductsFetch();
  });

  beforeEach(() => {
    spyOn(localStorage, 'setItem');

    document.querySelector('.js-test-container')
    .innerHTML = `
      <div class="js-order-summary"></div>
      <div class="js-checkout-header"></div>
      <div class="js-payment-summary"></div>
    `;

    /*
    spyOn(localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify([{
        productId: productId1,
        quantity: 2,
        deliveryOptionId: '1'
      }, {
        productId: productId2,
        quantity: 1,
        deliveryOptionId: '2'
      }]);
    });
    loadFromStorage();
    */

    cart.cartItems = [{
      productId: productId1,
      quantity: 2,
      deliveryOptionId: '1'
    }, {
      productId: productId2,
      quantity: 1,
      deliveryOptionId: '2'
    }];

    renderPaymentSummary();
  });

  afterEach(() => {
    document.querySelector('.js-test-container').innerHTML = '';
  });


  it('displays the payment summary', () => {
    expect(
      document.querySelector('.js-items-count').innerText
    ).toContain('Items (3)');
    expect(
      document.querySelector('.js-payment-summary-money').innerText
    ).toEqual('$42.75');
    expect(
      document.querySelector('.js-payment-summary-shipping').innerText
    ).toEqual('$4.99');
    expect(
      document.querySelector('.js-payment-summary-total-before-tax').innerText
    ).toEqual('$47.74');
    expect(
      document.querySelector('.js-payment-summary-tax').innerText
    ).toEqual('$4.77');
    expect(
      document.querySelector('.js-payment-summary-total').innerText
    ).toEqual('$52.51');
  });
});