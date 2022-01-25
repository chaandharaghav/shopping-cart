import { useState, useEffect } from 'react';

// importing data as json
import productsjson from '../fakedata/products.json';

import ProductCard from './ProductCard';

function Products(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsjson);
  }, []);

  return (
    <div id="products">
      {products.map((product) => (
        <ProductCard details={product} key={product.id} />
      ))}
    </div>
  );
}

export default Products;
