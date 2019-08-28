import React from "react";
import { hot } from "react-hot-loader";
import "./styles.css";

import List from "./List";

const App = () => (
  <div className="App">
    <List />
  </div>
);

export default hot(module)(App);
