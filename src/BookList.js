import React, { useState } from "react";
import BookDetail from "./BookDetail";
import BookItem from "./BookItem";
import { books } from "./books/bookData";

const BookList = () => {
  const [selectedBook, setSelectedBook] = useState({});
  const [bookDetail, showBookDetail] = useState(false);

  const handleBack = () => {
    showBookDetail(false);
  };

  const openBookDetails = book => {
    setSelectedBook(book);
    showBookDetail(true);
  };

  return (
    <div>
      {bookDetail ? (
        <BookDetail book={selectedBook} onBack={handleBack} />
      ) : (
        <ul>
          {books.map(book => (
            <BookItem
              book={book}
              openBookDetails={openBookDetails}
              key={book.id}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookList;
