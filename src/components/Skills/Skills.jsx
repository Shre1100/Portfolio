import React from "react";
import SkillCard from "./skillcard";

const skills = [{title: "C", icon:"https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg"},
    {title:"C++", icon:"https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg"},
    {title:"Python", icon:"https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"},
    {title:"HTML5", icon:"https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"},
    {title: "CSS3", icon:"https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"},
    {title: "JavaScript",icon: "https://cdn.freelogovectors.net/wp-content/uploads/2023/07/javascript_logo-freelogovectors.net_.png"},
    {title:"Bootstrap", icon:"https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg"},
    {title:"React", icon:"https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"},
    {title: "TailwindCSS",icon:"https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"},
    {title: "Node.js", icon:"https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"},
    {title: "PostgreSQL", icon :"https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg"},
    {title:"MongoDB", icon:"https://cdn.iconscout.com/icon/free/png-512/free-mongodb-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-vol-5-pack-logos-icons-2945120.png?f=webp&w=256"},
    {title: "Git",  icon: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg"},
    {title:"Github", icon: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"}
];

function Skills(){
    return(
        // main container 
        <div id="Skills" className="bg-[#443C68] p-8">
            {/* sub-container  */}
            <div className="flex flex-col justify-center">
                {/* heading container  */}
                <div className="flex flex-col justify-center mb-4">
                    <h2 className="text-white text-[35px] lg:text-[45px] font-semibold p-4">My Skillset</h2>
                </div>

                {/* skill- card conatiner  */}
                <div className="flex-row flex flex-wrap justify-center mb-6">
                    {skills.map((skill)=>{
                        return(<SkillCard
                            title = {skill.title}
                            icon = {skill.icon}
                            />);
                    })}
                </div>
            </div>
        </div>
    );
}

export default Skills;