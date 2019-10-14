import React from "react";
import { Link } from "react-router-dom";

import "./App.css";

const BookItem = ({ book }) => {
  return (
    <li>
      <img alt="" src={book.img} />
      <div className="info">
        <div className="title">{book.title}</div>
        <div className="desc">{book.desc}</div>
        <Link to={`/books/${book.id}`}>Select Book</Link>
      </div>
    </li>
  );
};

export default BookItem;
