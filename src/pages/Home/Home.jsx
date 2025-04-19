import React from 'react';
import Banner from '../../components/Banner';
import Books from '../Books/Books';
import { useLoaderData } from 'react-router';

const Home = () => {
   const booksData = useLoaderData();

   return (
      <div>
         <Banner />
         <Books booksData={booksData} />
      </div>
   );
};

export default Home;
