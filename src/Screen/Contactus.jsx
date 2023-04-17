import React, { useState,useEffect } from "react";
import cs from "../Screen/Images/contact.jpg";
import { UserAddOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { Link } from "react-router-dom";
function Contactus() {
  const [Contact, setContact] = useState({
    name: "",
    email: "",
    msg: "",
  });
  const [data, setdata] = useState([]);
  const handalchnage = (event) => {
    setContact({ ...Contact, [event.target.name]: event.target.value });
  };
  const handalclick = (event) => {
    event.preventDefault();
    setdata([...data, Contact]);
    setContact({
      name: "",
      email: "",
      msg: "",
    });
    //console.log(Contact)
  };
  useEffect(() => {
    const targetTop = document.querySelector("#top");
    targetTop.scrollIntoView({ behavior: 'auto', block: "start" });
  }, []);

  return (
    <div id='top'>
    <section>
    <div
      className="bg-cover bg-center flex flex-col items-center  justify-center  "
      style={{
        backgroundImage: `url(${cs})`,
        filter: "",
        height: "450px",
        maxHeight: "450px",
        minHeight: "450px",
      }}
    >
      <div className="flex flex-col items-center  justify-center  h-full  w-screen  backdrop-brightness-50  bg-gray/30 backdrop-invert-0 bg-white/30   ">
        <h1 className="lg:text-7xl md:text-6xl sm:text-5xl text-5xl text-center  text-[#14406D]  font-bold  font-serif cursor-pointer  ">
          Contact-Us
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
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
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
              Contact-Us{" "}
            </h2>
            <p className="leading-relaxed mb-5 text-gray-500 font-serif">
              Don’t hesitate to Contact us for any information.
            </p>
            <div className="relative mb-4">
              <Input
                size="large"
                placeholder="Name"
                prefix={<UserAddOutlined />}
                onChange={handalchnage}
                name="name"
                value={Contact.name}
              />
            </div>
            <div className="relative mb-4">
              <Input
                size="large"
                placeholder="Email-Id"
                onChange={handalchnage}
                name="email"
                value={Contact.email}
              />
            </div>
            <div className="relative mb-4">
              <textarea
                id="message"
                placeholder="Message"
                className="w-full bg-white rounded border border-gray-300  h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                onChange={handalchnage}
                value={Contact.msg}
                name="msg"
              ></textarea>
            </div>
            <div className="lg:w-24 md:w-20 sm:w-auto text-center">
              <Link
                to="/Contactus"
                className="bg-[#14406D] hover:bg-[#FE9800] hover:text-white text-white font-serif  text-lg border-0 py-1 px-3 focus:outline-none rounded-lg mt-4 md:mt-0"
                onClick={handalclick}
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
