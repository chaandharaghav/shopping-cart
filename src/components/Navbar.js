import '../styles/Navbar.css';

import shoppingCartIcon from '../icons/cart-shopping-solid.svg';

function Navbar(props) {
  return (
    <header>
      <nav id="navbar">
        <h1>{props.brandName}</h1>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/products">Products</a>
          </li>
          <li>
            <a href="/cart">
              <img src={shoppingCartIcon} height={18} alt="Shopping cart"></img>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
