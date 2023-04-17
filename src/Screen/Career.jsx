import React, { useEffect } from "react";
import career from "../Screen/Images/career.jpg";
function Career() {
  useEffect(() => {
    const targetTop = document.querySelector("#top");
    targetTop.scrollIntoView({ behavior: "auto", block: "start" });
  }, []);
  return (
    <div id="top">
      <section>
        <div
          className="bg-cover bg-center flex flex-col items-center  justify-center  brightness-90 "
          style={{
            backgroundImage: `url(${career})`,
            filter: "",
            height: "450px",
            maxHeight: "450px",
            minHeight: "450px",
          }}
        >
          <div className="flex flex-col items-center  justify-center  h-full  w-screen backdrop-brightness-50 bg-white/30">
            <h1 className="lg:text-6xl md:text-5xl sm:text-4xl text-2xl text-center  text-[#14406D]   font-bold  font-serif cursor-pointer  ">
              Career At ScriptJet
            </h1>
            <div className="flex items-center justify-center pt-4 ">
              <p className="sm:w-2/3  sm:leading-relaxed  text-center sm:mx-auto mx-5 lg:text-lg md:text-xl sm:text-lg min-[320px]:text-md text-md font-serif text-white">
                Quality in a service or product is not what you put into it,
                It’s what the client or customer gets out of it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 text-center ">
            <div className="p-4 lg:h-60 md:h-80 h-62  md:w-1/3 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 p-2 rounded-lg h-full ">
                <div className="flex justify-center h-full flex-col bg-gradient-to-r from-orange-50 to-blue-50 p-5">
                  <h2 className=" text-center text-lg font-bold font-serif  text-[#14406D] px-2 py-2 mb-2  cursor-pointer  ">
                    Web Development
                  </h2>
                  <h5 className="text-center text-lg  font-serif text-[#FE9800] px-2 py-2 cursor-pointer">
                    ReactJs
                  </h5>
                  <div className="grid grid-col-1 mt-6 items-center justify-center">
                    <div className="flex text-center">
                      <svg
                        width="20"
                        height="20"
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
                      <p className="ml-2 font-serif text-lg text-[#14406D]">
                        Office
                      </p>
                    </div>
                    <div className="flex">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 17.5a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
                          stroke="#2C3E50"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M10 5.833V10l2.5 2.5"
                          stroke="#2C3E50"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <p className="ml-2 font-serif text-lg text-[#14406D]">
                        Full Time
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 lg:h-60 md:h-80 h-62 md:w-1/3 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 p-2 rounded-lg h-full">
                <div className="flex justify-center flex-col h-full bg-gradient-to-r from-orange-50 to-blue-50 p-5">
                  <h2 className=" text-center text-lg font-bold font-serif text-[#14406D] px-2 py-2 mb-2   cursor-pointer ">
                    Mobile App Development
                  </h2>
                  <h5 className=" text-center  text-lg  font-serif text-[#FE9800] px-2 py-2 cursor-pointer">
                    ReactNative
                  </h5>
                  <div className="grid grid-col-1 mt-6 items-center justify-center">
                    <div className="flex text-center ">
                      <svg
                        width="20"
                        height="20"
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
                      <p className="ml-2 font-serif text-lg text-[#14406D]">
                        Office
                      </p>
                    </div>
                    <div className="flex text-center">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 17.5a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
                          stroke="#2C3E50"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M10 5.833V10l2.5 2.5"
                          stroke="#2C3E50"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <p className=" ml-2 font-serif text-lg text-[#14406D]">
                        Full Time
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 lg:h-60 md:h-80 h-62 md:w-1/3 sm:w-1/2 w-full">
              <div className="border-2 h-full border-gray-200 p-2 rounded-lg">
                <div className="flex justify-center h-full flex-col bg-gradient-to-r from-orange-50 to-blue-50 p-5">
                  <p className="text-center  text-lg font-bold font-serif text-[#14406D] px-2 py-2 mb-2  cursor-pointer ">
                    Design
                  </p>
                  <h5 className=" text-cente  text-lg  font-serif text-[#FE9800] px-2 py-2 cursor-pointer">
                    UI/UX
                  </h5>
                  <div className="grid grid-col-1 mt-6 items-center justify-center">
                    <div className="flex text-center">
                      <svg
                        width="20"
                        height="20"
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
                      <p className="ml-2 font-serif text-lg text-[#14406D]">
                        Office
                      </p>
                    </div>
                    <div className="flex text-center">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 17.5a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
                          stroke="#2C3E50"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M10 5.833V10l2.5 2.5"
                          stroke="#2C3E50"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <p className="ml-2 font-serif text-lg text-[#14406D] whitespace-nowrap">
                        Full Time
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 lg:h-60 md:h-80 h-62 md:w-1/3 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 p-2 rounded-lg h-full">
                <div className="flex h-full justify-center flex-col bg-gradient-to-r from-orange-50 to-blue-50 p-5">
                  <p className=" text-center text-lg font-bold font-serif text-[#14406D] px-2 py-2 mb-2  cursor-pointer ">
                    Backend Development
                  </p>
                  <h5 className=" text-center  text-lg   font-serif text-[#FE9800] px-2 py-2 cursor-pointer">
                    NodeJs
                  </h5>
                  <div className="grid grid-col-1 mt-6 items-center justify-center">
                    <div className="flex text-center">
                      <svg
                        width="20"
                        height="20"
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
                      <p className="ml-2 font-serif text-lg text-[#14406D]">
                        Office
                      </p>
                    </div>
                    <div className="flex text-center">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 17.5a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
                          stroke="#2C3E50"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M10 5.833V10l2.5 2.5"
                          stroke="#2C3E50"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <p className=" ml-2 font-serif text-lg text-[#14406D]">
                        Full Time
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 lg:h-60 md:h-80 h-62 md:w-1/3  sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 p-2 rounded-lg h-full">
                <div className="flex h-full justify-center flex-col bg-gradient-to-r from-orange-50 to-blue-50 p-5">
                  <p className=" text-center text-lg font-serif font-bold text-[#14406D] px-2 py-2 mb-2  cursor-pointer ">
                    Mangement Department
                  </p>
                  <h5 className=" text-center  text-lg  font-serif text-[#FE9800] px-2 py-2 cursor-pointer">
                    <span className="">Bussiness Development</span> Executive
                  </h5>
                  <div className="grid grid-col-1 mt-6 items-center justify-center">
                    <div className="flex text-center">
                      <svg
                        width="20"
                        height="20"
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
                      <p className="ml-2 font-serif text-lg text-[#14406D]">
                        Office
                      </p>
                    </div>
                    <div className="flex text-center ">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 17.5a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
                          stroke="#2C3E50"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M10 5.833V10l2.5 2.5"
                          stroke="#2C3E50"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <p className=" ml-2 font-serif text-lg text-[#14406D]">
                        Full Time
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 lg:h-60 md:h-80 h-62 md:w-1/3 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 p-2 rounded-lg h-full">
                <div className="flex h-full justify-center flex-col  p-5 bg-gradient-to-r from-orange-50 to-blue-50">
                  <p className=" text-center text-lg font-serif font-bold text-[#14406D] px-2 py-2 mb-2  cursor-pointer ">
                    Mangement Department
                  </p>
                  <h5 className=" text-center  text-lg font-serif  text-[#FE9800]    px-2 py-2 cursor-pointer">
                    Human Resource Manager
                  </h5>
                  <div className="grid grid-col-1 mt-6 items-center justify-center">
                    <div className="flex text-center  ">
                      <svg
                        width="20"
                        height="20"
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
                      <p className="ml-2 font-serif text-lg text-[#14406D]">
                        Office
                      </p>
                    </div>
                    <div className="flex text-center">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 17.5a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
                          stroke="#2C3E50"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M10 5.833V10l2.5 2.5"
                          stroke="#2C3E50"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <p className=" ml-2 font-serif text-lg  text-[#14406D]">
                        Full Time
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Career;
