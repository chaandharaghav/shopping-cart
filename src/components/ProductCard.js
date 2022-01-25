import images from '../fakedata/productimages';

import '../styles/ProductCard.css';

function ProductCard(props) {
  return (
    <div className="product-card">
      <figure>
        <img src={images[props.details.id - 1]} alt={props.details.name} />
      </figure>
      <p className="product-name">{props.details.name}</p>
      <p className="product-price">${props.details.price}</p>
      <button className="add-to-card-btn">Add to cart</button>
    </div>
  );
}

export default ProductCard;
