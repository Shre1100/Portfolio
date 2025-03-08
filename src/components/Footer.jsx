import React from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';

const year = new Date().getFullYear();

function Footer(){
    return(
        <footer className="block w-[100%] mt-7 text-white">
            <p>Made with <FavoriteIcon /> using React and Tailwind by Shreya Kumar.</p>
            <p>copyright © {year}</p>
        </footer>
    );
}

export default Footer;