import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import react from "../Screen/Images/Technologies/reactjs.jpg";
import vue from "../Screen/Images/Technologies/Vuejs.jpeg";
import angular from "../Screen/Images/Technologies/angular.jpeg";
import next from "../Screen/Images/Technologies/nextjs.jpeg";
import android from "../Screen/Images/Technologies/android.jpeg";
import ios from "../Screen/Images/Technologies/ios.jpeg";
import flutter from "../Screen/Images/Technologies/flutter.jpeg";
import reactnative from "../Screen/Images/Technologies/react-native.png";
import node from "../Screen/Images/Technologies/nodejs.png";
import php from "../Screen/Images/Technologies/php.jpeg";
import java from "../Screen/Images/Technologies/java.jpeg";
import sql from "../Screen/Images/Technologies/sql.jpg";
import mysql from "../Screen/Images/Technologies/mysql.jpeg";
import mongodb from "../Screen/Images/Technologies/mongoDB.jpeg";
import ui from "../Screen/Images/Technologies/ui.jpg";
import boostrap from "../Screen/Images/Technologies/bootstrap.png";
import tailwind from "../Screen/Images/Technologies/tailwind.jpg";

function Technologies() {
  const [isRender, setIsRender] = useState(false);
  const contants = [
    {
      title: "ReactJs",
      con: "The React.js framework is an open-source JavaScript framework and library developed by Facebook. Its used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript.",
      src: react,
    },
    {
      title: "VueJs",
      con: "Vue (pronounced /vjuː/, like view) is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be they simple or complex.",
      src: vue,
    },
    {
      title: "AngularJs",
      con: "AngularJS is a structural framework for dynamic web apps. It lets you use HTML as your template language and lets you extend HTMLs syntax to express your applications components clearly and succinctly. AngularJSs data binding and dependency injection eliminate much of the code you would otherwise have to write.",
      src: angular,
    },
    {
      title: "NextJs",
      con: "Nextjs is a React framework that gives you building blocks to create web applications.Byframework,we mean Next.js handles the tooling and configuration needed for React,and provides additional structure,features and optimizations for your application.",
      src: next,
    },
    {
      title: "Android",
      con: "Android is a mobile operating system based on a modified version of the Linux kernel and other open-source software, designed primarily for touchscreen mobile devices such as smartphones and tablets.",
      src: android,
    },
    {
      title: "Ios",
      con: "Apple iOS stands for iPhone operating system and is designed for use with Apples multitouch devices. The mobile OS supports input through direct manipulation and responds to various user gestures, such as pinching, tapping and swiping.",
      src: ios,
    },
    {
      title: "Flutter",
      con: "Flutter – a simple and high performance framework based on Dart language, provides high performance by rendering the UI directly in the operating system’s canvas rather than through native framework.",
      src: flutter,
    },
    {
      title: "ReactNative",
      con: "React Native is a programming framework developed by Facebook that gives developers the ability to create full, native mobile apps for both iOS and Android using a universal programming language called JavaScript.",
      src: reactnative,
    },
    {
      title: "NodeJs",
      con: "Node.js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser. Ryan Dahl developed it in 2009, and its latest iteration, version 15.14, was released in April 2021. Developers use Node.",
      src: node,
    },
    {
      title: "PHP",
      con: "PHP (Hypertext Preprocessor) is known as a general-purpose scripting language that can be used to develop dynamic and interactive websites. It was among the first server-side languages that could be embedded into HTML, making it easier to add functionality to web pages without needing to call external files for data.",
      src: php,
    },
    {
      title: "JAVA",
      con: "Java was designed to be easy to use and is therefore easy to write, compile, debug, and learn than other programming languages. Java is object-oriented. This allows you to create modular programs and reusable code. Java is platform-independent.",
      src: java,
    },
    {
      title: "SQL",
      con: "SQL is used to communicate with a database. According to ANSI (American National Standards Institute), it is the standard language for relational database management systems. SQL statements are used to perform tasks such as update data on a database, or retrieve data from a database.",
      src: sql,
    },
    {
      title: "MYSQL",
      con: "It may be anything from a simple shopping list to a picture gallery or the vast amounts of information in a corporate network. To add, access, and process data stored in a computer database, you need a database management system such as MySQL Server.",
      src: mysql,
    },
    {
      title: "MongoDb",
      con: "MongoDB is a document database used to build highly available and scalable internet applications. With its flexible schema approach, it's popular with development teams using agile methodologies.",
      src: mongodb,
    },
    {
      title: "UIUX",
      con: "UI refers to the screens, buttons, toggles, icons, and other visual elements that you interact with when using a website, app, or other electronic device. UX refers to the entire interaction you have with a product, including how you feel about the interaction.",
      src: ui,
    },
    {
      title: "Boostrap",
      con: "Bootstrap makes responsive web design a reality. It makes it possible for a web page or app to detect the visitor's screen size and orientation and automatically adapt the display accordingly.",
      src: boostrap,
    },
    {
      title: "TailWind",
      con: "Tailwind is a CSS framework that provides us with single-purpose utility classes which are opinionated for the most part, and which help us design our web pages from right inside our markup or . js/. jsx/.",
      src: tailwind,
    },
  ];
  // eslint-disable-next-line
  const [filterContent, setFilterContent] = useState({});
  const WrapTech = ({ items }) => {
    setIsRender(true);
    return (
      <section className="text-gray-600 body-font font-serif">
        {items.map((text, i) => {
          return (
            <div
              className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"
              key={i}
              id={text.title}
            >
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                <img
                  className="object-cover object-center rounded"
                  alt="hero"
                  src={text.src}
                />
              </div>
              <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold  text-[#14406D] ">
                  {text.title === "UIUX" ? "UI/UX" : text.title}
                </h1>
                <p className="mb-8 leading-relaxed">{text.con}</p>
                <div className="flex justify-center">
                  <Link
                    to="/Contactus"
                    className="bg-[#14406D] hover:bg-gray-400 hover:text-black text-white font-serif  text-lg border-0 px-3 py-2 focus:outline-none rounded-tr-xl rounded-bl-xl text-base mt-0"
                  >
                    Connect-Us
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    );
  };

  // useEffect(() => {
  //   const clickTech = localStorage.getItem("techValue");
  //   if (clickTech) {
  //     const contant = contants.filter((value) => {
  //       return value.title === clickTech;
  //     });
  //     //console.log("clickContant ", contant[0]);
  //     setFilterContent(contant[0]);
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  const Technologies = [
    {
      title: "FrontEnd",
      value: [
        "ReactJs",
        "VueJs",
        "AngularJs",
        "NextJs",
        "Android",
        "Ios",
        "Flutter",
        "ReactNative",
      ],
    },
    { title: "BackEnd", value: ["NodeJs", "PHP", "JAVA"] },
    { title: "Database", value: ["SQL", "MYSQL", "MongoDb"] },
    { title: "Design", value: ["UIUX", "Boostrap", "TailWind"] },
  ];
  // eslint-disable-next-line
  const [Tech, setTech] = useState(Technologies);

  const handleClick = (v) => {
    const contant = contants.filter((value) => {
      return value.title === v;
    });
    setFilterContent(contant[0]);
    localStorage.removeItem("techValue");
    const click = document.querySelector(`#${v}`);
    click.scrollIntoView({ behavior: "smooth" });
  };

  const location = useLocation();
  useEffect(() => {
    const clickTech = localStorage.getItem("techValue");
    if (clickTech) {
      setTimeout(() => {
        const click = document.querySelector(`#${clickTech}`);
        click.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 200);
    }
  }, [location.hash, isRender]);

  return (
    <div>
      <section className=" text-gray-600  body-font ">
        <div className="container px-4 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="text-3xl text-5xl font-medium title-font mb-4  font-serif text-[#14406D] cursor-pointer transition  hover:scale-105">
              Technology
            </h1>
            <p className="w-2/3  mx-auto leading-relaxed text-lg font-serif">
              Quality in a service or product is not what you put into it. It’s
              what the client or customer gets out of it
            </p>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font bg-gray-100 ">
        <div className="container px-5 py-20 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-4xl font-serif font-bold text-center  text-[#14406D] mb-4 transition  hover:scale-105 hover:underline decoration-[#14406D] ">
              Technology We work
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            {Tech.map((tech, i) => {
              return (
                <div
                  className="p-4 lg:w-1/4 sm:w-1/2 w-full flex flex-col items-center  "
                  key={i}
                >
                  <h2 className="tracking-widest text-gray-900 mb-4 text-2xl font-serif font-bold   text-center sm:text-left cursor-pointer  ">
                    {tech.title}
                  </h2>
                  <nav className="flex flex-col sm:items-start sm:text-left text-center items-center justify-center -mb-1 space-y-2.5 font-serif text-lg  text-[#14406D] ">
                    {tech.value.map((value, id) => {
                      return (
                        <div
                          className="flex items-center justify-center "
                          key={id}
                        >
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
                            onClick={() => handleClick(value)}
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

      <WrapTech items={contants} />
    </div>
  );
}

export default Technologies;
