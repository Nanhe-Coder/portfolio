import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import tailwind from  "../assets/tailwind.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.jpg";


const Portfoli=()=>{
const items=[
    {
        id:1,
        logo:html,
        name:"html"
    },
    {
        id:2,
        logo:css,
        name:"css"
    },
    {
        id:3,
        logo:tailwind,
        name:"tailwind"
    },
    {
        id:4,
        logo:javascript,
        name:"javascript"
    },
    {
        id:5,
        logo:react,
        name:"React"
    },
]  

    return(
        <><div name="Portfolio" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
        <div className="">
          <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
          <span className="underline font-semibold">Featured Project</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-5">
            {items.map(({ id, logo, name }) => (
              <div
                className="w-full border-[2px] rounded-lg shadow-lg p-4 cursor-pointer hover:scale-105 duration-300"
                key={id}
              >
                <img
                  src={logo}
                  className="w-[120px] h-[120px] mx-auto mb-4"
                  alt="logo"
                />
                <div>
                  <div className="px-2 font-bold text-xl mb-2">{name}</div>
                  <p className="px-2 text-gray-700">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit
                  </p>
                </div>
                <div className="w-full flex py-4 space-x-3 justify-around">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
                    Video
                  </button>
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                    Source Code
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
        </>
    )
}

export default Portfoli;