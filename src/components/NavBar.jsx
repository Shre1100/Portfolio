import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import StarsIcon from '@mui/icons-material/Stars';
import CodeIcon from '@mui/icons-material/Code';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import DescriptionIcon from '@mui/icons-material/Description';

function NavBar(){
    const navigate = useNavigate();
    const [menu, setMenu] =  useState(false);
    return (
    <div className="h-[7%] flex items-center justify-between bg-[#18122B]  w-[100%] fixed z-10">
        {/* my logo  */}
        <div className=" ml-[35px] m-[10px] text-white font-bold text-lg">&lt;Shreya-Kumar/&gt;</div>

        {/* other contents like home,about  */}
        <div className=" hidden md:flex mr-5 ml-5 m-[5px] text-white w-[50%] justify-evenly" >
            <div onClick={()=>navigate('/')} className="nav-btn m-2 font-bold hover:cursor-pointer">HOME</div>
            <div onClick={()=>navigate('/about')} className="nav-btn m-2 font-bold hover:cursor-pointer">ABOUT</div>
            <div onClick={()=>navigate('/skills')} className="nav-btn m-2 font-bold hover:cursor-pointer">SKILLS</div>
            <div onClick={()=>navigate('/projects')} className="nav-btn m-2 font-bold hover:cursor-pointer">PROJECTS</div>
            <div onClick={()=>navigate('/connect')} className="nav-btn m-2 font-bold hover:cursor-pointer">CONNECT</div>
        </div>
        <p onClick={()=>setMenu(true)} className="md:hidden  ml-5 m-[5px]">
            <MenuIcon fontSize="large" style={{ color: 'white' }}/>
        </p>

        {/* menu for small screens  */}
        <div className={`${menu? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-[#18122B] text-white transition-all`}>
            <div onClick={()=>setMenu(false)} className="flex  items-center justify-between px-5 py-6">
              <CloseIcon/>
            </div>
            <ul className="flex flex-col items-start gap-4 mt-5 px-8">
              <NavLink onClick={()=>setMenu(!menu)} to={'/'} className={'flex text-lg font-semibold transition-all gap-2 items-center'}><HomeIcon/> <p className="px-3">Home</p></NavLink>
              <NavLink onClick={()=>setMenu(!menu)} to={'/about'} className={'flex text-lg  font-semibold transition-all gap-2 items-center'}><InfoIcon/> <p className="px-3">About</p> </NavLink>
              <NavLink onClick={()=>setMenu(!menu)} to={'/skills'} className={'flex text-lg  font-semibold transition-all gap-2 items-center'}><StarsIcon/> <p className="px-3">Skills</p></NavLink>
              <NavLink onClick={()=>setMenu(!menu)} to={'/projects'} className={'flex text-lg  font-semibold transition-all gap-2 items-center'}><CodeIcon/><p className="px-3">Projects</p></NavLink>
              <NavLink onClick={()=>setMenu(!menu)} to={'/connect'} className={'flex text-lg  font-semibold transition-all gap-2 items-center'}><ChatBubbleIcon/> <p className="px-3">Contact</p></NavLink>
              <NavLink onClick={()=>setMenu(!menu)} to={'/resume'} className={'flex text-lg  font-semibold transition-all gap-2 items-center'}><DescriptionIcon/><p className="px-3">Resume</p></NavLink>
            </ul>
          </div>
    </div>);
}
export default NavBar;