import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
   const links = (
      <>
         <NavLink to={"/"} className="nav-links">
            Home
         </NavLink>

         <NavLink to={"/about"} className="nav-links ml-4">
            About
         </NavLink>

         <NavLink to={"/listed-books"} className="nav-links mx-4">
            Listed Books
         </NavLink>

         <NavLink to={"/pages"} className="nav-links">
            Pages to Read
         </NavLink>
      </>
   );

   return (
      <div className="navbar mt-6 mb-10">
         <div className="navbar-start">
            <div className="dropdown">
               <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
               >
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     className="h-5 w-5"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                  >
                     {" "}
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                     />{" "}
                  </svg>
               </div>
               <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow"
               >
                  {links}
               </ul>
            </div>
            <a href="/" className="text-[28px] font-bold text-[#131313]">
               Book Vibe
            </a>
         </div>
         <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
         </div>
         <div className="navbar-end">
            <a className="text-white btn bg-[#23BE0A] hover:bg-[#22be0ac0] rounded-[8px] mr-4 duration-300">
               Sign In
            </a>
            <a className="text-white btn bg-[#59C6D2] hover:bg-[#6db2bb] rounded-[8px] duration-300">
               Sign Up
            </a>
         </div>
      </div>
   );
};

export default Navbar;
