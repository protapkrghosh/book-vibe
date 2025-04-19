import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../utility/addToDB";
import Book from "../Books/Book";

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
               <h2>Read Book List {readList.length}</h2>
            </TabPanel>
            <TabPanel>
               <h2>Wish List</h2>
            </TabPanel>
         </Tabs>
      </div>
   );
};

export default ReadList;
