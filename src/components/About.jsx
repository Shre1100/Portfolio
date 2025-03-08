import React from "react";

function About(){
    return(
        <div id="About" className="bg-[#18122B] text-white flex flex-col justify-evenly">
            {/* Heading  */}
            <div className="mb-5 mt-5">
                <h1 className="text-[35px] font-semibold lg:text-[45px] p-3">About Me</h1>
            </div>

            {/* Content  */}
            <div className="flex justify-center mb-8 p-3">
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