import { useSelector } from 'react-redux';
import '../styles/Cart.css';

import CartItem from './CartItem';
import CartSummaryItem from './CartSummaryItem';

function Cart() {
  const cart = useSelector((state) => state.cart.cart);

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
          <CartSummaryItem summaryItemName={'Subtotal'} />
          <CartSummaryItem summaryItemName={'Delivery charges'} />
          <CartSummaryItem summaryItemName={'Total'} />
          <button id="checkout-btn">Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
