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
    for (let item of cart) {
      if (item.id === id) {
        return true;
      }
    }
    return false;
  }

  function handleAddToCart(id) {
    id = parseInt(id);
    if (isCartEmpty()) {
      setCart([{ id: id, count: 1 }]);
    } else {
      const copyCart = Array.from(cart);
      if (isItemInCart(id)) {
        for (let i = 0; i < copyCart.length; i++) {
          if (copyCart[i].id === id) {
            copyCart[i].count++;
            break;
          }
        }
        setCart(copyCart);
      } else {
        setCart([...copyCart, { id: id, count: 1 }]);
      }
    }
  }

  function handleCartItemInc(id) {
    const copyCart = [...cart];

    for (let i = 0; i < copyCart.length; i++) {
      if (copyCart[i].id === id) {
        copyCart[i].count++;
        break;
      }
    }

    setCart(copyCart);
  }

  function handleCartItemDec(id) {
    const copyCart = [...cart];

    for (let i = 0; i < copyCart.length; i++) {
      if (copyCart[i].id === id) {
        if (copyCart[i].count > 1) copyCart[i].count--;
        break;
      }
    }

    setCart(copyCart);
  }

  function handleCartItemCountChange(id, count) {
    const copyCart = [...cart];

    for (let i = 0; i < copyCart.length; i++) {
      if (copyCart[i].id === id) {
        if (count) copyCart[i].count = count;
        else copyCart[i].count = 1;

        break;
      }
    }

    setCart(copyCart);
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/products"
            element={<Products handleAddToCart={handleAddToCart} />}
          />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                handleCartItemDec={handleCartItemDec}
                handleCartItemInc={handleCartItemInc}
                handleCartItemCountChange={handleCartItemCountChange}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
