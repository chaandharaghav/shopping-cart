import '../styles/CartItem.css';

import images from '../fakedata/productimages';

import QuantitySelector from '../components/QuantitySelector';

function CartItem(props) {
  return (
    <div className="cart-item">
      <figure>
        <img src={images[props.itemid]} alt="blah blah" />
      </figure>
      <span className="item-name">Green v neck</span>
      <span>
        $<span className="item-price">230</span>
      </span>
      <QuantitySelector />
      <button className="remove-items">Remove</button>
    </div>
  );
}

export default CartItem;
