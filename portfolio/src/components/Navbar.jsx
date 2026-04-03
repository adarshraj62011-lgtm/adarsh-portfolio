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
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-background/95 backdrop-blur-md border-b border-border/50 py-3 shadow-sm'
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center">

          <div className="flex-shrink-0 cursor-pointer">
            <Link to="home" smooth duration={500}>
              <h1 className="text-3xl font-serif font-bold tracking-wide text-text uppercase">
                Adarsh<span className="text-primary">.</span>
              </h1>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-10">
            <ul className="flex space-x-8">
              {links.map(({ id, link }) => (
                <li key={id} className="cursor-pointer capitalize font-bold text-base text-text hover:text-primary transition-colors duration-200 nav-link tracking-widest px-2">
                  <Link to={link} smooth duration={500} offset={-70}>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href="/resume.pdf"
              download="Adarsh_Resume.pdf"
              className="flex items-center gap-2 px-5 py-2 border border-primary text-primary rounded-none font-medium hover:bg-primary hover:text-white transition-all duration-300 text-sm tracking-wider uppercase"
            >
              <FiDownload size={14} /> Resume
            </a>
          </div>

          <div onClick={() => setNav(!nav)} className="cursor-pointer md:hidden text-text z-50">
            {nav ? <FiX size={26} /> : <FiMenu size={26} />}
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-background space-y-10">
          {links.map(({ id, link }) => (
            <li key={id} className="cursor-pointer capitalize text-2xl font-serif text-text hover:text-primary transition-colors duration-200">
              <Link onClick={() => setNav(!nav)} to={link} smooth duration={500} offset={-70}>
                {link}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="/resume.pdf"
              download="Adarsh_Resume.pdf"
              className="flex items-center gap-2 px-8 py-3 border border-primary text-primary font-medium hover:bg-primary hover:text-white transition-all duration-300 uppercase tracking-wider text-sm"
            >
              <FiDownload size={14} /> Resume
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
