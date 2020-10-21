import React from "react";
import ChooserTimeout from "./ChooserTimeout";
import ChooserFetch from "./ChooserFetch";
import "./styles.css";

export default function App() {
  //  const { items, setItems } = useItemsFetch();

  return (
    <div className="App">
      <h1>Cheatsheet</h1>
        ...
      
      <h1>Examples</h1>
      <h2>Timeout based</h2>
      <ChooserTimeout />

      <h2>Server response based</h2>
      <ChooserFetch />

    </div>
  );
}
