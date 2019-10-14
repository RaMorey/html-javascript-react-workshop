import React, { useState } from "react";
import BookItem from "./BookItem";
import { books } from "./books/bookData";

const BookList = () => {
  return (
    <ul>
      {books.map(book => (
        <BookItem book={book} key={book.id} />
      ))}
    </ul>
  );
};

export default BookList;
