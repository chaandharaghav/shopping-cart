import '../styles/Navbar.css';

import shoppingCartIcon from '../icons/cart-shopping-solid.svg';
import { Link } from 'react-router-dom';

function Navbar(props) {
  return (
    <header>
      <nav id="navbar">
        <h1>Shoppers</h1>
        <ul>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/products'}>Products</Link>
          </li>
          <li>
            <Link to={'/cart'}>
              <img src={shoppingCartIcon} height={18} alt="Shopping cart"></img>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
