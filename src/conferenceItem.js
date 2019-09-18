import React from 'react';
import './App.css';

const ConferenceItem = ({ book, onBookClick, onClick }) => {
  return (
    <li key={book.id}>
      <img alt="" src={book.img} />
      <div className="info">
        <div className="title">{ book.name }</div>
        <div className="desc">An incredible book about incredible things that you should definitely read.</div>
        <button onClick={() => onClick(book)}>Select Book</button>
      </div>
    </li>
  );
}

export default ConferenceItem;
