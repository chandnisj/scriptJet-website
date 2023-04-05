import React, { useState } from "react";
import text from "../Image-logo/text.png";
import { Link } from "react-router-dom";
function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-50 font-serif fixed top-0 w-full" style={{zIndex : '100'}}>
    <div className=" mx-auto px-2 sm:px-6 md:px-6 lg:px-8 py-4" style={{maxWidth :'80%'}} >
      <div className="flex items-center justify-between  h-full">
        <div className="flex items-center justify-center">
          <Link
              to="/"
             className="flex title-font font-medium items-center justify-center  text-gray-900  md:mb-0"
            >
              {" "}
             <img
                src={text}
               alt="Script-Jet"
                className="md:h-full md:w-50 w-48 sm:h-full"
             />
          </Link>
        </div>
        <div className="hidden lg:block lg:items-center ">
          <div className=" flex items-center justify-center text-xl space-x-8 " >
            <Link to="/Service" className="hover:text-gray-900 transition hover:scale-105 hover:underline decoration-[#14406D]">
            Service
            </Link>
            <Link to="/Technologies" className="hover:text-gray-900 transition hover:scale-105 hover:underline decoration-[#14406D]">
            Technologies
            </Link>
            <Link to="/Aboutus" className="whitespace-nowrap hover:text-gray-900 transition hover:scale-105 hover:underline decoration-[#14406D]">
            About us
            </Link>
            <Link to="/Career" className="hover:text-gray-900 transition hover:scale-105 hover:underline decoration-[#14406D]">
            Career
           </Link>
            <Link to='/Contactus'
                  className=" bg-[#14406D] whitespace-nowrap hover:bg-gray-400 hover:text-black text-white font-serif  text-lg  border-0 py-2 px-3 focus:outline-none rounded-tr-xl rounded-bl-xl  mt-4 md:mt-0"
              >
                Contact-Us
            </Link>
          </div>
        </div> 
        <div className="-mr-2 flex lg:hidden">
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

    <div className={`${isOpen ? "block" : "hidden"} lg:hidden`}>
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-2xl font-serif">
        <Link to="/Service" className="hover:text-gray block px-3 py-2 rounded-md  ">
        Service
        </Link>
        <Link to="/Technologies" className="hover:text-gray block px-3 py-2 rounded-md">
        Technologies
        </Link>
        <Link to="/Aboutus" className="hover:text-gray block px-3 py-2 rounded-md ">
        Aboutus
        </Link>
        <Link to="/Career" className="hover:text-gray block px-3 py-2 rounded-md ">
         Career
        </Link>
        <Link to="/Contactus" className="hover:text-gray block px-3 py-2 rounded-md ">
        Contact-Us
       </Link>
      </div>
    </div>
  </nav>
    
)
}   

export default NavBar;
