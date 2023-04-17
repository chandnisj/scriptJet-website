import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
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
import tech from "../Screen/Images/technology.jpg";
function Technologies() {
  // eslint-disable-next-line
  const [isRender, setIsRender] = useState(false);
  const contants = [
    {
      title: "ReactJs",
      con: "React.js is a popular JavaScript library for building user interfaces. It allows developers to create reusable UI components that can be easily rendered and updated based on changes in data. React uses a declarative programming style, which means that developers can focus on describing what the UI should look like, rather than how to update it. With its virtual DOM and efficient rendering approach, React provides a fast and responsive user experience for web applications. It is widely used by companies like Facebook, Netflix, and Airbnb.",
      src: react,
    },
    {
      title: "VueJs",
      con: "Vue.js is a progressive JavaScript framework used for building user interfaces. It is designed to be incrementally adoptable, meaning developers can easily integrate it into an existing project. Vue.js offers a simple and flexible syntax, making it easy to learn and use. With its reactive data binding and component-based architecture, Vue.js allows developers to create complex applications with ease. It also has a vibrant community and a rich ecosystem of plugins and tools that make development even easier. Vue.js is widely used by companies like Alibaba, Xiaomi, and GitLab.",
      src: vue,
    },
    {
      title: "AngularJs",
      con: "AngularJS is a popular JavaScript framework developed by Google for building dynamic and scalable web applications. It allows developers to create reusable components and use declarative templates to build complex user interfaces. AngularJS also provides features like two-way data binding, dependency injection, and routing, making it a powerful tool for building single-page applications. With its active community and extensive documentation, AngularJS is a popular choice for enterprise-level applications. It has been used by companies like Microsoft, IBM, and PayPal.",
      src: angular,
    },
    {
      title: "NextJs",
      con: "Next.js is a popular React framework that allows developers to build server-rendered applications with ease. It provides features like automatic code splitting, server-side rendering, and static site generation, making it a powerful tool for building high-performance web applications. Next.js also has a strong focus on developer experience, with features like zero-config setup and easy deployment to popular hosting platforms. It has been used by companies like Twitch, Hulu, and Nike.",
      src: next,
    },
    {
      title: "Android",
      con: "Android is the most widely used mobile operating system developed by Google. It is based on the Linux kernel and is used on a range of devices, including smartphones, tablets, and TVs. Android offers a customizable user interface, a vast app ecosystem through the Google Play Store, and access to Google's suite of apps and services. It also supports multi-tasking, multi-touch, and gesture-based inputs, making it a powerful and flexible platform for both users and developers. Android is used by millions of people around the world and is constantly evolving with new updates and features.",
      src: android,
    },
    {
      title: "Ios",
      con: "iOS is the mobile operating system developed by Apple for its iPhone, iPad, and iPod Touch devices. It is known for its intuitive user interface, high security, and seamless integration with other Apple devices and services. iOS offers a vast app ecosystem through the App Store, and its features include Siri, FaceTime, and iMessage. iOS is also used by developers to build high-quality, native apps for Apple devices. It is a popular choice for users who prioritize privacy and a seamless user experience",
      src: ios,
    },
    {
      title: "Flutter",
      con: "Flutter is a popular open-source UI toolkit developed by Google for building high-performance, natively compiled applications for mobile, web, and desktop platforms. It provides a rich set of pre-built widgets and tools, allowing developers to create beautiful and responsive apps with ease. Flutter uses the Dart programming language, which offers features like JIT and AOT compilation, making it fast and efficient. With its active community and extensive documentation, Flutter has gained popularity among developers and has been used by companies like Alibaba, Google, and Square",
      src: flutter,
    },
    {
      title: "ReactNative",
      con: "React Native is a popular open-source framework developed by Facebook for building mobile applications using the React library. It allows developers to build high-quality, native mobile apps for both iOS and Android platforms using a single codebase. React Native provides a fast and efficient way to develop cross-platform apps with native-like performance and look-and-feel. It has a vibrant community and an extensive library of pre-built components and modules, making development easier and faster. React Native has been used by companies like Bloomberg, Instagram, and Airbnb.",
      src: reactnative,
    },
    {
      title: "NodeJs",
      con: "Node.js is an open-source, server-side JavaScript runtime environment that allows developers to build fast and scalable web applications. It uses an event-driven, non-blocking I/O model, which makes it lightweight and efficient. Node.js provides a rich set of libraries and modules, making it easy to build robust web applications. It also allows developers to easily build RESTful APIs and real-time applications. With its active community and large ecosystem of tools and frameworks, Node.js is widely used by companies like Netflix, LinkedIn, and Walmart.",
      src: node,
    },
    {
      title: "PHP",
      con: "PHP is a popular, open-source server-side scripting language used for web development. It is designed to create dynamic web pages, process form data, and manage databases. PHP is easy to learn and widely supported by most web hosting providers. It offers a rich set of libraries and frameworks, making it easy to build powerful and scalable web applications. With its large community and extensive documentation, PHP has been used to develop a wide range of applications across various industries. It is a popular choice for content management systems like WordPress, Drupal, and Joomla.",
      src: php,
    },
    {
      title: "JAVA",
      con: "Java is a popular, general-purpose programming language that is widely used for developing desktop, web, and mobile applications. It is known for its portability, scalability, and security. Java offers features like object-oriented programming, automatic memory management, and platform independence, making it a versatile and powerful language. With its vast community and rich ecosystem of libraries and frameworks, Java has been used to develop a wide range of applications across various industries. It is a popular choice for enterprise-level applications and has been used by companies like Oracle, Amazon, and Google.",
      src: java,
    },
    {
      title: "SQL",
      con: "SQL (Structured Query Language) is a popular programming language used to manage and manipulate relational databases. It provides a way to insert, update, retrieve, and delete data from databases. SQL is used by a wide range of applications and is supported by most relational database management systems (RDBMS). It offers a simple and intuitive syntax, making it easy for developers to write and manage database queries. With its rich set of features and functionality, SQL is widely used by businesses of all sizes for data management and analysis.",
      src: sql,
    },
    {
      title: "MYSQL",
      con: "MySQL is a popular, open-source relational database management system (RDBMS) based on SQL. It is widely used for managing and storing data for web applications and websites. MySQL offers a range of features such as fast performance, high scalability, and ease of use. It is compatible with most programming languages and platforms, making it a versatile choice for developers. With its active community and support, MySQL has been used by companies like Facebook, Airbnb, and Twitter for data storage and management.",
      src: mysql,
    },
    {
      title: "MongoDb",
      con: "MongoDB is a popular open-source, document-oriented NoSQL database used for storing and managing unstructured data. It is designed to be flexible, scalable, and easily accessible. MongoDB uses a document model to store data in JSON-like format, making it easy to work with and query. It provides a rich set of features like dynamic schema, high availability, and automatic sharding, making it ideal for web applications that require fast and scalable data management. MongoDB is widely used by companies like eBay, Forbes, and Adobe for big data processing and management.",
      src: mongodb,
    },
    {
      title: "UIUX",
      con: "UI (User Interface) and UX (User Experience) are important aspects of designing digital products like websites, mobile apps, and software. UI refers to the visual and interactive elements of a product, while UX focuses on how users interact with the product and the overall experience. A good UI/UX design can help improve user engagement, increase customer satisfaction, and drive business growth. It involves research, wireframing, prototyping, and testing to ensure that the product meets the needs and expectations of its users",
      src: ui,
    },
    {
      title: "Boostrap",
      con: "Bootstrap is a popular open-source front-end framework used for designing responsive and mobile-first web applications. It provides a set of HTML, CSS, and JavaScript templates and tools, making it easy for developers to create modern and responsive designs. Bootstrap offers a range of pre-built components and widgets such as navigation bars, forms, modals, and carousels, allowing developers to build complex UI elements quickly and easily. With its active community and extensive documentation, Bootstrap has been used by companies like Spotify, NASA, and Airbnb for web development.",
      src: boostrap,
    },
    {
      title: "TailWind",
      con: "Tailwind CSS is a popular utility-first CSS framework used for building modern and responsive web applications. It provides a comprehensive set of pre-built classes and utilities for styling HTML elements, making it easy for developers to create custom designs without writing complex CSS code. Tailwind CSS allows developers to build a consistent design system by using predefined color, typography, and layout options. With its flexible and scalable design, Tailwind CSS has been used by companies like Atlassian, Amazon, and Slack for front-end development.",
      src: tailwind,
    },
  ];
  // eslint-disable-next-line
  const [filterContent, setFilterContent] = useState({});

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
  
  useEffect(() => {
    const targetTop = document.querySelector("#top");
    targetTop.scrollIntoView({ behavior: 'auto', block: "start" });
   
  }, []);
 

  return (
    <div id="top">
      <section>
        <div
          className="bg-cover bg-center flex flex-col items-center  justify-center   "
          style={{
            backgroundImage: `url(${tech})`,
            filter: "",
            height: "450px",
            maxHeight: "450px",
            minHeight: "450px",
          }}
        >
          <div className="flex flex-col items-center  justify-center  h-full  w-screen  backdrop-brightness-50  bg-gray/30 backdrop-invert-0 bg-white/30">
            <h1 className="lg:text-6xl md:text-5xl sm:text-4xl text-2xl text-center  text-[#14406D]  font-bold  font-serif cursor-pointer  ">
              Technology
            </h1>
            <div className="pt-4 flex items-center  justify-center">
              <p className="lg:text-lg md:text-lg sm:leading-relaxed sm:text-md sm:mx-auto min-[320px]:text-md min-[465px]:w-2/3 min-[410px]:leading-relaxed leading-tight text-justify text-sm mx-5 font-serif text-white">
                At ScriptJet, We offer a comprehensive suite of technology
                solutions to help businesses of all sizes leverage the power of
                technology to achieve their goals. We specialize in providing
                end-to-end services that cover everything from infrastructure
                design and implementation to software development and
                maintenance. Our team of highly skilled technology experts has
                years of experience in delivering cutting-edge solutions that
                drive business success. We understand the importance of staying
                ahead of the curve when it comes to technology, which is why we
                are constantly exploring new tools and methodologies to ensure
                our clients get the best possible outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font bg-gradient-to-r from-orange-50 to-blue-50 ">
        <div className="container px-5 py-20 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-4xl font-serif font-bold text-center  text-[#14406D] hover:text-[#FE9800] mb-4 transition  hover:scale-105 hover:underline underline-offset-8 decoration-[#14406D] ">
              Technologies We work with
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            {Tech.map((tech, i) => {
              return (
                <div
                  className="p-4 lg:w-1/4 sm:w-1/2 w-full flex flex-col items-center  "
                  key={i}
                >
                  <h2 className="tracking-widest  mb-4 text-2xl font-serif font-bold text-[#14406D] hover:text-[#FE9800]  text-center sm:text-left cursor-pointer  ">
                    {tech.title}
                  </h2>
                  <nav className="flex flex-col sm:items-start sm:text-left text-center items-start justify-center -mb-1 space-y-2.5 font-serif text-lg  text-[#14406D] ">
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

      <section className="text-gray-600 body-font font-serif">
        {contants.map((text, i) => {
          return (
            <div
              className="container mx-auto flex px-5 pt-20 pb-2 md:flex-row flex-col items-center "
              key={i}
              id={text.title}
            >
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                <div className="sm:block md:hidden lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                  <h1 className="title-font sm:text-4xl text-3xl mb-6 font-semibold  text-[#14406D] cursor-pointer ">
                    {text.title === "UIUX" ? "UI/UX" : text.title}
                  </h1>
                </div>
                <img
                  className="object-cover object-center rounded"
                  alt="hero"
                  src={text.src}
                />
              </div>
              <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 className="sm:hidden md:block hidden  title-font sm:text-4xl text-3xl mb-4 font-semibold  text-[#14406D] cursor-pointer ">
                  {text.title === "UIUX" ? "UI/UX" : text.title}
                </h1>
                <p className=" leading-relaxed text-gray-600">{text.con}</p>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default Technologies;
