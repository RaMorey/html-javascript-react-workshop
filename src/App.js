import React,  { useState } from 'react';
import BookDetailed from './bookDetailed';
import ConferenceItem from './conferenceItem';

import './App.css';

const App = () => {
  const [ book, setBook ] = useState({});
  const [ detailedVisible, setVisible ] = useState(false);

  const book1 = { id: 1, name: "Book 1", img: require('./images/book1.jpg') };
  const book2 = { id: 2, name: "Book 2", img: require('./images/book2.jpg') };
  const book3 = { id: 3, name: "Book 3", img: require('./images/book3.jpg') };
  const book4 = { id: 4, name: "Book 4", img: require('./images/book4.jpg') };

  const books =  [ book1, book2, book3, book4 ];

  const handleBack = () => {
    setVisible(false);
  }
  
  const handleClick = (book) => {
    setBook(book);
    setVisible(true);
  }

  return (
    <div>
      <span>{ book.name }</span>
      { detailedVisible 
        ? <BookDetailed book={book} onBack={handleBack} />
        :  (
            <ul>
              { books.map(book => <ConferenceItem book={book} onClick={handleClick} />) }
            </ul>
      )}
      <div className="products">
      {/* <ConferenceItem book={book1} />
      <ConferenceItem book={book2} />
      <ConferenceItem book={book3} />
      <ConferenceItem book={book4} /> */}
      </div>
    </div>
  );
}

export default App;
