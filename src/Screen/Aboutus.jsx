import React from "react";
import aboutus from "../Screen/Images/about.jpg";
import about from "../Screen/Images/about-2.jpg";
import { Link } from "react-router-dom";

function Aboutus() {
 
  return (
    <div>
      <div className="flex " style={{ position: "relative" }}>
        <img
          src={aboutus}
          alt=""
          className="min-w-full  h-3/6 max-h-96 backdrop-blur-xl "
          style={{ filter: " contrast(1.1) brightness(75%)" }}
        />
        <div className="flex items-center  justify-center absolute h-full  w-screen">
          <h5 className="lg:text-6xl md:text-5xl sm:text-7xl text-5xl text-center  text-white  font-bold  font-serif ">
            About-Us
          </h5>
        </div>
      </div>
      <section className="text-gray-600 body-font font-serif">
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
              Technology like art is a soaring exercise of the human
              imagination.
            </h1>
            <p className="mb-8 leading-relaxed text-gray-500 text-lg">
              At our core, we believe in delivering exceptional customer service
              and exceeding expectations. Our team is comprised of experienced
              developers, designers, and consultants who are passionate about
              what they do. We work tirelessly to ensure that our clients
              receive the best possible outcomes and achieve their business
              objectives.
            </p>
            <p className="mb-8 leading-relaxed  text-gray-500 text-lg">
              We offer a comprehensive range of services, including software
              development, website design and development, IT consulting, cloud
              computing, cybersecurity, and digital marketing. We are committed
              to staying at the forefront of the latest technological
              advancements and trends, so we can provide innovative solutions
              that give our clients a competitive edge.
            </p>
            <div className="flex w-full md:justify-start justify-center items-end"></div>
          </div>
        </div>
      </section>

      <section  className="text-gray-600 body-font font-serif">
        <div  className="py-24 ">
          <div  className="flex flex-wrap  mx-4  text-center items-center justify-center ">
            <div  className="md:w-1/3 sm:w-1/3 w-full h-48    mb-10 px-4 mx-2 rounded-lg  bg-gradient-to-r from-orange-100 to-blue-100">
              <h2  className="text-2xl  font-medium text-[#FE9800]  mt-6 mb-3 whitespace-nowrap cursor-pointer">
                Our <span className="text-[#14406D]"> Mission</span> 
              </h2>
              <p  className="leading-relaxed text-base text-[#14406D]">
              To provide exceptional IT services and deliver value to clients through innovation, expertise, and collaboration.
              </p>
            </div>
            <div  className="h-48 md:w-1/3 sm:w-1/3 w-full mb-10 px-4 mx-2 rounded-lg  bg-gradient-to-r from-orange-100 to-blue-100">
              <h2  className="text-2xl font-medium  text-[#FE9800] mt-6 mb-3 whitespace-nowrap cursor-pointer">
                {" "}
                Our <span className="text-[#14406D]">Vision</span> 
              </h2>
              <p  className="leading-relaxed text-base text-[#14406D]">
              To revolutionize the IT industry with innovative solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className=" text-gray-600  body-font font-serif  ">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="text-3xl text-2xl font-medium title-font mb-4 text-[#FE9800] cursor-pointer">
              {" "}
              Are you ready for a better{" "}
            </h1>
            <p className="w-2/3  mx-auto leading-relaxed text-xl text-[#14406D]">
              Thank you for considering our IT service company for your
              technology needs. We look forward to the opportunity to work with
              you and help you achieve your business goals.
            </p>
            <div className="w-full flex  item-center justify-center py-2">
              <Link
                to="/Contactus"
                className=" items-center  justify-center bg-[#FE9800] hover:bg-[#14406D] hover:text-white text-white  text-lg border-0 py-2 px-3 focus:outline-none rounded-lg text-base mt-4 md:mt-0"
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
