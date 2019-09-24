import React from "react";
import "./App.css";

const BookItem = ({ book, openBookDetails }) => {
  return (
    <li>
      <img alt="" src={book.img} />
      <div className="info">
        <div className="title">{book.name}</div>
        <div className="desc">Select this book to find out more!</div>
        <button onClick={() => openBookDetails(book)}>Select Book</button>
      </div>
    </li>
  );
};

export default BookItem;
