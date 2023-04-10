import React, { useState } from "react";
import aboutus from "../Screen/Images/about.jpg";
import about from "../Screen/Images/about-2.jpg";
import { Link } from "react-router-dom";

function Aboutus() {
  const [Mission, setMission] = useState(false);
  const [vision, setvision] = useState(false);
  const [work, setWork] = useState(false);
  const ourMIssion = "";
  const ourvision = "";
  const ourwork = "";
  const handalmission = () => {
    setMission(!Mission);
  };
  const handalvision = () => {
    setvision(!vision);
  };
  const handalwork = () => {
    setWork(!work);
  };

  return (
    <div>
      <div className="flex " style={{ position: "relative" }}>
        <img
          src={aboutus}
          alt=""
          className="min-w-full  h-3/6 max-h-96 backdrop-blur-xl "
          style={{ filter: " contrast(1.1) brightness(65%)" }}
        />
        <div className="flex items-center  justify-center absolute h-full  w-screen">
          <h1 className="lg:text-6xl md:text-5xl sm:text-7xl text-5xl text-center  text-white  font-bold  font-serif ">
            About Us
          </h1>
        </div>
      </div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={about}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium font-serif text-[#14406D]">
              Technology like art is a soaring exercise of the human imagination
            </h1>
            <p className="mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              laudantium dignissimos veritatis aliquid perspiciatis ullam,
              similique dolore nobis veniam! Aliquam quia nostrum iusto
              necessitatibus. Impedit dicta repellat veritatis architecto culpa?
            </p>
            <div className="flex w-full md:justify-start justify-center items-end"></div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font ">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3  ">
              <div className="flex rounded-lg h-full  p-8 flex-col bg-gradient-to-r from-cyan-50 via-fuchsia-50 to-blue-50">
                <div className="flex items-center mb-3">
                  <h2 className="text-[#14406D] text-xl title-font font-serif font-medium">
                    Our Mission
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    {ourMIssion.substr(0, 80)}
                    {Mission ? ourMIssion.substr(50) : "..."}.
                    <button
                      className="flex-col  text-gray-300 font-semibold focus:outline-none"
                      onClick={handalmission}
                    >
                      {Mission ? "Read less" : "Read more"}
                    </button>
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3 ">
              <div className="flex rounded-lg h-full  p-8 flex-col bg-gradient-to-r from-cyan-50 via-fuchsia-50 to-blue-50">
                <div className="flex items-center mb-3">
                  <h2 className="text-[#14406D] font-serif text-xl title-font font-medium">
                    Our Vision
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    {ourvision.substr(0, 80)}
                    {vision ? ourvision.substr(50) : "..."}.
                    <button
                      className="flex-col  text-gray-300 font-semibold focus:outline-none"
                      onClick={handalvision}
                    >
                      {vision ? "Read less" : "Read more"}
                    </button>
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full  p-8 flex-col bg-gradient-to-r from-cyan-50 via-fuchsia-50 to-blue-50">
                <div className="flex items-center mb-3">
                  <h2 className="text-[#14406D] font-serif text-xl title-font font-medium">
                    Our Work
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    {ourwork.substr(0, 80)}
                    {work ? ourwork.substr(50) : "..."}.
                    <button
                      className="flex-col  text-gray-300 font-semibold focus:outline-none"
                      onClick={handalwork}
                    >
                      {work ? "Read less" : "Read more"}
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" text-gray-600  body-font  ">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="text-3xl text-2xl font-medium title-font mb-4 text-gray-800">
              {" "}
              Are you ready for a better{" "}
            </h1>
            <p className="w-2/3  mx-auto leading-relaxed text-2xl">
              Quality in a service or product is not what you put into it. It’s
              what the client or customer gets out of it
            </p>
            <div className="w-full flex  item-center justify-center">
              <Link
                to="/Contactus"
                className=" items-center  justify-center bg-[#14406D] hover:bg-gray-400 hover:text-black text-white font-serif  text-lg border-0 py-1 px-3 focus:outline-none rounded-tr-xl rounded-bl-xl text-base mt-4 md:mt-0"
              >
                Contact-Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Aboutus;
