function Item({ item, onDeleteItem, onToggleItem }) {
  const { id, description, quantity, packed } = item;
  return (
    <li>
      <input
        type="checkbox"
        checked={packed}
        onChange={() => onToggleItem(id)}
      />
      <span
        style={
          packed
            ? {
                textDecoration: "line-through",
              }
            : {}
        }
      >
        {description} {quantity}
      </span>
      <button onClick={() => onDeleteItem(id)}>❌️</button>
    </li>
  );
}

export default Item;
