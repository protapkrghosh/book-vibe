import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import BookDetails from "../pages/Books/BookDetails";
import About from "../pages/About/About";
import ReadList from "../pages/ReadList/ReadList";

export const router = createBrowserRouter([
   {
      path: "/",
      Component: Root,
      errorElement: <ErrorPage />,
      children: [
         {
            index: true,
            loader: () => fetch("booksData.json"),
            path: "/",
            Component: Home,
         },
         {
            path: "/about",
            Component: About,
         },
         {
            path: "/read-list",
            loader: () => fetch("booksData.json"),
            Component: ReadList,
         },
         {
            path: "/book-details/:id",
            loader: () => fetch("booksData.json"),
            Component: BookDetails,
         },
      ],
   },
]);
