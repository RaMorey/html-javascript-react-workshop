import React from "react";
import {
  Redirect,
  Switch,
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import "./App.css";
import BookPage from "./BookPage";
import BooksPage from "./BooksPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/books" />
        </Route>

        <Route path="/books" exact={true}>
          <BooksPage />
        </Route>
        <Route path="/books/:id" children={<BookPage />} />
      </Switch>
    </Router>
  );
}

export default App;
