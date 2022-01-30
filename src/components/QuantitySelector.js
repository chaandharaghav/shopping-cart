import '../styles/QuantitySelector.css';

function QuantitySelector(props) {
  return (
    <div className="quantity-selector">
      <button className="dec-btn">-</button>
      <input type="number" min="0" max="100" />
      <button className="inc-btn">+</button>
    </div>
  );
}

export default QuantitySelector;
