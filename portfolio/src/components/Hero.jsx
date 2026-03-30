import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import ParticleBackground from './ParticleBackground';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Hero = () => {
  return (
    <div id="home" className="relative min-h-screen w-full flex items-center justify-center pt-28 pb-16">
      <ParticleBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row items-center justify-between z-10">

        {/* Social Icons Sidebar (visible on desktop) */}
        <div className="hidden lg:flex fixed left-6 2xl:left-12 top-1/2 -translate-y-1/2 z-50">
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="flex flex-col items-center gap-6"
          >
            <div className="w-[1px] h-20 bg-gradient-to-b from-transparent to-primary/50 mb-2"></div>
            <a href="https://github.com/adarshraj62011-lgtm" target="_blank" rel="noreferrer" className="w-16 h-16 rounded-full border border-gray-700 bg-card/80 backdrop-blur-sm flex items-center justify-center text-lightText hover:text-white hover:border-primary hover:bg-primary/20 hover:scale-110 transition-all shadow-[0_0_15px_rgba(0,0,0,0.5)] group">
              <FaGithub size={30} className="group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
            </a>
            <a href="https://www.linkedin.com/in/adarsh-raj-876a63308" target="_blank" rel="noreferrer" className="w-16 h-16 rounded-full border border-gray-700 bg-card/80 backdrop-blur-sm flex items-center justify-center text-lightText hover:text-white hover:border-primary hover:bg-primary/20 hover:scale-110 transition-all shadow-[0_0_15px_rgba(0,0,0,0.5)] group">
              <FaLinkedin size={30} className="group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
            </a>
            <a href="#" target="_blank" rel="noreferrer" className="w-16 h-16 rounded-full border border-gray-700 bg-card/80 backdrop-blur-sm flex items-center justify-center text-lightText hover:text-white hover:border-primary hover:bg-primary/20 hover:scale-110 transition-all shadow-[0_0_15px_rgba(0,0,0,0.5)] group">
              <FaTwitter size={30} className="group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
            </a>
            <a href="https://www.instagram.com/adarsh__singh_rajput/" target="_blank" rel="noreferrer" className="w-16 h-16 rounded-full border border-gray-700 bg-card/80 backdrop-blur-sm flex items-center justify-center text-lightText hover:text-white hover:border-primary hover:bg-primary/20 hover:scale-110 transition-all shadow-[0_0_15px_rgba(0,0,0,0.5)] group">
              <FaInstagram size={30} className="group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
            </a>
            <div className="w-[1px] h-20 bg-gradient-to-t from-transparent to-primary/50 mt-2"></div>
          </motion.div>
        </div>

        {/* Left Side (Text Content) */}
        <div className="md:w-[50%] flex flex-col justify-center gap-6 text-center md:text-left z-10 lg:pl-20 w-full" data-aos="fade-right">
          
          <div className="space-y-1">
            <p className="text-xl md:text-2xl text-primary font-medium tracking-[0.2em] uppercase">Hello, I'm</p>
            
            {/* Massive Name Text */}
            <h1 className="text-6xl sm:text-8xl md:text-[7rem] lg:text-[8.5rem] xl:text-[9.5rem] font-bold font-sans uppercase leading-[0.85] tracking-tighter text-text mix-blend-lighten">
              Adarsh
              <br />
              <span className="text-gradient">Raj</span>
            </h1>
          </div>

          <div className="flex flex-col md:flex-row gap-6 items-center md:items-start mt-6">
            {/* A separator line like in the image */}
            <div className="hidden md:block w-16 h-1 mt-4 bg-gradient-to-r from-primary to-secondary rounded-full shadow-[0_0_10px_rgba(56,189,248,0.5)]"></div>
            
            <div className="flex-1">
              <div className="text-xl sm:text-2xl font-semibold text-lightText mb-4 h-8">
                <TypeAnimation
                  sequence={[
                    'Full Stack Developer',
                    2000,
                    'MERN Stack Developer',
                    2000,
                    'Java Programmer',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="text-secondary tracking-wide drop-shadow-[0_0_8px_rgba(139,92,246,0.4)]"
                />
              </div>

              <p className="text-lightText max-w-sm mx-auto md:mx-0 text-base md:text-lg leading-relaxed relative z-10">
                I build modern, responsive and user-friendly <strong className="text-white font-semibold">software</strong> today while experimenting with how machines learn for a smarter <strong className="text-white font-semibold">tomorrow</strong>.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-5 mt-8 justify-center md:justify-start">
            <Link to="projects" smooth duration={500} offset={-70} className="relative overflow-hidden cursor-pointer px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(56,189,248,0.4)] group">
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 h-full w-full bg-white/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 z-0"></div>
            </Link>
            <a href="/resume.pdf" download className="relative overflow-hidden cursor-pointer px-8 py-4 glass border border-primary text-primary rounded-full font-bold hover:text-white transition-all duration-300 group">
              <span className="relative z-10">My Resume</span>
              <div className="absolute inset-0 h-full w-full bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 z-0"></div>
            </a>
            <Link to="contact" smooth duration={500} offset={-70} className="relative overflow-hidden cursor-pointer px-8 py-4 glass border border-primary text-primary rounded-full font-bold hover:text-white transition-all duration-300 group">
              <span className="relative z-10">Contact</span>
              <div className="absolute inset-0 h-full w-full bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 z-0"></div>
            </Link>
          </div>
        </div>

        {/* Right Side (Moving Image) */}
        <div className="md:w-[40%] flex justify-center mt-16 md:mt-0 relative lg:ml-auto" data-aos="fade-left">
          <motion.div
            animate={{ y: [0, -25, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="relative z-10"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full blur-[60px] opacity-40 animate-pulse"></div>
            
            {/* Glowing Border Container */}
            <div className="relative rounded-full p-2 bg-gradient-to-br from-primary via-secondary to-primary shadow-[0_0_50px_rgba(56,189,248,0.4)]">
              <img
                src="/profile.png"
                alt="Adarsh Raj"
                className="rounded-full w-[280px] h-[280px] md:w-[350px] md:h-[350px] xl:w-[450px] xl:h-[450px] object-cover border-[6px] border-background shadow-[0_0_30px_rgba(56,189,248,0.3)] relative z-20"
              />
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default Hero;
