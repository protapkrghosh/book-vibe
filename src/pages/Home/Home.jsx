import React from "react";
import Banner from "../../components/Banner";
import Books from "../Books/Books";
import { useLoaderData } from "react-router";
import { Helmet } from "react-helmet-async";

const Home = () => {
   const booksData = useLoaderData();

   return (
      <div>
         <Helmet>
            <title>Boi Poka | Home</title>
         </Helmet>

         <Banner />
         <Books booksData={booksData} />
      </div>
   );
};

export default Home;
