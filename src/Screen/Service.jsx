import React, { useEffect } from "react";
import screen from "../Screen/Images/Screen-Image/screen-1.jpg";
import sc from "../Screen/Images/Screen-Image/screen-2.png";
import sc3 from "../Screen/Images/Screen-Image/screen-3.jpg";
import mb3 from "../Screen/Images/Screen-Image/mb1.jpg";
import mb2 from "../Screen/Images/Screen-Image/mb2.jpg";
import mb1 from "../Screen/Images/Screen-Image/mb3.jpeg";
import us1 from "../Screen/Images/Screen-Image/ui-sc.jpg";
import test from "../Screen/Images/Screen-Image/Test.jpg";
import ui2 from "../Screen/Images/Screen-Image/UI-UX2.jpeg";
import ui3 from "../Screen/Images/Screen-Image/UI-UX3.jpeg";
import qa2 from "../Screen/Images/Screen-Image/QA2.jpeg";
import qa3 from "../Screen/Images/Screen-Image/QA3.jpeg";
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
      <section className=" text-gray-600  body-font ">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="text-4xl  font-serif font-semibold  title-font mb-4 text-[#14406D] cursor-pointer transition  hover:scale-105 hover:text-[#FE9800]">
              {" "}
              Service{" "}
            </h1>
            <p className="w-2/3  mx-auto leading-relaxed text-lg font-serif text-[#14406D]">
              At Script-jet, we offer a wide range of services to meet the needs
              of businesses of all sizes. Our Services component is designed to
              provide our clients with the support and expertise they need to
              optimize their technology infrastructure and achieve their
              business goals. Our team of experienced professionals is dedicated
              to delivering customized solutions that are tailored to meet the
              unique needs of each client. Whether it's network design and
              implementation, cloud migration, or software development, we have
              the expertise to deliver results that exceed expectations.
            </p>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font font-serif bg-orange-100" id="webdev">
        <div className="container px-5 mx-auto flex lg:flex-row md:flex-row sm:flex-col-reverse flex-col-reverse lg:my-auto md:my-10 my-10 items-center justify-center ">
          <div className="flex flex-col lg:w-1/2 md:w-full mx-12 justify-center md:my-auto sm:my-10 ">
            <Link className="flex px-auto mx-auto mt-0 font-serif text-3xl font-bold text-[#14406D]  transition cursor-pointer ">
              Web-Development
            </Link>
            <p className="mx-auto py-6 text-base text-justify font-serif text-2xl text-gray-500 ">
              Our web development service is designed to help businesses build
              high-quality websites that drive results. We specialize in
              creating custom websites that are tailored to meet the unique
              needs of each client. Our team of experienced developers uses the
              latest technologies and best practices to create websites that are
              fast, secure, and easy to navigate. We work closely with our
              clients to ensure that their website not only looks great but also
              delivers a superior user experience.
            </p>
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
        className="text-gray-600 body-font  font-serif "
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
                src={mb2}
              />
            </div>
            <div className="p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={mb1}
              />
            </div>
          </div>
          <div className="flex flex-col lg:w-1/2 md:w-full mx-10 my-10 justify-center md:my-auto sm:my-10 ">
            <h3 className="flex px-auto mx-auto mt-0 font-serif text-3xl font-bold text-[#14406D] transition   cursor-pointer ">
              Mobile Development{" "}
            </h3>
            <p className=" mx-auto py-4 text-justify text-base  text-2xl text-gray-500 ">
              Our mobile development service is designed to help businesses
              build mobile applications that are user-friendly, high-performing,
              and reliable. Our team of experienced developers specializes in
              creating custom mobile applications that are tailored to meet the
              unique needs of each client. We use the latest technologies and
              best practices to deliver mobile applications that are fast,
              secure, and scalable. Whether you're looking to build an iOS,
              Android, or hybrid mobile application, we have the expertise to
              help you achieve your goals.
            </p>
            
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font font-serif bg-orange-100" id="uiux">
        <div className="container px-5 mx-auto flex lg:flex-row md:flex-row sm:flex-col-reverse flex-col-reverse lg:my-auto md:my-10 my-10 items-center justify-center ">
          <div className="flex flex-col lg:w-1/2 md:w-full mx-12 justify-center md:my-12 sm:my-10 xl:my-auto">
            <h3 className="flex px-auto mx-auto mt-0 font-serif text-3xl font-bold  transition  text-[#14406D] cursor-pointer">
              UI-UX Design
            </h3>
            <p className="mx-auto py-6 text-base text-justify font-serif text-2xl text-gray-500">
              Our UI/UX design service is designed to help businesses create
              visually stunning and user-friendly digital experiences. Our team
              of expert designers creates custom designs that are tailored to
              meet the unique needs of each client. We understand the importance
              of user experience, and we use the latest design trends and
              technologies to create designs that are not only visually
              appealing but also easy to navigate.
            </p>
            
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
                src={ui2}
              />
            </div>
            <div className="p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={ui3}
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="text-gray-600 body-font   font-serif "
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
                src={qa2}
              />
            </div>
            <div className="p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={qa3}
              />
            </div>
          </div>
          <div className="flex flex-col lg:w-1/2 md:w-full mx-10 my-10 justify-center md:my-auto sm:my-10  ">
            <h3 className="flex px-auto mx-auto mt-0 font-serif text-3xl font-bold  transition  text-[#14406D] cursor-pointer ">
              QA and Testing
            </h3>
            <p className="mx-auto py-4 text-justify text-base  text-2xl text-gray-500 ">
              Our QA and testing service is designed to ensure that your
              software and applications are of the highest quality. Our team of
              experienced testers uses a range of testing techniques and tools
              to identify and eliminate defects, ensuring that your software is
              reliable, secure, and easy to use. Whether you're looking to test
              an existing product or a new one, we have the expertise to help
              you achieve your goals.
            </p>
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default Service;
