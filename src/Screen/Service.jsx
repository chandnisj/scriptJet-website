import React, { useEffect } from "react";
import screen from "../Screen/Images/Screen-Image/screen-1.jpg";
import sc from "../Screen/Images/Screen-Image/screen-2.png";
import sc3 from "../Screen/Images/Screen-Image/screen-3.jpg";
import mb3 from "../Screen/Images/Screen-Image/mb-sc.jpg";
import us1 from "../Screen/Images/Screen-Image/ui-sc.jpg";
import test from "../Screen/Images/Screen-Image/Test.jpg";
import { Link, useLocation } from "react-router-dom";
function Service() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash);
      target.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [location.hash]);

  return (
    <div>
      <section className=" text-gray-600  body-font bg-gradient-to-r from-cyan-50 via-fuchsia-50 to-blue-50">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="text-4xl  font-serif font-semibold  title-font mb-4 text-[#14406D] cursor-pointer transition  hover:scale-105">
              {" "}
              Service{" "}
            </h1>
            <p className="w-2/3  mx-auto leading-relaxed text-lg font-serif">
              Quality in a service or product is not what you put into it. It’s
              what the client or customer gets out of it
            </p>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font font-serif " id="webdev">
        <div className="container px-5 mx-auto flex lg:flex-row md:flex-row sm:flex-col-reverse flex-col-reverse lg:my-auto md:my-10 my-10 items-center justify-center ">
          <div className="flex flex-col lg:w-1/2 md:w-full mx-12 justify-center md:my-auto sm:my-10 ">
            <Link className="flex px-auto mx-auto mt-0 font-serif text-3xl font-bold">
              Web-Development
            </Link>
            <p className="mx-auto py-6 text-base text-justify font-serif text-2xl ">
              Web development is the work involved in developing a website for
              the Internet (World Wide Web) or an intranet (a private network).
              Web development can range from developing a simple single static
              page of plain text to complex web applications, electronic
              businesses, and social network services.
            </p>
            <div>
              <Link
                to="/Contactus"
                className=" bg-[#14406D] hover:bg-gray-400 hover:text-black text-white text-lg border-0 py-2 px-3 focus:outline-none rounded-tr-xl rounded-bl-xl text-base mt-0"
              >
                Contact-Us
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap lg:w-1/3 md:w-full bg-gray-100 md:p-1 sm:p-0 p-0 drop-shadow-xl md:-my-5 sm:my-10 my-10 md:mx-auto sm:mx-10 mx-5 ">
            <div className="p-2  w-full ">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block "
                src={screen}
              />
            </div>
            <div className="p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={sc}
              />
            </div>
            <div className="p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={sc3}
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="text-gray-600 body-font bg-gray-100 font-serif"
        id="mobile"
      >
        <div className="container px-5 mx-auto flex lg:flex-row md:flex-row sm:flex-col flex-col lg:my-auto md:my-10 my-10 items-center justify-center ">
          <div className="flex flex-wrap lg:w-1/3 md:w-full bg-gray-100 md:p-1 sm:p-0 p-0 drop-shadow-xl md:-my-5 sm:my-10 my-10 md:mx-auto sm:mx-10 mx-5 ">
            <div className="p-2 p-1 w-full ">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block "
                src={mb3}
              />
            </div>
            <div className="p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={sc}
              />
            </div>
            <div className="p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={sc3}
              />
            </div>
          </div>
          <div className="flex flex-col lg:w-1/2 md:w-full mx-10 my-10 justify-center md:my-auto sm:my-10 ">
            <h3 className="flex px-auto mx-auto mt-0 font-serif text-3xl font-bold ">
              Mobile Development{" "}
            </h3>
            <p className=" mx-auto py-4 text-justify text-base  text-2xl ">
              Mobile application development is the process to making software
              for smartphones and digital assistants, most commonly for Android
              and iOS. The software can be preinstalled on the device,
              downloaded from a mobile app store or accessed through a mobile
              web browser.
            </p>
            <div>
              <Link
                to="/Contactus"
                className=" bg-[#14406D] hover:bg-gray-400 hover:text-black text-white font-serif  text-lg border-0 py-2 px-3 focus:outline-none rounded-tr-xl rounded-bl-xl text-base mt-0"
              >
                Contact-Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font font-serif" id="uiux">
        <div className="container px-5 mx-auto flex lg:flex-row md:flex-row sm:flex-col-reverse flex-col-reverse lg:my-auto md:my-10 my-10 items-center justify-center ">
          <div className="flex flex-col lg:w-1/2 md:w-full mx-12 justify-center md:my-12 sm:my-10 xl:my-auto">
            <h3 className="flex px-auto mx-auto mt-0 font-serif text-3xl font-bold">
              UI-UX Design
            </h3>
            <p className="mx-auto py-6 text-base text-justify font-serif text-2xl">
              UI refers to the screens, buttons, toggles, icons, and other
              visual elements that you interact with when using a website, app,
              or other electronic device. UX refers to the entire interaction
              you have with a product, including how you feel about the
              interaction.
            </p>
            <div>
              <Link
                to="/Contactus"
                className=" bg-[#14406D] hover:bg-gray-400 hover:text-black text-white   text-lg border-0 py-2 px-3 focus:outline-none rounded-tr-xl rounded-bl-xl text-base mt-0"
              >
                Contact-Us
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap lg:w-1/3 md:w-full bg-gray-100 md:p-1 sm:p-0 p-0 drop-shadow-xl md:-my-5 sm:my-10 my-10 md:mx-auto sm:mx-10 mx-5">
            <div className=" p-2  w-full">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block "
                src={us1}
              />
            </div>
            <div className="p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-50 object-cover h-full object-center block"
                src={sc}
              />
            </div>
            <div className="p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={sc3}
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="text-gray-600 body-font bg-gray-100 font-serif"
        id="testing"
      >
        <div className="container px-5 mx-auto flex lg:flex-row md:flex-row sm:flex-col flex-col lg:my-auto md:my-10 my-10 items-center justify-center ">
          <div className="flex flex-wrap lg:w-1/3 md:w-full bg-gray-100 md:p-1 sm:p-0 p-0 drop-shadow-xl md:-my-5 sm:my-10 my-10 md:mx-auto sm:mx-10 mx-5 ">
            <div className="p-2 p-1 w-full ">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block "
                src={test}
              />
            </div>
            <div className="p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={sc}
              />
            </div>
            <div className="p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={sc3}
              />
            </div>
          </div>
          <div className="flex flex-col lg:w-1/2 md:w-full mx-10 my-10 justify-center md:my-auto sm:my-10 ">
            <h3 className="flex px-auto mx-auto mt-0 font-serif text-3xl font-bold ">
              QA and Testing
            </h3>
            <p className="mx-auto py-4 text-justify text-base  text-2xl ">
              There are three main ways you can do testing: manual, automated,
              and continuous. Let us take a closer look at each option. Manual
              testing is the most hands-on type of testing and is employed by
              every team at some point.
            </p>
            <div>
              <Link
                to="/Contactus"
                className="bg-[#14406D] hover:bg-gray-400 hover:text-black text-white   text-lg border-0 py-2 px-3 focus:outline-none rounded-tr-xl rounded-bl-xl text-base mt-0"
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

export default Service;
