import React from "react";

function NavBar(){
    return (
    <div className="h-[7%] flex justify-between bg-[#18122B]  w-[100%] fixed z-10">
        {/* my logo  */}
        <div className=" ml-[35px] m-[10px] text-white font-bold text-lg">&lt;Shreya-Kumar/&gt;</div>

        {/* other contents like home,about  */}
        <div className="flex mr-5 ml-5 m-[5px] text-white w-[45%] justify-evenly" >
            <div className="nav-btn m-2 font-bold hover:cursor-pointer"><a href="#Home">HOME</a></div>
            <div className="nav-btn m-2 font-bold hover:cursor-pointer"><a href="#About">ABOUT</a></div>
            <div className="nav-btn m-2 font-bold hover:cursor-pointer"><a href="#Skills">SKILLS</a></div>
            <div className="nav-btn m-2 font-bold hover:cursor-pointer"><a href="#Projects">PROJECTS</a></div>
            <div className="nav-btn m-2 font-bold hover:cursor-pointer"><a href="#Connect">CONNECT</a></div>
        </div>
    </div>);
}
export default NavBar;