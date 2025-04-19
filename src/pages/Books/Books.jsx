import React, { Suspense } from "react";
import Book from "./Book";

const Books = ({ booksData }) => {
   return (
      <div className="my-20">
         <h1 className="text-[#131313] text-[40px] text-center font-bold playfairDisplay mb-9">
            Books
         </h1>

         <Suspense fallback={<span>Loading...</span>}>
            <div className="grid md:grid-cols-3 gap-6">
               {booksData.map((book) => (
                  <Book key={book.bookId} book={book} />
               ))}
            </div>
         </Suspense>
      </div>
   );
};

export default Books;
