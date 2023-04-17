import React, { useState } from "react";
//import text from "../Image-logo/text.png";
//import text2 from "../Image-logo/text2.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
function NavBar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const handleTechnology = (value) => {
    setIsOpen(false);
    localStorage.removeItem("techValue");
    navigate("/");
  };
  const location = useLocation();
  return (
    <nav
      className="bg-slate-50  font-serif fixed top-0 w-full"
      style={{ zIndex: "100" }}
    >
      <div className=" mx-auto px-2 sm:px-6 md:px-6 lg:px-8 py-4 xl:max-w-[80%] lg:max-w-[90%]  max-w-[80%]">
        <div className="flex items-center justify-between  h-full">
          <div className="flex items-center justify-center">
            <Link
              to="/"
              className="flex title-font font-medium items-center justify-center    md:mb-0"
              onClick={() => handleTechnology()}
            >
              <span className="md:text-5xl sm:text-4xl text-3xl text-[#14406D] leading-relaxed font-['Arial'] tracking-wider font-semibold">
                Script
              </span>
              <span className="md:text-5xl sm:text-4xl text-3xl text-[#FE9800] leading-relaxed font-['Arial'] tracking-wider font-semibold">
                Jet
              </span>
            </Link>
          </div>
          <div className=" hidden lg:block lg:items-center  ">
            <div className="flex items-center justify-center xl:text-xl xl:space-x-16 min-[1090px]:text-lg text-lg min-[1090px]:space-x-14 space-x-12 text-[#14406D] ">
              <Link
                to="/Service"
                className={` hover:text-[#FE9800] active:text-[#FE9800]  transition hover:scale-105  hover:underline underline-offset-8 decoration-[#FE9800] ${
                  location.pathname === "/Service"
                    ? "text-[#FE9800] underline underline-offset-8 "
                    : ""
                }`}
                onClick={() => handleTechnology()}
              >
                Service
              </Link>
              <Link
                to="/Technologies"
                className={` hover:text-[#FE9800] active:text-[#FE9800]  transition hover:scale-105  hover:underline underline-offset-8 decoration-[#FE9800] ${
                  location.pathname === "/Technologies"
                    ? "text-[#FE9800] underline underline-offset-8 "
                    : ""
                }`}
                onClick={() => handleTechnology()}
              >
                Technology
              </Link>
              <Link
                to="/Aboutus"
                className={`hover:text-[#FE9800] active:text-[#FE9800] whitespace-nowrap   transition hover:scale-105  hover:underline underline-offset-8 decoration-[#FE9800] ${
                  location.pathname === "/Aboutus"
                    ? "text-[#FE9800] underline underline-offset-8 "
                    : ""
                }`}
                onClick={() => handleTechnology()}
              >
                About-us
              </Link>
              <Link
                to="/Career"
                className={`hover:text-[#FE9800] active:text-[#FE9800] whitespace-nowrap   transition hover:scale-105  hover:underline underline-offset-8 decoration-[#FE9800] ${
                  location.pathname === "/Career"
                    ? "text-[#FE9800] underline underline-offset-8 "
                    : ""
                }`}
                onClick={() => handleTechnology()}
              >
                Career
              </Link>
              <Link
                to="/Contactus"
                className="bg-[#14406D] whitespace-nowrap hover:bg-[#FE9800] hover:text-white text-white font-serif  text-lg  border-0 py-2 px-3 focus:outline-none rounded-lg  mt-4 md:mt-0"
                onClick={() => handleTechnology()}
              >
                Contact-Us
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#FE9800] hover:text-white hover:bg-[#FE9800] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#14406D] focus:ring-[#14406D]"
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
            className={`hover:text-gray block px-3 py-2 rounded-md ${
              location.pathname === "/Service"
                ? "text-[#FE9800] underline underline-offset-8 "
                : ""
            }`}
            onClick={() => handleTechnology()}
          >
            Service
          </Link>
          <Link
            to="/Technologies"
            className={`hover:text-gray block px-3 py-2 rounded-md ${
              location.pathname === "/Technologies"
                ? "text-[#FE9800] underline underline-offset-8 "
                : ""
            }`}
            onClick={() => handleTechnology()}
          >
            Technologies
          </Link>
          <Link
            to="/Aboutus"
            className={`hover:text-gray block px-3 py-2 rounded-md ${
              location.pathname === "/Aboutus"
                ? "text-[#FE9800] underline underline-offset-8 "
                : ""
            }`}
            onClick={() => handleTechnology()}
          >
            Aboutus
          </Link>
          <Link
            to="/Career"
            className={`hover:text-gray block px-3 py-2 rounded-md ${
              location.pathname === "/Career"
                ? "text-[#FE9800] underline underline-offset-8 "
                : ""
            }`}
            onClick={() => handleTechnology()}
          >
            Career
          </Link>
          <Link
            to="/Contactus"
            className={`hover:text-gray block px-3 py-2 rounded-md ${
              location.pathname === "/Contactus"
                ? "text-[#FE9800] underline underline-offset-8 "
                : ""
            }`}
            onClick={() => handleTechnology()}
          >
            Contact-Us
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
