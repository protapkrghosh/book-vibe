import React from 'react';
import { useParams } from 'react-router';

const BookDetails = () => {
   const { id } = useParams();
   console.log(id);

   return (
      <div>
         <h1>BookDetails</h1>
      </div>
   );
};

export default BookDetails;