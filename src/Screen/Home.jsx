import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import home from "../Screen/Images/home.jpg";
import h2 from "../Screen/Images/home-2.jpg";
import aboutus from "../Screen/Images/more.jpeg";
import home3 from "../Screen/Images/why-us.jpg";

function Home() {
  const navigate = useNavigate();
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

  const handleTechnology = (value) => {
    localStorage.setItem("techValue", value);
    navigate("/Technologies");
  };

  return (
    <div className="">
      <section className=" text-gray-600  body-font font-serif ">
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
              filter: "opacity(0.8)",
              maxHeight: "550px",
              minHeight: "550px",
            }}
          />
          <div
            className="w-screen flex  items-center justify-start  h-full"
            style={{ position: "absolute" }}
          >
            <div className="flex-col text-start md:w-1/2 sm:w-full w-full  ">
              <h1 className="sm:text-3xl text-2xl   mx-10 text-[#FE9800]  font-semibold  font-serif ">
                Transforming your vision into a digital reality
              </h1>
              <p className="sm:text-lg text-md  min-[320px]:text-lg mx-10  text-white  ">
                Welcome to our IT company, where we specialize in providing
                innovative web solutions to businesses of all sizes. Our team of
                highly skilled professionals has years of experience in
                developing customized websites, mobile applications, and
                software solutions that meet the unique needs of our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font overflow-hidden font-serif ">
        <div className="mx-10 py-24 flex items-center justify-center flex-col  ">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium text-[#14406D] title-font mb-2  transition hover:scale-105 hover:underline underline-offset-8 decoration-[#14406D] cursor-pointer ">
              Our <span className="text-[#FE9800]">Service</span>
            </h1>
          </div>
          <div className="grid lg:grid-cols-4  md:grid-cols-2 sm:grid-cols-2  grid-cols-1 -m-2 ">
            <div className="p-2 ">
              <div className="h-full p-4 rounded-lg border-2 border-gray-100 bg-gradient-to-r from-orange-50 to-blue-50">
                <div className="flex items-center flex-col justify-center sm:text-center text-center md:text-center h-full">
                  <Link
                    to="/Service#webdev"
                    className=" text-2xl font-semibold text-[#14406D] hover:text-[#FE9800] transition "
                  >
                    Web Developement
                  </Link>
                  <p className="flex-row items-center text-center mt-4 text-lg text-[#14406D]">
                    Web development involves creating websites and web
                    applications, using programming languages like HTML, CSS,
                    JavaScript, and frameworks like React and Angular.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-2 ">
              <div className=" p-4 h-full rounded-lg border-2 border-gray-100  bg-gradient-to-r from-orange-50 to-blue-50">
                <div className="flex items-center flex-col justify-center h-full sm:text-center text-center md:text-center">
                  <Link
                    to="/Service#mobile"
                    className="text-2xl font-semibold text-center text-[#14406D] hover:text-[#FE9800] transition "
                  >
                    Mobile App-Devlopement
                  </Link>
                  <p className="flex-row items-center text-center mt-4 text-lg text-[#14406D]">
                    Mobile development involves creating apps for smartphones
                    and tablets, using programming languages like Java, Swift,
                    Kotlin, Flutter and React Native.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-2 ">
              <div className=" p-4 h-full rounded-lg border-2 border-gray-100 bg-gradient-to-r from-orange-50 to-blue-50">
                <div className="flex items-center flex-col justify-center h-full sm:text-center text-center md:text-center">
                  <Link
                    to="/Service#uiux"
                    className="text-2xl font-semibold text-center text-[#14406D] hover:text-[#FE9800] transition "
                  >
                    UI/Ux Design
                  </Link>
                  <p className="flex-row items-center text-center mt-4 text-lg text-[#14406D] ">
                    UI/UX design involves creating interfaces that are visually
                    appealing, easy to navigate, and intuitive for users to
                    interact with.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-2 ">
              <div className=" p-4 h-full rounded-lg border-2 border-gray-100 bg-gradient-to-r from-orange-50 to-blue-50">
                <div className="flex items-center flex-col justify-center h-full sm:text-center text-center md:text-center">
                  <Link
                    to="/Service#testing"
                    className="text-2xl font-semibold text-center text-[#14406D] hover:text-[#FE9800] transition  "
                  >
                    QA and Testing
                  </Link>
                  <p className="flex-row items-center text-center mt-4 text-lg text-[#14406D] overflow-hidden">
                    QA and testing involve ensuring software quality,
                    identifying and fixing bugs, and ensuring user experience
                    meets expectations through testing methodologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font font-serif bg-gradient-to-r from-orange-50 to-blue-50">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="sm:text-4xl text-3xl mb-4  font-semibold text-[#14406D] cursor-pointer ">
              WHY <spna className="text-[#FE9800]">US</spna>
            </h1>
            <p className="mb-8 leading-relaxed text-lg  ">
              Script-jet provides Consulting,ideas,and resources for people
              Working to create social change.we bring the right people together
              to challenge established thinking and drive transformation.We work
              with our client to build the capabilities that enable
              organizations to achieve sustainable advantage.
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
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold  text-[#14406D] hover:text-[#FE9800] transition cursor-pointer">
              Hire Dedicated Developer
            </h1>
            <p className="mb-8 leading-relaxed">
              Our dedicated developers are highly skilled,experienced and
              cost-Effective in their respective fields. We bring a wealth of
              knowledge and expertise to your project, ensuring that it is
              delivered on time and to the highest quality.
            </p>
            <div className="flex justify-center">
              <Link
                to="/Contactus"
                className="bg-[#14406D] hover:bg-[#FE9800] hover:text-white text-white font-serif  text-lg border-0 px-3 py-2 focus:outline-none rounded-lg  mt-0"
              >
                Hire-Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font bg-gradient-to-r from-orange-50 to-blue-50">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-4xl font-serif font-semibold text-center cursor-pointer  text-[#14406D] mb-4 transition hover:text-[#FE9800]  hover:scale-105 hover:underline underline-offset-8 decoration-[#14406D] ">
              Technology We work with
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            {Tech.map((tech, index) => {
              return (
                <div
                  className="p-4 lg:w-1/4 sm:w-1/2 w-full flex flex-col items-center"
                  key={index}
                >
                  <h2 className="tracking-widest text-[#FE9800]  mb-4 text-2xl font-bold font-serif text-center sm:text-left   cursor-pointer  ">
                    {tech.title}
                  </h2>
                  <nav className="flex flex-col sm:items-start sm:text-left text-center items-start justify-center -mb-1 space-y-2.5 font-serif text-lg  text-[#14406D] ">
                    {tech.value.map((value, i) => {
                      return (
                        <div
                          className="flex items-center justify-center  "
                          key={i}
                        >
                          <span className="text-sky-800 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center ">
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
                          <Link
                            className="cursor-pointer"
                            to="/Technologies"
                            onClick={() => handleTechnology(value)}
                          >
                            {value === "UIUX" ? "UI/UX" : value}
                          </Link>
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

      <section>
        <div
          className="bg-cover bg-center brightness-75  "
          style={{
            position: "relative",
            backgroundImage: `url(${aboutus})`,
            filter: "",
            height: "50vh",
          }}
        >
          <div className="flex flex-col items-center  justify-center  h-full  w-screen ">
            <h1 className="lg:text-6xl md:text-5xl sm:text-4xl text-xl text-center  text-[#14406D]  font-bold  font-serif cursor-pointer  ">
              Are you ready for a better?
            </h1>
            <div className="flex items-center justify-center pt-10">
              <Link
                to="/Contactus"
                className="bg-[#14406D] hover:bg-[#FE9800] hover:text-white text-white font-serif  text-lg border-0 py-2 px-3 focus:outline-none rounded-lg  mt-0"
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

export default Home;
