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
      //console.log('timeout fn runs')
      res(initialItems);
    }, 500);
  })//.then((res)=> { console.log('promise first then', res); return res;})
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
