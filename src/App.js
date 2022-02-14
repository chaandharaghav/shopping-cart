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
  const [cart, setCart] = useState([]);

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
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
