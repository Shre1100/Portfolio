import React from "react";
import ContactForm from "./Contact-Form";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Footer from "../Footer";


function Connect(){
    return (
        <div id="Connect" className="bg-[#18122B] flex flex-col justify-center items-center p-5">
            <h1 className="text-[35px] lg:text-[45px] text-[#FFF]">Get In Touch</h1>
            <div className="w-[90%] lg:w-[100%] lg:flex lg:flex-row lg:justify-center mt-5">
                <div className="m-4 lg:w-[45%]">
                    <p className="text-[19px] text-[#635985] mb-4">Hey! I am glad that you took out your precious time to check out my portfolio. If you have any questions,
                 want to discuss a project, or just want to say hi, feel free to reach out to me.
                  You can directly email me at <a href="mailto:shreya.kumar7519@gmail.com" className="text-white" >
                    shreya.kumar7519@gmail.com</a>. Alternatively, you can fill out the form given, and I’ll get back to you as soon as possible. 
                    <br />I'd love to hear from you!
                    </p>
                    <div className="links-container">
                        <a href="https://linkedin.com/in/shreya-kumar-71b08a252" target="_blank" className="text-white m-3"><LinkedInIcon fontSize="large"/></a>
                        <a href="https://github.com/Shre1100" target="_blank" className="text-white"><GitHubIcon fontSize="large"/></a>
                    </div>
                </div>

                <div className="form-container bg-[#2e2750] p-5 rounded-2xl m-4 lg:w-[40%] lg:m-2">
                    <ContactForm/>
                </div>
            </div>
            <Footer/>

        </div>
    );
}

export default Connect;