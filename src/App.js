import './styles/reset.css';
import './App.css';

import Products from './components/Products';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Home from './components/Home';

import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useState } from 'react';

import products from './fakedata/products.json';

import { Provider } from 'react-redux';
import store from './app/store';

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

  function handleCartItemDelete(id) {
    setCart(cart.filter((item) => item.id !== id));
  }

  function findSubTotal() {
    let subTotal = 0;

    for (let item of cart) {
      subTotal += item.count * parseInt(products[item.id - 1].price);
    }

    return subTotal;
  }

  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/products"
              element={<Products handleAddToCart={handleAddToCart} />}
            />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
