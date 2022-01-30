import '../styles/CartItem.css';

import images from '../fakedata/productimages';
import products from '../fakedata/products.json';

import QuantitySelector from '../components/QuantitySelector';

function CartItem({ itemid }) {
  // eslint-disable-next-line eqeqeq
  const item = products[products.findIndex((item) => item.id == itemid)]; // double equals because we are using JSON

  return (
    <div className="cart-item">
      <figure>
        <img src={images[item.id - 1]} alt={item.name} />
      </figure>
      <span className="item-name">{item.name}</span>
      <span className="item-price">${item.price}</span>
      <QuantitySelector />
      <button className="remove-item-btn">Remove</button>
    </div>
  );
}

export default CartItem;
