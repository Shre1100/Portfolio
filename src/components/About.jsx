import React from "react";
import AnimateHr from "./AnimateHr";

function About(){
    return(
        <div id="About" className="bg-gradient-to-br from-[#18122B] via-[#2A1E4A] to-[#3C2A6F] text-white min-h-[100vh] flex gap-10 flex-col justify-start">
            {/* Heading  */}
            <div className="m-5 mt-20">
                <h1 className="text-[35px] font-semibold lg:text-[45px] p-3">About Me</h1>
                <AnimateHr className="h-[2px] w-full" duration={1000} />
            </div>
            {/* Content  */}
            <div className="flex justify-center items-center lg:mx-5 mb-8 p-3">
                {/* Summary  */}
                <p className="w-[80%] text-xl">
                I am currently pursuing B.Tech in Computer Science with specialization in Cloud Computing and Machine Learning
                 from Babu Banarasi Das University, Lucknow. I completed my higher secondary education in the PCM (Physics, Chemistry, Mathematics) 
                 with Computer Science stream from Central Academy, Lucknow, achieving an aggregate of 85.2%.
                 <br/><br/>
                 I'm passionate about learning new and advancing technologies like Artificial Intelligence, Machine Leaning and Cloud Computing. 
                  I'm looking forward to seeking internship opportunities in the Software Development domain to gain practical experience and contribute
                   to meaningful projects.I'm eager to apply my knowledge and skills to solve real-world problems and be an asset to any forward thinking organization.
                   <br/>
                </p>
            </div>
        </div>
    );
}

export default About;