import { useState, useEffect } from "react";

// const initialItems = [
//   { id: "1", text: "strawberry" },
//   { id: "2", text: "pear" },
//   { id: "3", text: "apple" },
//   { id: "4", text: "grape" },
// ];

const getItems = () => {
  return fetch("http://api/server/endpoint").then((resp) => resp.json());
};

export default function useItemsFetch() {
  const [items, setItems] = useState([]);
  const [pending, setPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getItems()
      .then(setItems)
      .catch(setError)
      .finally(() => {
        setPending(false);
      });
  }, []);

  return {
    items,
    setItems,
    error,
    pending
  };
}
