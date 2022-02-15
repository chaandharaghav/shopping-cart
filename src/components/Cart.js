import '../styles/Cart.css';

import products from '../fakedata/products.json';

import CartItem from './CartItem';
import CartSummaryItem from './CartSummaryItem';

import { useSelector } from 'react-redux';

function Cart() {
  const cart = useSelector((state) => state.cart.cart);

  function findSubTotal() {
    let subTotal = 0;

    for (let item of cart) {
      let itemPrice = parseInt(products[item.id - 1].price);
      let itemCount = Number.isNaN(item.count) ? 1 : item.count;
      subTotal += itemCount * itemPrice;
    }

    return subTotal;
  }

  return (
    <div id="cart-page">
      <div id="cart-outline">
        <div id="cart-header">
          <h2>Your cart</h2>
          <span id="num-items">{cart.length} items</span>
        </div>
        <div id="item-list">
          {cart.length ? (
            cart.map((item) => <CartItem item={item} key={item.id} />)
          ) : (
            <div id="no-cart-items">No items in cart</div>
          )}
        </div>
        <div id="order-summary">
          <h2>Order summary</h2>
          <CartSummaryItem
            summaryItemName={'Subtotal'}
            summaryItemValue={findSubTotal()}
          />
          <CartSummaryItem
            summaryItemName={'Delivery charges'}
            summaryItemValue={findSubTotal() ? 10 : 0}
          />
          <CartSummaryItem
            summaryItemName={'Total'}
            summaryItemValue={findSubTotal() ? findSubTotal() + 10 : 0}
          />
          <button id="checkout-btn">Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
