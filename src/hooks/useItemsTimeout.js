import { useState, useEffect } from "react";
import { initialItems } from '../mocks/testData';


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
