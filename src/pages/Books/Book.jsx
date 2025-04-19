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
      <div className="card hover:bg-[#f4fcf36b] border border-[#13131326] p-5 pb-0 duration-300">
         <figure className="bg-[#F3F3F3] py-8 px-12 rounded-[9px]">
            <img
               src={image}
               alt={bookName}
               className="h-[250px] w-[180px] rounded-md"
            />
         </figure>

         <div className="card-body px-0">
            <div className="flex gap-x-3 mt-2 mb-3">
               {tags.map((tag, index) => (
                  <span
                     key={index}
                     className="text-[#23BE0A] font-medium bg-[#23BE0A0D] px-4 py-2 rounded-[30px]"
                  >
                     {tag}
                  </span>
               ))}
            </div>

            <div className="flex justify-between items-center">
               <p className="card-title text-2xl text-[#131313] font-bold playfairDisplay">
                  {bookName}
               </p>
               <p className="text-[16px] text-end font-medium">
                  {yearOfPublishing} Y
               </p>
            </div>

            <p className="text-[16px] text-[rgba(19,19,19,0.80)] font-medium mb-5">
               By: {author}
            </p>
            <div className="card-actions flex justify-between text-[16px] font-medium pt-5 border-t border-dashed border-[#13131326]">
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
