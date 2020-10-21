import React from "react";
import ReactDOM from "react-dom";
import {worker} from './mocks/browser';
import App from "./App";

// start fake server
worker.start()

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
