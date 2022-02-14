import '../styles/QuantitySelector.css';

import { useDispatch } from 'react-redux';
import { cartItemInc, cartItemDec } from '../slices/cartSlice';

function QuantitySelector({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="quantity-selector">
      <button
        className="dec-btn"
        onClick={() => dispatch(cartItemDec(item.id))}
      >
        -
      </button>
      <input type="number" min={1} value={item.count} />
      <button
        className="inc-btn"
        onClick={() => dispatch(cartItemInc(item.id))}
      >
        +
      </button>
    </div>
  );
}

export default QuantitySelector;
