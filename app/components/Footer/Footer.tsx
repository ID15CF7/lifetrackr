import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className='row-start-1 flex items-center justify-center mb-10'>
    <p className='text-lg text-gray-500'>Created with <span className='text-red-500'>&#10084;</span> by <a href="https://github.com/ID15CF7/lifetrackr">Ploysiri</a> 2025</p>
    <a href="https://github.com/ID15CF7/lifetrackr" className='ml-2 text-gray-500 hover:text-gray-700'>
    <FontAwesomeIcon icon={faGithub} />
    </a>
    </footer>
  );
};

export default Footer;
