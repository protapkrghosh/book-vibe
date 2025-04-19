import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../utility/addToDB";
import ReadBookDetails from "./ReadBookDetails";
import { IoIosArrowDown } from "react-icons/io";

const ReadList = () => {
   const [readList, setReadList] = useState([]);
   const [sort, setSort] = useState("");
   const data = useLoaderData();

   useEffect(() => {
      const storedBooksData = getStoredBook();
      const convertedStoredBook = storedBooksData.map((id) => parseInt(id));

      const myReadList = data.filter((book) =>
         convertedStoredBook.includes(book.bookId)
      );

      setReadList(myReadList);
   }, []);

   const handleSort = (type) => {
      setSort(type);

      if (type === "Pages") {
         const sortedByPage = [...readList].sort(
            (a, b) => a.totalPages - b.totalPages
         );
         setReadList(sortedByPage);
      }

      if (type === "Ratings") {
         const sortedByRatings = [...readList].sort(
            (a, b) => a.rating - b.rating
         );
         setReadList(sortedByRatings);
      }
   };

   return (
      <div>
         {/* Sort Dropdown */}
         <div className="flex justify-center">
            <div className="dropdown">
               <div
                  tabIndex={0}
                  role="button"
                  className="text-white text-[18px] font-medium btn bg-[#23BE0A] m-1"
               >
                  Sort By {sort ? sort : ""}
                  <IoIosArrowDown />
               </div>

               <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-[#F4FCF3] rounded-box z-1 w-52 p-2 shadow-sm"
               >
                  <li onClick={() => handleSort("Pages")}>
                     <a>Pages</a>
                  </li>
                  <li onClick={() => handleSort("Ratings")}>
                     <a>Ratings</a>
                  </li>
               </ul>
            </div>
         </div>

         <Tabs>
            <TabList>
               <Tab>Read Book</Tab>
               <Tab>Wishlist Books</Tab>
            </TabList>

            <TabPanel>
               <h2 className="text-2xl font-bold playfairDisplay my-6">
                  Read Books List {readList.length}
               </h2>

               <div className="space-y-6 mb-12">
                  {readList.map((readBook) => (
                     <ReadBookDetails
                        key={readBook.bookId}
                        readBook={readBook}
                     />
                  ))}
               </div>
            </TabPanel>
            <TabPanel>
               <h2 className="text-2xl font-bold playfairDisplay my-6">
                  Wish List
               </h2>
            </TabPanel>
         </Tabs>
      </div>
   );
};

export default ReadList;
