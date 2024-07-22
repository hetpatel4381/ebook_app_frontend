import { Book } from "@/types";
import React from "react";
import BookCard from "./BookCard";

const BookList = async () => {
  // data fetching.
  // use fetch method in next because it gives more functionality to server components then axios.
  const response = await fetch(`${process.env.BACKEND_URL}/books`, {
    next: {
      revalidate: 3600,
    },
  });

  if (!response.ok) {
    throw new Error("An error occure while fetching the Books!");
  }

  const booksData = await response.json();
  const books: Book[] = JSON.parse(JSON.stringify(booksData.listOfBooks));
  return (
    <>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-7xl mx-auto mb-10">
        {Array.isArray(books) &&
          books.map((book) => <BookCard key={book._id} book={book} />)}
      </div>
    </>
  );
};

export default BookList;
