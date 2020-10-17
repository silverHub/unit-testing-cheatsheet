import React, {useState} from "react";
import useItemsTimeout from "./hooks/useItemsTimeout";

const ChooserTimeout = () => {
  const { items, setItems } = useItemsTimeout();
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
    <div>
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
};
export default ChooserTimeout;
