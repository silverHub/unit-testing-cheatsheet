import { useState, useEffect } from "react";

export const URL = "http://api/server/endpoint";

const getItems = () => {
  return window.fetch(URL).then((resp) => resp.json());
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
