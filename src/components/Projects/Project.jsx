import React from "react";
import { ProjectLinks } from "../../Assets/assets";
import AnimatedHr from "../AnimateHr";

function Project() {
  return (
    <div className="bg-gradient-to-br from-[#18122B] via-[#2A1E4A] to-[#3C2A6F] min-h-[100vh] flex flex-col justify-center">
      <div className="flex flex-col mx-5 mt-20 mb-6 justify-center">
        <h2 className="text-[35px] lg:text-[45px] font-semibold text-white m-3">Projects</h2>
        <AnimatedHr className="h-[2px] w-full" duration={1000}/>
      </div>
      <div className="grid  lg:grid-cols-[1fr_1fr_1fr] md:gap-5 justify-evenly lg:gap-10 md:mx-5 lg:mx-15">
        {ProjectLinks.map((project, idx) => (
          <div key={idx} className="pt-5 w-[350px] md:w-[400px] p-4 group flex flex-col items-center bg-[#393053] min-h-[500px] text-white rounded-lg m-4 hover:scale-105 duration-150 hover:cursor-pointer">
            <img
              src={project.img}
              alt={project.title + "snapshot"}
              className="w-[80%] h-[55%] relative transition-all duration-300 group-hover:opacity-60"
            />
            <div className="flex gap-2 items-center">
              <p className="text-lg md:text-xl transition-all duration-300 font-semibold m-3">
                {project.title}
              </p>
              <a
                href={project.link}
                className="hidden transition-all duration-300 bg-[#605788] rounded-lg shadow-lg text-white font-bold group-hover:block px-4 py-1"
              >
                View More
              </a>
            </div>
            <p>{project.description}</p>
          </div>
      ))}

      </div>
      
    </div>
  );
}

export default Project;
