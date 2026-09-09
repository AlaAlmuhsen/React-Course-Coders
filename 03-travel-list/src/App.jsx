import { useState } from "react";
import Form from "./Components/Form";
import Logo from "./Components/Logo";
import PackingList from "./Components/PackingList";
import State from "./Components/State";

const initialItems = [
  {
    id: 1,
    description: "Passport",
    quantity: 2,
    packed: false,
  },
  {
    id: 2,
    description: "Socks",
    quantity: 12,
    packed: true,
  },
  {
    id: 3,
    description: "Apple",
    quantity: 3,
    packed: false,
  },
];

function App() {
  const [items, setItems] = useState(initialItems);

  function handleAddItems(newItem) {
    setItems((items) => [...items, newItem]);
    // setItems(items.push(newItem)) check why this is not valid in react
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id == id ? { ...item, packed: !item.packed } : item,
      ),
    );
  }

  function handleClearList() {
    setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <State items={items} />
    </div>
  );
}

export default App;
