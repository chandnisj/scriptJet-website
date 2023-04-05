import React from "react";
import { Link } from "react-router-dom";
import text from "../Image-logo/text.png";
function Footer() {
  return (
    <div>
      <footer className="text-gray-600 body-font font-serif  bg-gradient-to-r from-cyan-50 via-fuchsia-50 to-blue-50 ">
        <div className="container px-5 pt-10 pb-20  mx-auto my-0">
          <div className="flex flex-wrap lg:text-start md:text-start text-center -mb-10 -mx-4 grid md:grid-cols-3  lg:grid-cols-3  sm:grid-cols-1">
            <div className=" lg:w-1/2 md:w-1/2 sm:mb-10 mb-10 w-full  px-4 ">
              <Link
                to="/"
                className="flex title-font font-medium  lg:inline-block items-center justify-center  text-gray-900  md:mb-0"
              >
                {" "}
                <img
                  src={text}
                  alt="Script-Jet"
                  className="md:h-full md:w-48 w-48 "
                />
              </Link>
              <p>
                Quality in a service or product is not what you put into it.
                It’s what the client or customer gets out of it.
              </p>
            </div>
            <div className="lg:w-1/2 md:w-1/2 w-full  px-4  text-lg ">
              <h2 className="title-font text-2xl font-bold  text-gray-900 tracking-widest  mb-4">
                Sloutions
              </h2>
              <nav className="list-none mb-5">
                <li>
                  <a
                    href="/"
                    className="text-gray-600 hover:text-gray-800 py-2 "
                  >
                    Web Devlopement
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-black-600 hover:text-gray-800 py-2"
                  >
                    Mobil App Devlopement
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-600 hover:text-gray-800 py-2"
                  >
                   UI/UX Design
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-600 hover:text-gray-800 py-2"
                  >
                    QA and Testing
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-600 hover:text-gray-800">
                    Human-resource
                  </a>
                </li>
              </nav>
            </div>

            <div className="lg:w-full md:w-full sm:item-center sm:justify-center item-center justify-center  sm:mb-10 mb-10    px-4  text-lg  ">
              <h2 className="title-font  text-2xl font-bold   text-gray-900 tracking-widest   mb-4">
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
                <p className="ml-2  text-md md:text-start lg:text-start text-[#13304c]">
                  305, SNS Business Park, University Rd, opp. J H Ambani School,
                  Vesu, Surat, Gujarat 395007
                </p>
                </div>
               
              </div>
            </div>
          </div>
        </div>
        <div className=" ">
          <div className="mx-auto items-center justify-center  py-4 px-5 flex flex-col sm:flex-row">
            <span className="sm:mt-0 mt-0 sm:w-auto w-full sm:text-center text-center  text-black text-lg">
              Copyright 2023. All Rights Reserved by{" "}
              <span className="hover:text-[#14406D] cursor-pointer ">
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
