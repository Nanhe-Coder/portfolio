import React from "react";
import pic from  "../assets/monk.jpg"
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <>
      <div name="Home" className="max-w-screen-2xl  container mx-auto px-4 md:px-20 my-20">
        <div className="flex flex-col   md:flex-row ">
          <div className="order-2 md:w-1/2 mt-12 md:mt-24 space-y-4 md:order-1">
            <span className="text-xl md:text-4xl mb-8">Welcome In My Portfolio</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a </h1>
              {/* <span className="text-red-700 font-bold">Developer</span> */}
               <ReactTyped
                  className="text-red-700 font-bold"
                  strings={["Design", "Developer", "programmer"]}
                  typeSpeed={40}
                  backSpeed={50}
                  loop={true}
                /> 
            </div>
            <p className="text-sm md:text-[15px] font-bold text-justify md:space-y-8">
              To apply different styles for different screen sizes, you prefix
              the utility class with the corresponding breakpoint name. Here's
              how it works: Mobile-First Approach: Without any prefix, styles
              apply to all screen sizes. Prefix for Breakpoints: Add a
              breakpoint prefix like sm:, md:, etc. to apply styles for that
              screen size and up.
            </p>
            <br />
            <div className="flex flex-col items-center  md:flex-row justify-between space-y-6 md:space-y-0">
              {/*social media icon */}
              <div className="space-y-2 flex flex-col items-center justify-center md:flex-col md:text-[15px]">
                <h1 className="font-bold">
                  Available on
                </h1>
                <ul className="flex space-x-5">
                  <li>
                    <a
                      href="www.facebook.com"
                      target="_blank"
                      className="text-2xl cursor-pointer md:text-3xl hover:scale-110 duration-200 rounded-full"
                    >
                      <FaFacebook className="md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="www.facebook.com"
                      target="_blank"
                      className="text-2xl cursor-pointer md:text-3xl hover:scale-110 duration-200 rounded-full"
                    >
                      <FaLinkedin className="md:text-2xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="www.facebook.com"
                      target="_blank"
                      className="text-2xl cursor-pointer md:text-3xl hover:scale-110 duration-200 rounded-full"
                    >
                      <FaInstagram className="md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="www.facebook.com"
                      target="_blank"
                      className="text-2xl cursor-pointer md:text-3xl hover:scale-110 duration-200 rounded-full"
                    >
                      <CiYoutube className="md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                    </a>
                  </li>
                </ul>
              </div>
              {/*Technology icons*/}
              <div className="space-y-2 flex flex-col items-center  justify-center mx-auto ">
                <h1 className="font-bold">
                  Currently working on
                </h1>
                <div className="flex space-x-5">
                  <BiLogoMongodb className="text-xl cursor-pointer md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <FaReact className="text-xl cursor-pointer md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <FaNodeJs className="text-xl cursor-pointer md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <CiYoutube className="text-xl cursor-pointer md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                </div>
              </div>
            </div>
          </div>
          <div className=" order-1 md:w-1/2 md:ml-18 md:mt-20  mx-auto md:order-2">
            <img
              src={pic}
              alt="this is not show"
              className="rounded-full w-[400px] h-[400px] md:w-[300px] md:h-[300px] md:mx-auto md:mt-5"
            />
          </div>
        </div>
      </div>
       <hr />
    </>
  );
};

export default Home;
