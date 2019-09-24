import React from "react";
import "./App.css";

const BookDetail = ({ book, onBack }) => {
  return (
    <section>
      <div className="button-wrapper">
        <button className="back-button" onClick={onBack}>
          Back
        </button>
      </div>
      <div className="main">
        <div className="left">
          <img src={book.img} alt="" />
        </div>
        <div className="right">
          <h3 className="book-title">{book.name}</h3>
          <div className="book-info">{book.detail}</div>
        </div>
      </div>
    </section>
  );
};

export default BookDetail;
