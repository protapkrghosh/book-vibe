import React from 'react';
import bookImage from "../assets/books.png";

const Banner = () => {
   return (
      <div className="md:flex justify-between items-center bg-[#1313130D] rounded-3xl px-32 py-20">
         <div>
            <p className="text-[#131313] text-[56px] font-bold leading-[84px] playfairDisplay">
               Books to freshen up your bookshelf
            </p>
            <a className="text-white btn bg-[#23BE0A] hover:bg-[#22be0ac0] rounded-[8px] mr-4 duration-300 mt-12">
               View The List
            </a>
         </div>

         <div>
            <img src={bookImage} alt="Image" />
         </div>
      </div>
   );
};

export default Banner;