import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-card py-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        
        <div className="mb-4 md:mb-0">
          <p className="text-lightText text-sm">&copy; {new Date().getFullYear()} Adarsh Raj. All rights reserved.</p>
        </div>

        <div className="flex space-x-6 mb-4 md:mb-0">
          <a href="https://github.com/adarshraj62011-lgtm" target="_blank" rel="noreferrer" className="text-lightText hover:text-primary transition-colors duration-300">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/adarsh-raj-876a63308" target="_blank" rel="noreferrer" className="text-lightText hover:text-primary transition-colors duration-300">
            <FaLinkedin size={24} />
          </a>
          <a href="https://www.instagram.com/adarsh__singh_rajput/" target="_blank" rel="noreferrer" className="text-lightText hover:text-primary transition-colors duration-300">
            <FaInstagram size={24} />
          </a>
        </div>

        <div>
          <p className="flex items-center text-sm text-lightText">
            Made with <FaHeart className="text-red-500 mx-2 animate-pulse" /> by Adarsh Raj
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
