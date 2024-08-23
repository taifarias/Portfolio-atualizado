import React from "react";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";


const Navbar = () => {
    return (
        <div className="linkSocial flex fixed w-full h-8 items-center justify-center space-x-10 bg-green-300 bg-opacity-45">
        <a href="https://github.com/taifarias" className="transition-transform duration-200 transform hover:scale-110">
            <IoLogoGithub size={25} />
        </a>
        <a href="https://www.linkedin.com/in/taibarboza-devweb/" className="transition-transform duration-200 transform hover:scale-110">
            <IoLogoLinkedin size={25} />
        </a>
    </div>
    )
}

export default Navbar;