import React from "react";
import { Link } from "react-router-dom";

const BookDetail = ({ book }) => {
  return (
    <section>
      <div className="button-wrapper">
        <Link to="/books" className="back-button">
          Back
        </Link>
      </div>
      <div className="main">
        <div className="left">
          <img src={book.img} alt="" />
        </div>
        <div className="right">
          <h3 className="book-title">{book.title}</h3>
          <div className="book-info">{book.desc}</div>
        </div>
      </div>
    </section>
  );
};

export default BookDetail;
