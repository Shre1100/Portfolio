import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Connect(){
    return (
        <div id="Connect" className="bg-gradient-to-br from-[#18122B] via-[#2A1E4A] to-[#3C2A6F] min-h-[100vh] flex flex-col justify-center items-center p-5">
            <h1 className="text-[35px] lg:text-[45px] text-[#FFF]">Get In Touch</h1>
            <hr className="bg-white h-[2px] w-[200px] md:w-[400px]"/>
            <div className="w-[90%] lg:w-[100%] lg:flex lg:flex-row lg:justify-center mt-5">
                <div className="m-4 lg:w-[45%]">
                    <p className="text-[19px] text-[#C4B7D2] mb-4">Hey! I am glad that you took out your precious time to check out my portfolio. If you have any questions,
                 want to discuss a project, or just want to say hi, feel free to reach out to me.
                  You can directly email me at <a href={process.env.REACT_APP_MAIL} className="text-white cursor-pointer" >
                    shreya.kumar7519@gmail.com</a>. I’ll get back to you as soon as possible. 
                    <br />I'd love to hear from you!
                    </p>
                    <div className="links-container">
                        <a href={process.env.REACT_APP_LINKEDIN_LINK}  className="text-white cursor-pointer m-3"><LinkedInIcon fontSize="large"/></a>
                        <a href={process.env.REACT_APP_GITHUB_LINK}  className="text-white cursor-pointer"><GitHubIcon fontSize="large"/></a>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Connect;