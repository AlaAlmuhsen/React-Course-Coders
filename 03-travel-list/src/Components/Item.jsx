function Item({ item, onDeleteItem }) {
  const { id, description, quantity, packed } = item;
  return (
    <li>
      <input type="checkbox" checked={packed} />
      <span>
        {description} {quantity}
      </span>
      <button onClick={() => onDeleteItem(id)}>❌️</button>
    </li>
  );
}

export default Item;
