import Banner from "@/app/(home)/components/Banner";
import Image from "next/image";
import BookList from "./components/BookList";
import { Book } from "@/types";
import { Suspense } from "react";
import Loading from "@/components/Loading";

// by default next is having server components.
// if we want to use client components then at top we need to specify 'use client'.
export default async function Home() {
  return (
    <>
      <Banner />
      <Suspense fallback={<Loading />}>
        <BookList />
      </Suspense>
    </>
  );
}
