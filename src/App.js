import './styles/reset.css';
import './App.css';

import Products from './components/Products';
import Navbar from './components/Navbar';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Cart />
    </div>
  );
}

export default App;
