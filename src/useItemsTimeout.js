import { useState, useEffect } from "react";

const initialItems = [
  { id: "1", text: "strawberry" },
  { id: "2", text: "pear" },
  { id: "3", text: "apple" },
  { id: "4", text: "grape" }
];

const getItems = () => {
  return new Promise((res, rej) => {
    window.setTimeout(() => {
      res(initialItems);
    }, 500);
  })
}

export default function useItems() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems()
    .then(setItems)
  }, []);

  return {
    items,
    setItems
  };
}
