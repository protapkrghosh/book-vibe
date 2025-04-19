import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoredDB } from "../../utility/addToDB";

const BookDetails = () => {
   const { id } = useParams();
   const bookId = parseInt(id);
   const data = useLoaderData();
   const singleBook = data.find((book) => book.bookId === bookId);

   const {
      author,
      bookName,
      category,
      image,
      publisher,
      rating,
      review,
      totalPages,
      yearOfPublishing,
      tags,
   } = singleBook;

   const handleMarkAsRead = (id) => {
      addToStoredDB(id);
   };

   return (
      <div className="md:flex gap-12 mb-20">
         <div className="w-1/2 bg-[#1313130D] px-24 py-14 rounded-2xl">
            <img src={image} alt={bookName} className="rounded-xl" />
         </div>

         <div className="w-1/2">
            <h1 className="text-[#131313] text-[40px] font-bold playfairDisplay">
               {bookName}
            </h1>
            <div className="text-[rgba(19,19,19,0.80)] text-[20px] font-medium mt-3">
               <p className="mb-4">By: {author}</p>
               <p className="border-y border-[#13131326] py-3">{category}</p>
            </div>
            <p className="mt-6">
               <span className="text-[#131313] font-bold">Review:</span>{" "}
               {review}
            </p>

            <div className="space-x-3 border-b border-[#13131326] mt-6 pb-7">
               <span className="text-[#131313] font-bold">Tag</span>
               {tags.map((tag, index) => (
                  <span
                     key={index}
                     className="text-[#23BE0A] font-medium bg-[#23BE0A0D] px-4 py-2 rounded-[30px]"
                  >
                     #{tag}
                  </span>
               ))}
            </div>

            <div className="space-y-3 my-6">
               <div className="grid grid-cols-2">
                  <p>Numbers of Pages: </p>
                  <p className="font-semibold -ml-20">{totalPages}</p>
               </div>
               <div className="grid grid-cols-2">
                  <p>Publisher: </p>
                  <p className="font-semibold -ml-20">{publisher}</p>
               </div>
               <div className="grid grid-cols-2">
                  <p>Year of Publishing: </p>
                  <p className="font-semibold -ml-20">{yearOfPublishing}</p>
               </div>
               <div className="grid grid-cols-2">
                  <p>Rating: </p>
                  <p className="font-semibold -ml-20">{rating}</p>
               </div>
            </div>

            <div>
               <a
                  onClick={() => handleMarkAsRead(id)}
                  className="text-[#131313] btn bg-transparent hover:bg-[#f3f3f3e1] border-[#1313134d] rounded-[8px] mr-4 duration-300"
               >
                  Read
               </a>
               <a className="text-white btn bg-[#50B1C9] hover:bg-[#6da7b5] rounded-[8px] duration-300">
                  Wishlist
               </a>
            </div>
         </div>
      </div>
   );
};

export default BookDetails;
