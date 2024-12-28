import React, { useState } from "react";
import pic from  "../assets/monk.jpg"
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from 'react-scroll';


const Nav = () => {
  const[menu,setMenu]=  useState(false);
 const NavItems=[
  {
    id:1,
    text:"Home"
  },
  {
    id:2,
    text:"About"
  },
  {
    id:3,
    text:"Portfolio"
  },
  {
    id:4,
    text:"Experience"
  },
  {
    id:5,
    text:"Contactus"
  }
 ]

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 h-16 md:px-20 shadow-md fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x">
            <img src={pic}  className="h-12 w-12 rounded-full" alt="show pices" />
            <h1 className="font-semibold text-xl cursor-pointer">
              Nanh<span className="text-green-500 text-2xl">e</span>
              <p className="text-sm">Web Developer</p>
            </h1>
          </div>
          <div>
            <ul className="hidden md:flex space-x-8">
             {
              NavItems.map(({id,text})=>(
                <li className="hover:scale-105 duration-200 cursor-pointer" key={id}>
                  <Link to={text}
                  activeClass="active" 
                  spy={true} 
                  smooth={true} 
                  offset={50} 
                  duration={500} 
                  >
                  {text}
                  </Link></li>
              ))
             }
            </ul>
            <div onClick={()=>setMenu(!menu)} className="md:hidden">
            {
              menu ? <IoCloseSharp size={24}/> :<IoMdMenu size={24}/>
            }

            </div>
          </div>
        </div>
        {
          menu&&(
            <div className="bg-white">
            <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl">
            {
              NavItems.map(({id,text})=>(
                <li className="hover:scale-105 duration-200 cursor-pointer font-semibold" key={id}>
                    <Link to={text}
                    onClick={()=>setMenu(!menu)}
                  activeClass="active" 
                  spy={true} 
                  smooth={true} 
                  offset={50} 
                  duration={500} 
                  >
                  {text}
                  </Link> </li>
              ))
             }
                </ul>
            </div>
          )
        }

      </div>
    </>
  );
};

export default Nav;
