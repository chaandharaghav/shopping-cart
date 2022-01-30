import '../styles/Cart.css';

import CartItem from './CartItem';
import CartSummaryItem from './CartSummaryItem';

function Cart({ cartItems }) {
  cartItems = [
    { id: 2, count: 3 },
    { id: 3, count: 3 },
  ];
  let itemids = cartItems.map((item) => item.id);

  return (
    <div id="cart-page">
      <div id="cart-outline">
        <div id="cart-header">
          <h2>Your cart</h2>
          <span>
            <span id="num-items">{itemids.length}</span> items
          </span>
        </div>
        <div id="item-list">
          {itemids.map((itemid) => (
            <CartItem itemid={itemid} />
          ))}
        </div>
        <div id="order-summary">
          <h2>Order summary</h2>
          <CartSummaryItem
            summaryItemName={'Subtotal'}
            summaryItemValue={2 * 200}
          />
          <CartSummaryItem
            summaryItemName={'Delivery charges'}
            summaryItemValue={20}
          />
          <CartSummaryItem summaryItemName={'Total'} summaryItemValue={420} />
          <button id="checkout-btn">Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
