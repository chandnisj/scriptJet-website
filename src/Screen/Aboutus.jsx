import React, { useState } from "react";
import aboutus from "../Screen/Images/about.jpg";
import about from "../Screen/Images/about-2.jpg";
import { Link } from "react-router-dom";

function Aboutus() {
  const [Mission, setMission] = useState(false);
  const [vision, setvision] = useState(false);
  const ourMIssion = "To provide exceptional IT services and deliver value to clients through innovation, expertise, and collaboration";
  const ourvision = "To revolutionize the IT industry with innovative solutions";
 // const ourwork = "We are a team of dedicated professionals committed to providing top-notch technology solutions to our clients. Our goal is to help businesses optimize their operations, streamline processes, and improve their bottom line.";
  const handalmission = () => {
    setMission(!Mission);
  };
  const handalvision = () => {
    setvision(!vision);
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
          <h5 className="lg:text-6xl md:text-5xl sm:text-7xl text-5xl text-center  text-[#14406D]  font-bold  font-serif ">
            About-Us
          </h5>
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
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium font-serif text-[#14406D] ">
              Technology like art is a soaring exercise of the human imagination.
            </h1>
            <p className="mb-8 leading-relaxed">
            At our core, we believe in delivering exceptional customer service and exceeding expectations. Our team is comprised of experienced developers, designers, and consultants who are passionate about what they do. We work tirelessly to ensure that our clients receive the best possible outcomes and achieve their business objectives.
            </p>
            <p className="mb-8 leading-relaxed">We offer a comprehensive range of services, including software development, website design and development, IT consulting, cloud computing, cybersecurity, and digital marketing. We are committed to staying at the forefront of the latest technological advancements and trends, so we can provide innovative solutions that give our clients a competitive edge.</p>
            <div className="flex w-full md:justify-start justify-center items-end"></div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font ">
        <div className="container  px-5 py-24 mx-auto">
          <div className="flex  m-4">
            <div className="p-4 md:w-1/3  ">
              <div className="flex rounded-lg h-full  p-8 flex-col bg-gradient-to-r from-orange-100 to-blue-100">
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
              <div className="flex rounded-lg h-full  p-8 flex-col bg-gradient-to-r from-orange-100 to-blue-100">
                <div className="flex items-center mb-3">
                  <h2 className="text-[#14406D] font-serif text-xl title-font font-medium">
                    Our Vision
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base text-[#14406D]">
                    {ourvision.substr(0, 50)}
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
            <p className="w-2/3  mx-auto leading-relaxed text-xl">
            Thank you for considering our IT service company for your technology needs. We look forward to the opportunity to work with you and help you achieve your business goals.
            </p>
            <div className="w-full flex  item-center justify-center py-2">
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
