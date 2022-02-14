import { useDispatch } from 'react-redux';
import images from '../fakedata/productimages';

import '../styles/ProductCard.css';

import { addToCart } from '../slices/cartSlice';

function ProductCard({ details }) {
  const key = details.id;
  const dispatch = useDispatch();

  return (
    <div className="product-card">
      <figure>
        <img src={images[details.id - 1]} alt={details.name} />
      </figure>
      <p className="product-name">{details.name}</p>
      <p className="product-price">${details.price}</p>
      <button
        className="add-to-card-btn"
        onClick={() => {
          dispatch(addToCart(key));
        }}
      >
        Add to cart
      </button>
    </div>
  );
}

export default ProductCard;
