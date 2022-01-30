function CartSummaryItem({ summaryItemName, summaryItemValue }) {
  return (
    <div className="cart-summary-item">
      <span>{summaryItemName}</span>
      <span>$ {summaryItemValue}</span>
    </div>
  );
}

export default CartSummaryItem;
