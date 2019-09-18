import React from 'react';
import './App.css';

const BookDetailed = ({ book, onBack }) => {
  return (
    <section>
      <div class="button-wrapper">
        <button className="back-button" onClick={onBack}>Back</button>
      </div>
      <div class="main">
          <div class="left">
            <img src={book.img} alt="" />
          </div>
          <div class="right">
            <h3 class="book-title">{ book.name }</h3>
            <div class="book-info">{ book.detail }</div>
          </div>
      </div>
    </section>
  );
}

export default BookDetailed;
