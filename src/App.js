import './styles/reset.css';
import './App.css';

import Products from './components/Products';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Home from './components/Home';

import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useState } from 'react';

function App() {
  let [cart, setCart] = useState([]);

  function isCartEmpty() {
    return cart.length === 0;
  }

  function isItemInCart(id) {
    for (let item in cart) {
      if (item.id === id) {
        return true;
      }
    }
    return false;
  }

  function addToCart(id) {
    id = parseInt(id);
    if (isCartEmpty()) {
      setCart([{ id: id, count: 1 }]);
    } else {
      const copyCart = Array.from(cart);
      if (isItemInCart(id)) {
        for (let i = 0; i < copyCart.length; i++) {
          if (copyCart[i].id === id) {
            copyCart[i].id++;
            break;
          }
        }
        setCart(copyCart);
      } else {
        setCart([...copyCart, { id: id, count: 1 }]);
      }
    }
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/products"
            element={<Products addToCart={addToCart} />}
          />
          <Route path="/cart" element={<Cart cart={cart} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
