import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaHeart } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  const links = [
    { id: 1, link: 'home', label: 'Home' },
    { id: 2, link: 'about', label: 'About' },
    { id: 3, link: 'skills', label: 'Skills' },
    { id: 4, link: 'projects', label: 'Projects' },
    { id: 5, link: 'achievements', label: 'Achievements' },
    { id: 6, link: 'contact', label: 'Contact' },
  ];

  return (
    <footer className="w-full bg-footerBg text-white">

      {/* Top CTA Section — like the "Ready to curate your vision?" from the reference */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 flex flex-col md:flex-row items-center justify-between gap-8 border-b border-white/10">
        <div>
          <p className="text-xs tracking-[0.3em] text-white/40 uppercase mb-3">Let's work together</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold leading-tight">
            Ready to build <br className="hidden sm:block" />
            <span className="italic text-primary">your next vision?</span>
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="mailto:adarshraj62011@gmail.com"
            className="px-8 py-3 bg-primary text-white text-sm font-medium uppercase tracking-wider hover:bg-white hover:text-footerBg transition-all duration-300"
          >
            Start a Project
          </a>
          <a
            href="/resume.pdf"
            download
            className="px-8 py-3 border border-white/30 text-white text-sm font-medium uppercase tracking-wider hover:border-primary hover:text-primary transition-all duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Middle navigation */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 flex flex-col md:flex-row justify-between items-start gap-8">

        <div className="md:w-1/3">
          <h3 className="font-serif text-2xl font-bold mb-3">Adarsh<span className="text-primary">.</span></h3>
          <p className="text-white/50 text-sm leading-relaxed max-w-xs">
            A passionate developer crafting digital experiences that are elegant, functional, and memorable.
          </p>
        </div>

        <div className="flex gap-16 flex-wrap">
          <div>
            <p className="text-white/40 text-xs uppercase tracking-[0.3em] mb-5">Navigate</p>
            <ul className="flex flex-col gap-3">
              {links.slice(0, 3).map(({ id, link, label }) => (
                <li key={id}>
                  <Link
                    to={link}
                    smooth
                    duration={500}
                    offset={-70}
                    className="text-white/60 text-sm hover:text-primary transition-colors cursor-pointer capitalize"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-white/40 text-xs uppercase tracking-[0.3em] mb-5">More</p>
            <ul className="flex flex-col gap-3">
              {links.slice(3).map(({ id, link, label }) => (
                <li key={id}>
                  <Link
                    to={link}
                    smooth
                    duration={500}
                    offset={-70}
                    className="text-white/60 text-sm hover:text-primary transition-colors cursor-pointer capitalize"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <p className="text-white/40 text-xs uppercase tracking-[0.3em] mb-5">Social</p>
          <div className="flex gap-4">
            <a href="https://github.com/adarshraj62011-lgtm" target="_blank" rel="noreferrer"
              className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/60 hover:border-primary hover:text-primary transition-all duration-300">
              <FaGithub size={16} />
            </a>
            <a href="https://www.linkedin.com/in/adarsh-raj-876a63308" target="_blank" rel="noreferrer"
              className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/60 hover:border-primary hover:text-primary transition-all duration-300">
              <FaLinkedin size={16} />
            </a>
            <a href="https://www.instagram.com/adarsh__singh_rajput/" target="_blank" rel="noreferrer"
              className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/60 hover:border-primary hover:text-primary transition-all duration-300">
              <FaInstagram size={16} />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/30 text-xs">© {new Date().getFullYear()} Adarsh Raj. All rights reserved.</p>
          <p className="flex items-center text-xs text-white/30">
            Made with <FaHeart className="text-primary mx-1.5" size={10} /> by Adarsh Raj
          </p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
