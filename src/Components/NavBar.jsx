import React, { useState } from "react";
import text from "../Image-logo/text.png";
import { Link } from "react-router-dom";
function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (

    <nav className="bg-blue-50 font-serif fixed top-0 w-full" style={{zIndex : '100'}}>
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-2">
      <div className="flex items-center justify-between h-full">
        <div className="flex  items-center justify-center">
        <Link
              to="/"
             className="flex title-font font-medium  lg:inline-block items-center justify-center  text-gray-900  md:mb-0"
            >
              {" "}
             <img
                src={text}
               alt="Script-Jet"
                className="md:h-full md:w-48 w-48"
             />
          </Link>
        </div>
        <div className="hidden md:block ">
          <div className="ml-10 flex items-baseline text-2xl">
            <Link to="/Service" className="mr-5 hover:text-gray-900 transition  hover:scale-105 hover:underline decoration-[#14406D]">
            Service
            </Link>
            <Link to="/Technologies" className="mr-5 hover:text-gray-900 transition   hover:scale-105 hover:underline decoration-[#14406D]">
            Technologies
            </Link>
            <Link to="/Aboutus" className="mr-5 hover:text-gray-900 transition   hover:scale-105 hover:underline decoration-[#14406D]">
            Aboutus
            </Link>
            <Link to="/Career" className="mr-5 hover:text-gray-900 transition   hover:scale-105 hover:underline decoration-[#14406D]">
            Career
           </Link>
           <Link to='/Contactus'
                  className=" bg-[#14406D] hover:bg-gray-400 hover:text-black text-white font-serif  text-lg border-0 py-1 px-3 focus:outline-none rounded-tr-xl rounded-bl-xl text-base mt-4 md:mt-0"
               >
                 Contact-Us
            </Link>
          </div>
        </div>
        <div className="-mr-2 flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {!isOpen ? (
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>

    <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <Link to="/Service" className="hover:text-gray block px-3 py-2 rounded-md text-lg font-serif">
        Service
        </Link>
        <Link to="/Technologies" className="hover:text-gray block px-3 py-2 rounded-md text-base font-medium">
        Technologies
        </Link>
        <Link to="/Aboutus" className="hover:text-gray block px-3 py-2 rounded-md text-base font-medium">
        Aboutus
        </Link>
        <Link to="/Career" className="hover:text-gray block px-3 py-2 rounded-md text-base font-medium">
         Career
        </Link>
        <Link to="/Contactus" className="hover:text-gray block px-3 py-2 rounded-md text-base font-medium">
        Contact-Us
       </Link>
      </div>
    </div>
  </nav>
);
}   

export default NavBar;
