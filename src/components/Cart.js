import '../styles/Cart.css';

import CartItem from './CartItem';

function Cart(props) {
  return (
    <div id="cart-page">
      <div id="cart-outline">
        <div id="cart-header">
          <h2>Your cart</h2>
          <span>
            <span id="num-items">3</span> items
          </span>
        </div>
        <div id="item-list">
          <CartItem itemid={2} />
        </div>
        <div id="order-summary"></div>
      </div>
    </div>
  );
}

export default Cart;
