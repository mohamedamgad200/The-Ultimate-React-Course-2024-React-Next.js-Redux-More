import { useState } from "react";
import Form from "./Form";
import Logo from "./Logo";
import PackingList from "./PackingList";
import Stats from "./Stats";
export default function App() {
  const [items, setItems] = useState([]);
  function handelAddItem(item) {
    setItems((items) => [...items, item]);
  }
  function handelDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handelClearAll() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  }
  function handelToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handelAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handelDeleteItem}
        onToggleItem={handelToggleItem}
        onClearAll={handelClearAll}
      />
      <Stats items={items} />
    </div>
  );
}
