import React from "react";

function SkillCard(props){
    return(
        // main div 
        <div className="skill-card h-[100px] w-[300px] flex justify-center flex-row bg-[#635985] lg:m-4 items-center rounded-lg hover:scale-105 duration-150 cursor-pointer">
            
            {/* icon image div  */}
            <div className=" w-[40%]">
                <img className="h-[80px]" src={props.icon} alt={props.title}></img>
            </div>
            {/* skill name div */}
            <div className="text-[#18122B] font-bold text-xl">
                {props.title}
            </div>

        </div>
    );
}

export default SkillCard;