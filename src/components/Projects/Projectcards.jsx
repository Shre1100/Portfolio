import React from "react";

function ProjectCard(props){
    return(
        <div className="project-card flex flex-col items-center bg-[#18122B] w-[75%] text-white rounded-lg p-4 m-4 h-[500px] md:w-[80%] xl:w-[25%] hover:cursor-pointer">
            <img src={props.img} alt=""  className="w-[87%] h-[60%]"/>
            <h3 className="text-[20px] font-semibold m-3">{props.title}</h3>
            <p>{props.description}</p>
        </div>
    );
}
export default ProjectCard;