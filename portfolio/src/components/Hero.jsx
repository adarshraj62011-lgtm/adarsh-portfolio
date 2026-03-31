import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Hero = () => {
  return (
    <div id="home" className="relative min-h-screen w-full flex items-center justify-center pt-28 pb-16 bg-background overflow-hidden">

      {/* Subtle background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-secondary/5 blur-[100px]" />
      </div>

      {/* Decorative top text line like the reference */}
      <div className="absolute top-24 left-0 right-0 flex justify-center">
        <p className="text-sm font-semibold tracking-[0.3em] text-lightText uppercase">
          Full Stack Developer &amp; Creative Coder
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full flex flex-col md:flex-row items-center justify-between z-10">

        {/* Social Icons Sidebar (visible on desktop) */}
        <div className="hidden lg:flex fixed left-12 top-1/2 -translate-y-1/2 z-50">
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="flex flex-col items-center gap-5"
          >
            <div className="w-[1px] h-16 bg-gradient-to-b from-transparent to-border mb-2" />
            <a href="https://github.com/adarshraj62011-lgtm" target="_blank" rel="noreferrer"
              className="w-12 h-12 flex items-center justify-center text-lightText hover:text-primary transition-colors duration-300">
              <FaGithub size={28} />
            </a>
            <a href="https://www.linkedin.com/in/adarsh-raj-876a63308" target="_blank" rel="noreferrer"
              className="w-12 h-12 flex items-center justify-center text-lightText hover:text-primary transition-colors duration-300">
              <FaLinkedin size={28} />
            </a>
            <a href="#" target="_blank" rel="noreferrer"
              className="w-12 h-12 flex items-center justify-center text-lightText hover:text-primary transition-colors duration-300">
              <FaTwitter size={28} />
            </a>
            <a href="https://www.instagram.com/adarsh__singh_rajput/" target="_blank" rel="noreferrer"
              className="w-12 h-12 flex items-center justify-center text-lightText hover:text-primary transition-colors duration-300">
              <FaInstagram size={28} />
            </a>
            <div className="w-[1px] h-16 bg-gradient-to-t from-transparent to-border mt-2" />
          </motion.div>
        </div>

        {/* Left Side (Text Content) */}
        <div className="md:w-[55%] flex flex-col justify-center gap-8 text-center md:text-left z-10 lg:pl-16 w-full" data-aos="fade-right">

          <div className="space-y-2">
            <p className="text-sm font-bold tracking-[0.3em] text-primary uppercase mb-4">Hello, I'm</p>

            {/* Massive Name Text — elegant serif */}
            <h1 className="font-serif font-bold leading-[0.85] tracking-tight text-text"
              style={{ fontSize: 'clamp(5rem, 15vw, 12rem)' }}>
              Adarsh
              <br />
              <span className="italic text-gradient">Raj</span>
            </h1>
          </div>

          <div className="flex flex-col gap-4">
            {/* Separator line */}
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="w-12 h-[1px] bg-primary" />
              <div className="text-lg font-semibold text-text h-7">
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
                  className="text-secondary tracking-wide font-bold"
                />
              </div>
            </div>

            <p className="text-lightText max-w-xl mx-auto md:mx-0 text-xl leading-relaxed font-medium">
              I build modern, responsive and user-friendly <strong className="text-text font-semibold">software</strong> today
              while experimenting with how machines learn for a smarter <strong className="text-text font-semibold">tomorrow</strong>.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mt-4 justify-center md:justify-start">
            <Link to="projects" smooth duration={500} offset={-70}
              className="cursor-pointer px-8 py-3 bg-text text-background font-medium text-sm tracking-wider uppercase hover:bg-primary hover:text-white transition-all duration-300">
              View Projects
            </Link>
            <a href="/resume.pdf" download
              className="cursor-pointer px-8 py-3 border border-text text-text font-medium text-sm tracking-wider uppercase hover:bg-text hover:text-background transition-all duration-300">
              My Resume
            </a>
            <Link to="contact" smooth duration={500} offset={-70}
              className="cursor-pointer px-8 py-3 border border-primary text-primary font-medium text-sm tracking-wider uppercase hover:bg-primary hover:text-white transition-all duration-300">
              Contact
            </Link>
          </div>
        </div>

        {/* Right Side (Profile Image) */}
        <div className="md:w-[40%] flex justify-center mt-16 md:mt-0 relative lg:ml-auto" data-aos="fade-left">
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="relative z-10"
          >
            {/* Decorative frame */}
            <div className="absolute -inset-3 border border-primary/30" />
            <div className="absolute -inset-6 border border-border/50" />

            {/* Background warm shape */}
            <div className="absolute inset-0 bg-primary/8 rounded-sm translate-x-4 translate-y-4" />

            <img
              src="/profile.png"
              alt="Adarsh Raj"
              className="relative z-10 w-[320px] h-[380px] md:w-[400px] md:h-[480px] xl:w-[500px] xl:h-[600px] object-cover object-top grayscale-[15%] sepia-[10%]"
            />

            {/* Corner accent */}
            <div className="absolute -bottom-2 -right-2 w-12 h-12 border-b-2 border-r-2 border-primary" />
            <div className="absolute -top-2 -left-2 w-12 h-12 border-t-2 border-l-2 border-primary" />
          </motion.div>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs tracking-[0.3em] text-lightText font-semibold uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-[1px] h-10 bg-gradient-to-b from-primary to-transparent"
        />
      </div>
    </div>
  );
};

export default Hero;
