import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../utility/addToDB";
import ReadBookDetails from "./ReadBookDetails";

const ReadList = () => {
   const [readList, setReadList] = useState([]);
   const data = useLoaderData();

   useEffect(() => {
      const storedBooksData = getStoredBook();
      const convertedStoredBook = storedBooksData.map((id) => parseInt(id));

      const myReadList = data.filter((book) =>
         convertedStoredBook.includes(book.bookId)
      );

      setReadList(myReadList);
   }, []);

   return (
      <div>
         <Tabs>
            <TabList>
               <Tab>Read Book</Tab>
               <Tab>Wishlist Books</Tab>
            </TabList>

            <TabPanel>
               <h2 className="text-2xl font-bold playfairDisplay my-6">
                  Read Book List {readList.length}
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
               <h2>Wish List</h2>
            </TabPanel>
         </Tabs>
      </div>
   );
};

export default ReadList;
