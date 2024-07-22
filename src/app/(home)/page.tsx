import Banner from "@/app/(home)/components/Banner";
import Image from "next/image";
import BookList from "./components/BookList";
import { Book } from "@/types";

// by default next is having server components.
// if we want to use client components then at top we need to specify 'use client'.
export default async function Home() {
  // data fetching.
  // use fetch method in next because it gives more functionality to server components then axios.
  const response = await fetch(`${process.env.BACKEND_URL}/books`);

  if (!response.ok) {
    throw new Error("An error occure while fetching the Books!");
  }

  const booksData = await response.json();
  const books: Book[] = JSON.parse(JSON.stringify(booksData.listOfBooks));

  return (
    <>
      <Banner />
      <BookList books={books} />
    </>
  );
}
