import '../styles/Cart.css';

import CartItem from './CartItem';

function Cart(props) {
  let itemids = [2, 3, 4, 5, 6, 7, 8];
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
          {itemids.map((itemid) => (
            <CartItem itemid={itemid} />
          ))}
        </div>
        <div id="order-summary"></div>
      </div>
    </div>
  );
}

export default Cart;
