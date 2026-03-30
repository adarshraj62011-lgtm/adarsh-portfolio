import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FiMenu, FiX, FiDownload } from 'react-icons/fi';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { id: 1, link: 'home' },
    { id: 2, link: 'about' },
    { id: 3, link: 'skills' },
    { id: 4, link: 'projects' },
    { id: 5, link: 'achievements' },
    { id: 6, link: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          <div className="flex-shrink-0 cursor-pointer">
            <Link to="home" smooth duration={500}>
              <h1 className="text-3xl font-bold font-sans tracking-wider">
                <span className="text-gradient">Adarsh</span>
              </h1>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-6">
              {links.map(({ id, link }) => (
                <li key={id} className="cursor-pointer capitalize font-medium text-lightText hover:text-primary transition-colors duration-200">
                  <Link to={link} smooth duration={500} offset={-70}>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
            <a 
              href="/resume.pdf" 
              download 
              className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-medium hover:scale-105 transition-transform duration-300 shadow-lg shadow-primary/30"
            >
              <FiDownload /> Resume
            </a>
          </div>

          <div onClick={() => setNav(!nav)} className="cursor-pointer md:hidden text-lightText z-50">
            {nav ? <FiX size={30} /> : <FiMenu size={30} />}
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-background/95 backdrop-blur-lg space-y-8">
          {links.map(({ id, link }) => (
            <li key={id} className="cursor-pointer capitalize text-2xl text-lightText hover:text-primary transition-colors duration-200">
              <Link onClick={() => setNav(!nav)} to={link} smooth duration={500} offset={-70}>
                {link}
              </Link>
            </li>
          ))}
          <li>
            <a 
              href="/resume.pdf" 
              download 
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-medium hover:scale-105 transition-transform duration-300"
            >
              <FiDownload /> Resume
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
