import React, { useState } from "react";
import { Link } from "react-router-dom";
import home from "../Screen/Images/home.jpg";
import h2 from "../Screen/Images/home-2.jpg";
import aboutus from "../Screen/Images/about.jpg";
import home3 from "../Screen/Images/home-3.jpg";
function Home() {
  const [expanded, setExpanded] = useState(false);
  const dummyContent =
    "Let us take you into a deeper experience, make a moment a lasting conveyable memory";
  const handleClick = () => {
    setExpanded(!expanded);
  };
  const Technologies = [
    {
      title: "FrontEnd",
      value: ["React", "VueJs", "AngularJs", "NextJs", "Android", "Ios"],
    },
    { title: "BackEnd", value: ["NodeJs", "PHP", "JAVA"] },
    { title: "Database", value: ["SQL", "MYSQL", "MongoDb"] },
    { title: "Design", value: ["UI/UX", "Boostrap", "TailWind"] },
  ];
  const [Tech, setTech] = useState(Technologies);

  const handleTechnology = (value) => {
    console.log("CLICK ", value);
  };

  const contant = [
    {
      title: "ReactJs",
      con: "The React.js framework is an open-source JavaScript framework and library developed by Facebook. Its used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript.",
      src: "",
    },
    {
      title: "VueJs",
      con: "Vue (pronounced /vjuː/, like view) is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be they simple or complex.",
      src: "",
    },
    {
      title :'AngularJs',
      con :'AngularJS is a structural framework for dynamic web apps. It lets you use HTML as your template language and lets you extend HTMLs syntax to express your applications components clearly and succinctly. AngularJSs data binding and dependency injection eliminate much of the code you would otherwise have to write.',
      src : '',
    },{
      title :'NextJs',
      con :'Nextjs is a React framework that gives you building blocks to create web applications.Byframework,we mean Next.js handles the tooling and configuration needed for React,and provides additional structure,features and optimizations for your application.',
      src : '',
    },{
      title :'Android',
      con :'Android is a mobile operating system based on a modified version of the Linux kernel and other open-source software, designed primarily for touchscreen mobile devices such as smartphones and tablets.',
      src : '',
    },{
      title :'Ios',
      con :'Apple iOS stands for iPhone operating system and is designed for use with Apples multitouch devices. The mobile OS supports input through direct manipulation and responds to various user gestures, such as pinching, tapping and swiping.',
      src : '',
    },{
      title: "NodeJs",
      con: "Node.js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser. Ryan Dahl developed it in 2009, and its latest iteration, version 15.14, was released in April 2021. Developers use Node.",
      src:"",
    },
  ];

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
          <div className="grid lg:grid-cols-4  md:grid-cols-2 sm:grid-cols-2  grid-cols-1 -m-2 ">
            <div className="p-2 h-64 ">
              <div className="h-full p-4 rounded-lg border-2 border-gray-100 flex flex-col relative overflow-hidden bg-blue-50">
                <div className="sm:text-center text-center md:text-center h-full">
                  <Link to="/Technologies" className=" text-2xl font-semibold ">
                    Web Developement
                  </Link>
                  <p className="flex-row items-center text-center mt-4 text-lg text-[#14406D] mb-8">
                    {dummyContent.substr(0, 80)}
                    {expanded ? dummyContent.substr(50) : "..."}.
                    <button
                      className="flex-col  text-gray-300 font-semibold focus:outline-none"
                      onClick={handleClick}
                    >
                      {expanded ? "Read less" : "Read more"}
                    </button>
                  </p>
                </div>
              </div>
            </div>
            <div className="p-2 h-64  ">
              <div className=" p-4 h-full rounded-lg border-2 border-gray-100 flex  flex-col relative overflow-hidden bg-blue-50">
                <div className="sm:text-center text-center md:text-center">
                  <Link
                    to="/Technologies"
                    className="text-2xl font-semibold text-center "
                  >
                    Mobile App-Devlopement
                  </Link>
                  <p className="flex-row items-center text-center mt-4 text-lg text-[#14406D]  mb-8">
                    {dummyContent.substr(0, 80)}
                    {expanded ? dummyContent.substr(50) : "..."}.
                    <button
                      className="flex-col  text-gray-300 font-semibold focus:outline-none"
                      onClick={handleClick}
                    >
                      {expanded ? "Read less" : "Read more"}
                    </button>
                  </p>
                </div>
              </div>
            </div>
            <div className="p-2 h-64">
              <div className=" p-4 h-full rounded-lg border-2 border-gray-100 flex flex-col relative overflow-hidden bg-blue-50">
                <div className="sm:text-center text-center md:text-center">
                  <Link
                    to="/Technologies"
                    className="text-2xl font-semibold text-center  "
                  >
                    UI/Ux Design
                  </Link>
                  <p className="flex-row items-center text-center mt-4 text-lg text-[#14406D]  mb-8">
                    {dummyContent.substr(0, 80)}
                    {expanded ? dummyContent.substr(50) : "..."}.
                    <button
                      className="flex-col  text-gray-300 font-semibold focus:outline-none"
                      onClick={handleClick}
                    >
                      {expanded ? "Read less" : "Read more"}
                    </button>
                  </p>
                </div>
              </div>
            </div>
            <div className="p-2 h-64 ">
              <div className=" p-4 h-full rounded-lg border-2 border-gray-100 flex flex-col relative overflow-hidden bg-blue-50">
                <div className="sm:text-center text-center md:text-center">
                  <Link
                    to="/Technologies"
                    className="text-2xl font-semibold text-center  "
                  >
                    QA and Testing
                  </Link>
                  <p className="flex-row items-center text-center mt-4 text-lg text-[#14406D] overflow-hidden  mb-8">
                    {dummyContent.substr(0, 80)}
                    {expanded ? dummyContent.substr(50) : "..."}.
                    <button
                      className="flex-col  text-gray-300 font-semibold focus:outline-none"
                      onClick={handleClick}
                    >
                      {expanded ? "Read less" : "Read more"}
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font font-serif bg-gradient-to-r from-cyan-50 via-fuchsia-50 to-blue-50">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="sm:text-4xl text-3xl mb-4  font-semibold text-[#14406D] ">
              WHY US
            </h1>
            <p className="mb-8 leading-relaxed text-lg  ">
              Our Consulting agency provides Consulting,ideas,and resources for
              people Working to create social change.we bring the right people
              together to challenge established thinking and drive
              transformation.We work with our client to build the capabilities
              that enable organizations to achieve sustainable advantage.
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={home3}
            />
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font font-serif">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={h2}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold  text-[#14406D]">
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
                className="bg-[#14406D] hover:bg-gray-400 hover:text-black text-white font-serif  text-lg border-0 px-3 py-2 focus:outline-none rounded-tr-xl rounded-bl-xl text-base mt-0"
              >
                Hire-Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font bg-gray-100">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-4xl font-serif  text-center  text-[#14406D] mb-4 transition  hover:scale-105 hover:underline decoration-[#14406D] ">
              Technologies We work
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            {Tech.map((tech) => {
              return (
                <div className="p-4 lg:w-1/4 sm:w-1/2 w-full flex flex-col items-center  ">
                  <h2 className=" tracking-widest text-gray-900 mb-4 text-2xl font-serif text-center sm:text-left cursor-pointer  ">
                    {tech.title}
                  </h2>
                  <nav className="flex flex-col sm:items-start sm:text-left text-center items-center justify-center -mb-1 space-y-2.5 font-serif text-lg  text-[#14406D] ">
                    {tech.value.map((value) => {
                      return (
                        <div className="flex items-center justify-center ">
                          <span className="text-sky-800 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                            <svg
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="3"
                              className="w-3 h-3"
                              viewBox="0 0 24 24"
                            >
                              <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                          </span>
                          <div
                            className="cursor-pointer"
                            onClick={() => handleTechnology(value)}
                          >
                            {value}
                          </div>
                        </div>
                      );
                    })}
                  </nav>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="flex " style={{ position: "relative" }}>
        <img
          src={aboutus}
          alt=""
          srcSet=""
          className="min-w-full  h-3/6 max-h-96 backdrop-blur-xl "
          style={{ filter: " contrast(1.1) brightness(30%) " }}
        />
        <div className="flex-col items-center  justify-center absolute h-full  w-screen py-20 ">
          <h1 className="lg:text-6xl md:text-5xl sm:text-4xl text-xl text-center  text-white  font-bold  font-serif ">
            More productive Business?
          </h1>
          <div className="flex items-center justify-center p-4">
            <Link
              to="/Contactus"
              className=" bg-[#14406D] hover:bg-gray-400 hover:text-black text-white font-serif  text-lg border-0 py-2 px-3 focus:outline-none rounded-tr-xl rounded-bl-xl text-base mt-0"
            >
              Contact-Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
