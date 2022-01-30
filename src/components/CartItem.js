import '../styles/CartItem.css';

import images from '../fakedata/productimages';
import products from '../fakedata/products.json';

import QuantitySelector from '../components/QuantitySelector';

function CartItem({
  item,
  handleCartItemDec,
  handleCartItemInc,
  handleCartItemDelete,
  handleCartItemCountChange,
}) {
  const productItem =
    // eslint-disable-next-line eqeqeq
    products[products.findIndex((product) => product.id == item.id)]; // double equals because we are using JSON

  return (
    <div className="cart-item">
      <figure>
        <img src={images[productItem.id - 1]} alt={productItem.name} />
      </figure>
      <span className="item-name">{productItem.name}</span>
      <span className="item-price">${productItem.price}</span>
      <QuantitySelector
        item={item}
        handleCartItemInc={handleCartItemInc}
        handleCartItemDec={handleCartItemDec}
        handleCartItemCountChange={handleCartItemCountChange}
      />
      <button
        className="remove-item-btn"
        onClick={() => {
          handleCartItemDelete(item.id);
        }}
      >
        Remove
      </button>
    </div>
  );
}

export default CartItem;
