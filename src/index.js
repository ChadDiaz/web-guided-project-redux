import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles.css";

import { titleReducer } from "./reducers/titleReducer";
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(titleReducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
