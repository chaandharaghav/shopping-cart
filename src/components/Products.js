import { useState, useEffect } from 'react';

// importing data as json
import productsjson from '../fakedata/products.json';

import ProductCard from './ProductCard';

import '../styles/Products.css';

function Products(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsjson);
  }, []);

  return (
    <div id="products-page">
      <h2>Our Products</h2>
      <div id="products-list">
        {products.map((product) => (
          <ProductCard
            details={product}
            key={product.id}
            addToCart={props.addToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
