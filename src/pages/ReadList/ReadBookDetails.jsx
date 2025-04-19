import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { IoPeopleOutline } from "react-icons/io5";
import { LiaPagerSolid } from "react-icons/lia";

const ReadBookDetails = ({ readBook }) => {
   const {
      bookId,
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
   } = readBook;

   return (
      <div className="flex gap-x-8 border border-[#13131326] rounded-2xl p-6">
         <div className="bg-[#1313130D] p-6 rounded-2xl w-60 h-52">
            <img
               src={image}
               alt=""
               className="w-3/4 h-full rounded-md mx-auto"
            />
         </div>

         <div>
            <h1 className="text-[#131313] text-2xl font-bold playfairDisplay">
               {bookName}
            </h1>
            <p className="text-[#131313CC] font-medium my-4">By: {author}</p>

            <div className="flex items-center">
               <span className="space-x-3">
                  <span className="text-[#131313] font-bold">Tag</span>
                  {tags.map((tag, index) => (
                     <span
                        key={index}
                        className="text-[#23BE0A] font-medium bg-[#23BE0A0D] px-4 py-2 rounded-[30px]"
                     >
                        #{tag}
                     </span>
                  ))}
               </span>

               <span className="text-[#131313CC] flex items-center ml-4">
                  <SlLocationPin size={18} className="mr-2" /> Year of
                  Publishing: {yearOfPublishing}
               </span>
            </div>

            <div className="text-[#13131399] flex gap-6 my-4">
               <p className="flex items-center">
                  <IoPeopleOutline size={20} className="mr-2" /> Publisher:{" "}
                  {publisher}
               </p>
               <p className="flex items-center">
                  <LiaPagerSolid size={23} className="mr-2" /> Pages:{" "}
                  {totalPages}
               </p>
            </div>

            <div className="flex items-center gap-x-3">
               <p className="text-[#328EFF] bg-[#328EFF26] rounded-full px-5 py-[7px] w-fit">
                  Category: {category}
               </p>
               <p className="text-[#FFAC33] bg-[#FFAC3326] rounded-full px-5 py-[7px] w-fit">
                  Rating: {rating}
               </p>
               <button className="text-[#FFF] bg-[#23BE0A] hover:bg-[#22be0ac7] rounded-full px-5 py-[7px] w-fit cursor-pointer duration-300">
                  View Details
               </button>
            </div>
         </div>
      </div>
   );
};

export default ReadBookDetails;
