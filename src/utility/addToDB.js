import toast from "react-hot-toast";

const getStoredBook = () => {
   const storedBookSTR = localStorage.getItem("readList");

   if (storedBookSTR) {
      const storedBookData = JSON.parse(storedBookSTR);
      return storedBookData;
   } else {
      return [];
   }
};

const addToStoredDB = (id) => {
   const storedBookData = getStoredBook();

   if (storedBookData.includes(id)) {
      toast.error(`This book already exist`);
   } else {
      storedBookData.push(id);
      const data = JSON.stringify(storedBookData);
      localStorage.setItem("readList", data);
      toast.success('Book Added successfully');
      console.log(storedBookData);
   }
};

export { addToStoredDB };
