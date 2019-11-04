import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import initStore from "./redux/store";

import App from "./components/App";
import "./theme/main.scss";

const store = initStore();
const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
