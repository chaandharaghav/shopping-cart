import '../styles/CartItem.css';

import images from '../fakedata/productimages';

import QuantitySelector from '../components/QuantitySelector';

function CartItem({ itemid }) {
  return (
    <div className="cart-item">
      <figure>
        <img src={images[itemid]} alt="blah blah" />
      </figure>
      <span className="item-name">Green v neck</span>
      <span className="item-price">$230</span>
      <QuantitySelector />
      <button className="remove-item-btn">Remove</button>
    </div>
  );
}

export default CartItem;
