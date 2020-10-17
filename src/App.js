import React, { useState } from "react";
import useItems from "./useItemsTimeout";
import "./styles.css";

export default function App() {
  const { items, setItems } = useItems();
  const [searchTerm, setSearchTerm] = useState("");

  const onSelect = (id) => {
    setItems(
      items.map((item) => {
        return item.id === id
          ? { ...item, selected: !item.selected }
          : { ...item };
      })
    );
  };
  const onSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="App">
      <h1>Select your choice</h1>
      <input id="search" value={searchTerm} onChange={onSearch} />
      <section>
        <span>Selected:</span>
        {items
          .filter((item) => item.selected)
          .map((selected) => (
            <span key={selected.id}>{selected.text}</span>
          ))}
      </section>
      <section>
        {items
          .filter((item) => item.text.match(searchTerm))
          .map(({ id, text, selected = false }) => (
            <div key={id}>
              <input
                id={id}
                type="checkbox"
                checked={selected}
                onChange={() => onSelect(id)}
              />
              <label htmlFor={id}>{text}</label>
            </div>
          ))}
      </section>
    </div>
  );
}
