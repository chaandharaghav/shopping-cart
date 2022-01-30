import images from '../fakedata/productimages';

import '../styles/ProductCard.css';

function ProductCard({ handleAddToCart, details }) {
  const key = details.id;

  return (
    <div className="product-card">
      <figure>
        <img src={images[details.id - 1]} alt={details.name} />
      </figure>
      <p className="product-name">{details.name}</p>
      <p className="product-price">${details.price}</p>
      <button className="add-to-card-btn" onClick={() => handleAddToCart(key)}>
        Add to cart
      </button>
    </div>
  );
}

export default ProductCard;
