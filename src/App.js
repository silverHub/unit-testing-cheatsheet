import React from "react";
import ChooserTimeout from "./ChooserTimeout";
import ChooserFetch from "./ChooserFetch";
import "./styles.css";

export default function App() {
  //  const { items, setItems } = useItemsFetch();

  return (
    <div className="App">
      <h1>Timeout based</h1>
      <ChooserTimeout />

      <h1>Server response based</h1>
      <ChooserFetch />

    </div>
  );
}
