import '../styles/QuantitySelector.css';

function QuantitySelector({
  item,
  handleCartItemDec,
  handleCartItemInc,
  handleCartItemCountChange,
}) {
  return (
    <div className="quantity-selector">
      <button className="dec-btn" onClick={() => handleCartItemDec(item.id)}>
        -
      </button>
      <input
        type="number"
        min={1}
        value={item.count}
        onChange={(e) => {
          handleCartItemCountChange(item.id, e.target.value);
        }}
      />
      <button className="inc-btn" onClick={() => handleCartItemInc(item.id)}>
        +
      </button>
    </div>
  );
}

export default QuantitySelector;
