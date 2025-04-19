import React from "react";
import { FaRegStar } from "react-icons/fa";

const Book = ({ book }) => {
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
   } = book;

   return (
      <div className="card hover:bg-[#f4fcf36b] border border-[rgba(19,19,19,0.15)] p-5 pb-0 duration-300">
         <figure className="bg-[#F3F3F3] py-8 px-12 rounded-[9px]">
            <img
               src={image}
               alt={bookName}
               className="h-[250px] w-[180px] rounded-md"
            />
         </figure>

         <div className="card-body px-0">
            <div className="flex gap-x-3 mt-2 mb-3">
               {tags.map((tag) => (
                  <span className="text-[#23BE0A] font-medium bg-[#23BE0A0D] px-4 py-2 rounded-[30px]">
                     {tag}
                  </span>
               ))}
            </div>

            <h2 className="card-title text-2xl text-[#131313] font-bold playfairDisplay">
               {bookName}
            </h2>

            <p className="text-[16px] text-[rgba(19,19,19,0.80)] font-medium">
               By: {author}
            </p>
            <div className="card-actions flex justify-between text-[16px] font-medium mt-10">
               <div className="">{category}</div>
               <div className="flex items-center gap-x-2">
                  {rating} <FaRegStar />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Book;
