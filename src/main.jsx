import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./Routes/Routes";
import { Toaster } from "react-hot-toast";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
   <StrictMode>
      <HelmetProvider>
         <RouterProvider router={router} />
         <Toaster />
      </HelmetProvider>
   </StrictMode>
);
