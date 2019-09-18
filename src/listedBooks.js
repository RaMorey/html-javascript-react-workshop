import React,  { useState }  from 'react';
import BookDetailed from './bookDetailed';
import ConferenceItem from './conferenceItem';
import { books } from './books/bookData';

const ListedBooks = () => {

const [ inspectedBook, setInspectedBook ] = useState({});
const [ detailedVisible, setVisible ] = useState(false);

const handleBack = () => {
  setVisible(false);
}

const openBookDetails = (book) => {
  setInspectedBook(book);
  setVisible(true);
}

return (
  <div>
  { detailedVisible ?
   <BookDetailed book={inspectedBook} onBack={handleBack} />
    :  (
        <ul>
          { books.map(book => <ConferenceItem book={book} openBookDetails={openBookDetails} />) }
        </ul>
  )}
  </div>
)};

export default ListedBooks;