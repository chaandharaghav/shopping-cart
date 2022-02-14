import '../styles/QuantitySelector.css';

import { useDispatch } from 'react-redux';
import {
  cartItemInc,
  cartItemDec,
  cartItemCountChange,
} from '../slices/cartSlice';

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
      <input
        type="number"
        min={1}
        value={item.count}
        onChange={(e) =>
          dispatch(cartItemCountChange({ id: item.id, count: e.target.value }))
        }
      />
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
