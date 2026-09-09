import { useState } from "react";
import Item from "./Item";

function PackingList({ items, onDeleteItem, onToggleItem, onClearList }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  switch (sortBy) {
    case "input": {
      sortedItems = items;
      break;
    }
    case "description":
      sortedItems = items
        .slice()
        .sort((a, b) =>
          a.description
            .toLowerCase()
            .localeCompare(b.description.toLowerCase()),
        );
      break;
    case "packed":
      sortedItems = items.slice().sort((a, b) => b.packed - a.packed);
      break;
  }

  return (
    <div className="list">
      <ul>
        {sortedItems?.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort By Input Order</option>
          <option value="description">Sort By Description</option>
          <option value="packed">Sort By packed status</option>
        </select>
        <button onClick={onClearList}>Clear List</button>
      </div>
    </div>
  );
}

export default PackingList;
