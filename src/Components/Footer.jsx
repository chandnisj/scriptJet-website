import React from "react";
import { Link } from "react-router-dom";
//import text from "../Image-logo/text.png";
function Footer() {
  const currentyear = new Date().getFullYear();
  return (
   
    <div>
      <footer className="text-gray-600 body-font font-serif  bg-gradient-to-r from-orange-50 to-blue-50 ">
        <div className="container px-5 pt-10 pb-20  mx-auto my-0">
          <div className=" flex-wrap lg:text-start md:text-start text-center -mb-10 -mx-4 grid md:grid-cols-3  lg:grid-cols-3  sm:grid-cols-1">
            <div className=" lg:w-1/2 md:w-1/2 sm:mb-10 mb-10 w-full  px-4 text-[#14406D] ">
              <Link
                to="/"
                className="flex title-font font-medium  lg:inline-block items-center justify-center  text-gray-900  md:mb-0"
              >
                {" "}
                <span className="text-4xl text-[#14406D] leading-relaxed font-['Arial'] tracking-wider font-semibold lg:whitespace-nowrap ">
                Script-
              </span>
              <span className="text-4xl text-[#FE9800] leading-relaxed font-['Arial'] tracking-wider font-semibold lg:whitespace-nowrap">
                Jet
              </span>
              </Link>
              <p className="text-xl">
              To revolutionize the IT industry with innovative solutions.
              </p>
            </div>
            <div className="lg:w-1/2 md:w-1/2 w-full  px-4  text-lg whitespace-nowrap" >
              <h2 className="text-2xl font-bold  text-[#FE9800] tracking-widest  mb-4 cursor-pointer">
                Sloutions
              </h2>
              <nav className="list-none mb-5">
                <li>
                  <Link
                    to="/Service#webdev"
                    className="text-[#14406D] hover:text-[#FE9800] py-2 "
              
                  >
                    Web Devlopement
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Service#mobile"
                    className="text-[#14406D] hover:text-[#FE9800] py-2"
                  >
                  Mobile App Devlopement
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Service#uiux"
                    className="text-[#14406D] hover:text-[#FE9800] py-2"
                  >
                    UI/UX Design
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Service#testing"
                    className="text-[#14406D] hover:text-[#FE9800] py-2"
                  >
                    QA and Testing
                  </Link>
                </li>
                
              </nav>
            </div>

            <div className="lg:w-full md:w-full sm:item-center sm:justify-center item-center justify-center  sm:mb-10 mb-10    px-4  text-lg cursor-pointer ">
              <h2 className="title-font  text-2xl font-bold   text-[#FE9800] tracking-widest   mb-4">
                Contact-us
              </h2>
              <div className="flex lg:flex-row md:flex-row flex-col  item-center justify-center w-full ">
                <div className="sm:w-50 mx-auto">
                  <svg
                    className="p-0"
                    width="30"
                    height="30"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 11.667a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
                      stroke="#2C3E50"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M14.714 13.88l-3.536 3.537a1.667 1.667 0 01-2.355 0L5.286 13.88a6.666 6.666 0 119.428 0v0z"
                      stroke="#2C3E50"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <div>
                  <p className="ml-2  text-md md:text-start lg:text-start text-[#14406D]">
                    305, SNS Business Park, University Rd, opp. J H Ambani
                    School, Vesu, Surat, Gujarat 395007
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" ">
          <div className="mx-auto items-center justify-center  py-4 px-5 flex flex-col sm:flex-row">
            <span className="sm:mt-0 mt-0 sm:w-auto w-full sm:text-center text-center  text-[#FE9800] text-lg">
              Copyright {currentyear}.All Rights Reserved by
              <span className="text-[#14406D] cursor-pointer mx-1 ">
                 Script-Jet
              </span>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
