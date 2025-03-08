import React from "react";

function SkillCard(props){
    return(
        // main div 
        <div className="skill-card h-[100px] w-[300px] lg:w-[20%] flex justify-center flex-row bg-[#635985] m-4 items-center rounded-lg shadow-2xl cursor-pointer">
            
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