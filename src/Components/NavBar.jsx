import React, { useState } from "react";
import text from "../Image-logo/text.png";
import { Link, useNavigate,useLocation } from "react-router-dom";
function NavBar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const handleTechnology = (value) => {
    localStorage.removeItem("techValue");
    navigate("/");
  };
  const location = useLocation();
  return (
    <nav
      className=" bg-orange-100  font-serif fixed top-0 w-full"
      style={{ zIndex: "100" }}
    >
      <div className=" mx-auto px-2 sm:px-6 md:px-6 lg:px-8 py-4 xl:max-w-[80%] lg:max-w-[90%]  max-w-[80%]">
        <div className="flex items-center justify-between  h-full">
          <div className="flex items-center justify-center">
            <Link
              to="/"
              className="flex title-font font-medium items-center justify-center  text-gray-900  md:mb-0"
              onClick={() => handleTechnology()}
            >
              <img
                src={text}
                alt="Script-Jet"
                className="w-48 min-w-[192px] "
              />
            </Link>
          </div>
          <div className="hidden lg:block lg:items-center  ">
            <div className="flex items-center justify-center text-xl space-x-16 text-[#14406D] ">
              <Link
                to="/Service"
                className={`mr-4 hover:text-[#FE9800] active:text-[#FE9800]  transition hover:scale-105  hover:underline underline-offset-8 decoration-[#FE9800] ${
                  location.pathname === "/Service" ? "text-[#FE9800] underline underline-offset-8 " : ""
                }`}  
                onClick={() => handleTechnology()}

              >
                Service
              </Link>
              <Link
                to="/Technologies"
                className={`mr-4 hover:text-[#FE9800] active:text-[#FE9800]  transition hover:scale-105  hover:underline underline-offset-8 decoration-[#FE9800] ${
                  location.pathname === "/Technologies" ? "text-[#FE9800] underline underline-offset-8 " : ""
                }`}  
                onClick={() => handleTechnology()}
              >
                Technology
              </Link>
              <Link
                to="/Aboutus"
                className={`mr-4 hover:text-[#FE9800] active:text-[#FE9800] whitespace-nowrap   transition hover:scale-105  hover:underline underline-offset-8 decoration-[#FE9800] ${
                  location.pathname === "/Aboutus" ? "text-[#FE9800] underline underline-offset-8 " : ""
                }`}  
                onClick={() => handleTechnology()}
              >
                About-us
              </Link>
              <Link
                to="/Career"
                className={`mr-4 hover:text-[#FE9800] active:text-[#FE9800] whitespace-nowrap   transition hover:scale-105  hover:underline underline-offset-8 decoration-[#FE9800] ${
                  location.pathname === "/Career" ? "text-[#FE9800] underline underline-offset-8 " : ""
                }`}  
                onClick={() => handleTechnology()}
              >
                Career
              </Link>
              <Link
                to="/Contactus"
                className="bg-[#14406D] whitespace-nowrap hover:bg-[#FE9800] hover:text-black text-white font-serif  text-lg  border-0 py-2 px-3 focus:outline-none rounded-lg  mt-4 md:mt-0"
                onClick={() => handleTechnology()}
              >
                Contact-Us
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#FE9800] hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? "block" : "hidden"} lg:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-2xl font-serif font-bold text-[#14406D] ">
          <Link
            to="/Service"
            className="hover:text-gray block px-3 py-2 rounded-md  "
          >
            Service
          </Link>
          <Link
            to="/Technologies"
            className="hover:text-gray block px-3 py-2 rounded-md"
          >
            Technologies
          </Link>
          <Link
            to="/Aboutus"
            className="hover:text-gray block px-3 py-2 rounded-md "
          >
            Aboutus
          </Link>
          <Link
            to="/Career"
            className="hover:text-gray block px-3 py-2 rounded-md "
          >
            Career
          </Link>
          <Link
            to="/Contactus"
            className="hover:text-gray block px-3 py-2 rounded-md "
          >
            Contact-Us
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
