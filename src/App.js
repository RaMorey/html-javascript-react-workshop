import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./styles.css";

import List from "./List";

class App extends Component {
  render() {
    return (
      <div className="App">
        <List />
      </div>
    );
  }
}

export default hot(module)(App);
