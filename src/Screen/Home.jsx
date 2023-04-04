import React from "react";
import { Link } from "react-router-dom";
import home from "../Screen/Images/home.jpg";
import h2 from "../Screen/Images/home-2.jpg";

function Home() {
  return (
    <div className="">
      <section className=" text-gray-600  body-font ">
        <div
          className="flex items-end justify-end w-screen"
          style={{ position: "relative" }}
        >
          <img
            src={home}
            alt=""
            srcSet=""
            className="w-full "
            style={{
              filter: "opacity(0.7)",
              maxHeight: "50vh",
              minHeight: "70vh",
            }}
          />
          <div
            className="w-screen flex  items-center justify-end  h-full"
            style={{ position: "absolute" }}
          >
            <div className="flex-col text-center ">
              <h1 className="text-5xl  text-[#14406D]  font-semibold  font-serif ">
                Work Together
              </h1>
              <p className="sm:text-lg text-xl mx-10 text-black ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Corporis optio ipsum reiciendis.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font overflow-hidden font-serif ">
        <div className="mx-10 py-24 flex items-center justify-center flex-col  ">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
              Our Service
            </h1>
          </div>
          <div className="grid lg:grid-cols-4  md:grid-cols-2 sm:grid-cols-2  grid-cols-1 -m-2">
            <div className="p-2 ">
              <div className=" p-4 rounded-lg border-2 border-gray-100 flex flex-col relative overflow-hidden bg-blue-50">
                <div className="sm:text-center text-center md:text-start">
                  <h1 className="text-2xl font-semibold  text-center   ">
                    UI/UX Design
                  </h1>
                  <p className="flex items-center text-center mt-4 text-lg text-[#14406D] mb-8">
                    Let us take you into a deeper experience, make a moment a
                    lasting conveyable memory. .
                  </p>
                </div>
                <div className="flex sm:w-50 items-center justify-center">
                  <Link
                    to="/Contact-Us"
                    className="  text-center   bg-[#14406D] hover:bg-gray-400 hover:text-black text-white font-serif  text-lg border-0 py-1 px-3 focus:outline-none rounded-tr-xl rounded-bl-xl  mt-0"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>

            <div className="p-2">
              <div className=" p-4 rounded-lg border-2 border-gray-100 flex flex-col relative overflow-hidden bg-blue-50">
                <div className="sm:text-center text-center md:text-start">
                  <h1 className="text-2xl font-semibold text-center">
                    Web Devlopement
                  </h1>
                  <p className="flex items-center text-center mt-4 text-lg text-[#14406D]  mb-8">
                    Let us take you into a deeper experience, make a moment a
                    lasting conveyable memory. .
                  </p>
                </div>
                <div className="flex  sm:w-50 items-center justify-center">
                  <Link
                    to="/Contact-Us"
                    className="text-center    bg-[#14406D] hover:bg-gray-400 hover:text-black text-white font-serif  text-lg border-0 py-1 px-3 focus:outline-none rounded-tr-xl rounded-bl-xl  mt-0"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>

            <div className="p-2">
              <div className=" p-4 rounded-lg border-2 border-gray-100 flex flex-col relative overflow-hidden bg-blue-50">
                <div className="sm:text-center text-center md:text-start">
                  <h1 className="text-2xl font-semibold text-center  ">
                    Mobile Devlopement
                  </h1>
                  <p className="flex items-center text-center mt-4 text-lg text-[#14406D]  mb-8">
                    Let us take you into a deeper experience, make a moment a
                    lasting conveyable memory. .
                  </p>
                </div>
                <div className="flex  sm:w-50 items-center justify-center">
                  <Link
                    to="/Contact-Us"
                    className="text-center   bg-[#14406D] hover:bg-gray-400 hover:text-black text-white font-serif  text-lg border-0 py-1 px-3 focus:outline-none rounded-tr-xl rounded-bl-xl  mt-0"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>

            <div className="p-2 ">
              <div className=" p-4 rounded-lg border-2 border-gray-100 flex flex-col relative overflow-hidden bg-blue-50">
                <div className="sm:text-center text-center md:text-start">
                  <h1 className="text-2xl font-semibold text-center  ">
                    QA and Testing
                  </h1>
                  <p className="flex items-center text-center mt-4 text-lg text-[#14406D] overflow-hidden  mb-8">
                    Let us take you into a deeper experience, make a moment a
                    lasting conveyable memory. .
                  </p>
                </div>
                <div className="flex sm:w-50 items-center justify-center">
                  <Link
                    to="/Contact-Us"
                    className="text-center   bg-[#14406D] hover:bg-gray-400 hover:text-black text-white font-serif  text-lg border-0 py-1 px-3 focus:outline-none rounded-tr-xl rounded-bl-xl  mt-0"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" text-gray-600  body-font  bg-gray-50 ">
        <div className="flex flex-col px-5 py-24 items-center justify-center">
          <h1 className="text-3xl text-2xl font-bold font-serif title-font mb-4 text-gray-800">
            Why choose us
          </h1>
          <p className="leading-relaxed text-2xl">
            Quality in a service or product is not what you put into it. It’s
            what the client or customer gets out of it
          </p>
          <div className="flex mt-10">
            <Link
              to="/Contactus"
              className="flex items-center w-1/8 justify-center bg-[#14406D] hover:bg-gray-400 hover:text-black text-white font-serif  text-lg border-0 py-1 px-3 focus:outline-none rounded-tr-xl rounded-bl-xl text-base mt-4 md:mt-0"
            >
              Connect-Us
            </Link>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={h2}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold font-serif text-[#14406D]">
              Hire Dedicated Developer
            </h1>
            <p className="mb-8 leading-relaxed">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              doloremque inventore consequuntur nisi accusantium illum magni
              quibusdam temporibus molestias fugiat quasi animi, eos laborum
              voluptatem consequatur natus reiciendis ut totam.
            </p>
            <div className="flex justify-center">
              <Link
                to="/Contactus"
                className="bg-[#14406D] hover:bg-gray-400 hover:text-black text-white font-serif  text-lg border-0 px-2 focus:outline-none rounded-tr-xl rounded-bl-xl text-base mt-0"
              >
                HireNow
              </Link>
            </div>
          </div>
        </div>
      </section>
     
  
     

    </div>
  );
}

export default Home;
