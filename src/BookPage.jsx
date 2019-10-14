import React from "react";
import { useParams } from "react-router-dom";

import PageLayout from "./PageLayout";
import BookDetail from "./BookDetail";
import { books } from "./books/bookData";

function BookPage() {
  const { id } = useParams();
  const book = books.find(book => book.id === id);

  return (
    <PageLayout>
      <BookDetail book={book} />
    </PageLayout>
  );
}

export default BookPage;
