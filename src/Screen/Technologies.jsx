import React from "react";
import h2 from "../Screen/Images/home-2.jpg";
import { Link } from "react-router-dom";
function Technologies() {
  return (
    <div>
    <section  className=" text-gray-600  body-font ">
    <div  className="container px-4 py-24 mx-auto">
      <div  className="flex flex-col text-center w-full mb-12">
        <h1  className="text-3xl text-5xl font-medium title-font mb-4  font-serif text-[#14406D] cursor-pointer transition  hover:scale-105">
          {" "}
          Technologies{" "}
        </h1>
        <p  className="w-2/3  mx-auto leading-relaxed text-lg font-serif">
          Quality in a service or product is not what you put into it. It’s
          what the client or customer gets out of it
        </p>
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
    </div>
  );
}

export default Technologies;
