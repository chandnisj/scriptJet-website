import React from "react";
import cs from "../Screen/Images/contact.jpg";
import { UserAddOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { Link } from "react-router-dom";
function Contactus() {
  return (
    <div>
      <section className=" text-gray-600  body-font">
        <div
          className="flex"
          style={{ position: "relative" }}
        >
          <img
            src={cs}
            alt=""
            srcset=""
            className= "min-w-full  h-3/6 max-h-96 backdrop-blur-xl"
            style={{ filter: " contrast(1.1) opacity(0.6)" }}
          />
          <div className="flex items-center justify-center absolute h-full   w-screen">
            <h1 className=" text-3xl  title-font   text-white  font-bold  font-serif ">
              {" "}
              Contact-Us{" "}
            </h1>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24  mx-auto  flex flex-wrap ">
          <div className="lg:w-1/2 md:w-1/2     bg-gray-300 rounded-lg   p-0 flex flex-col items-center justify-start ">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1681.5078489552639!2d72.77447927570404!3d21.151529266853636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04dab2edc2817%3A0x559ac3e15857f407!2sSNS%20Business%20Park!5e0!3m2!1sen!2sin!4v1679913792009!5m2!1sen!2sin"
              className="inset-0"
              style={{ width: "100%", height: "100%", border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="bg-white  flex flex-wrap py-6 rounded shadow-md">
              <div className=" px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">
                  305, SNS Business Park, University Rd, opp. J H Ambani School,
                  Vesu, Surat, Gujarat 395007
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a href="# " className="text-indigo-500  leading-relaxed">
                  Scriptjet@gmail.com
                </a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">123-456-7890</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/3  bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-[#14406D] text-2xl mb-1  title-font font-bold font-serif">
              Contactus{" "}
            </h2>
            <p className="leading-relaxed mb-5 text-gray-500 font-serif">
              Don’t hesitate to Contact us for any information.
            </p>
            <div className="relative mb-4">
              <Input
                size="large"
                placeholder="Name"
                prefix={<UserAddOutlined />}
              />
            </div>
            <div className="relative mb-4">
              <Input size="large" placeholder="Email-Id" />
            </div>
            <div className="relative mb-4">
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                className="w-full bg-white rounded border border-gray-300  h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <div className="lg:w-24 md:w-20 sm:w-auto text-center">
            <Link
              to="/Contactus"
              className="bg-[#14406D] hover:bg-gray-400 hover:text-black text-white font-serif  text-lg border-0 py-1 px-3 focus:outline-none rounded-tr-xl rounded-bl-xl text-base mt-4 md:mt-0"
            >
              Send
            </Link>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contactus;
