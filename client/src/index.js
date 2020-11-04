import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import combineReducers from "./store/combineReducers";

import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import "./normalize.css";

const store = createStore(combineReducers);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
