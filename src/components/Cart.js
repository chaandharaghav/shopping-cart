import '../styles/Cart.css';

import CartItem from './CartItem';
import CartSummaryItem from './CartSummaryItem';

function Cart({
  cart,
  handleCartItemInc,
  handleCartItemDec,
  handleCartItemCountChange,
  findSubTotal,
}) {
  return (
    <div id="cart-page">
      <div id="cart-outline">
        <div id="cart-header">
          <h2>Your cart</h2>
          <span id="num-items">{cart.length} items</span>
        </div>
        <div id="item-list">
          {cart.length ? (
            cart.map((item) => (
              <CartItem
                item={item}
                key={item.id}
                handleCartItemInc={handleCartItemInc}
                handleCartItemDec={handleCartItemDec}
                handleCartItemCountChange={handleCartItemCountChange}
              />
            ))
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
            summaryItemValue={10}
          />
          <CartSummaryItem
            summaryItemName={'Total'}
            summaryItemValue={findSubTotal() + 10}
          />
          <button id="checkout-btn">Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
