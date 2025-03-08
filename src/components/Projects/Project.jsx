import React from "react";
import ProjectCard from "./Projectcards";
import ProjectLinks from "./projectlinks";

function Project(){
    const projects = ProjectLinks;
    return (
        <div id="Projects" className="bg-[#393053] flex flex-col justify-center">
            <div className="flex justify-center">
                <h2 className="text-[35px] lg:text-[45px] text-white m-3">Projects</h2>
            </div>
            <div className="projects-container flex flex-row flex-wrap justify-evenly m-4">
                {projects.map((project)=>{
                    return(<ProjectCard
                    title={project.title} 
                    img = {project.img} 
                    description = {project.desciption}
                    />)
                })}
            </div>
        </div>
    );
}

export default Project;