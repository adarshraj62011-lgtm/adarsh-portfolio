import React from 'react';
import { FaGraduationCap, FaBriefcase, FaCode, FaLaptopCode } from 'react-icons/fa';
import { Link } from 'react-scroll';

const About = () => {
  const cards = [
    {
      id: 1,
      icon: <FaGraduationCap size={32} className="text-primary group-hover:text-white transition-colors duration-500 drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]" />,
      title: 'Education',
      desc: 'B.Tech in CS, Parul University',
    },
    {
      id: 2,
      icon: <FaBriefcase size={32} className="text-secondary group-hover:text-white transition-colors duration-500 drop-shadow-[0_0_8px_rgba(139,92,246,0.8)]" />,
      title: 'Experience',
      desc: 'Internships & Projects',
    },
    {
      id: 3,
      icon: <FaLaptopCode size={32} className="text-primary group-hover:text-white transition-colors duration-500 drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]" />,
      title: 'Freelancing',
      desc: 'Building Web Apps',
    },
    {
      id: 4,
      icon: <FaCode size={32} className="text-secondary group-hover:text-white transition-colors duration-500 drop-shadow-[0_0_8px_rgba(139,92,246,0.8)]" />,
      title: 'Coding',
      desc: 'LeetCode & HackerRank',
    },
  ];

  return (
    <section id="about" className="w-full py-20 flex flex-col justify-center items-center relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">

        {/* Section Header */}
        <div data-aos="fade-up" className="flex flex-col items-center mb-16">
          <div className="flex flex-col items-center animate-float">
            <p className="text-primary font-medium tracking-[0.2em] uppercase mb-2">Discover</p>
            <h2 className="text-5xl sm:text-6xl font-bold font-sans text-center mb-4 text-text">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full shadow-[0_0_15px_rgba(56,189,248,0.6)]"></div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch w-full">

          {/* Left Content Card */}
          <div className="lg:w-[55%] flex flex-col items-start glass p-8 sm:p-10 lg:p-12 rounded-[2.5rem] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden bg-gradient-to-br from-white/5 to-transparent group" data-aos="fade-right">
            {/* Background Glows */}
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-primary/20 blur-[90px] rounded-full group-hover:bg-primary/30 transition-colors duration-700"></div>
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-secondary/20 blur-[90px] rounded-full group-hover:bg-secondary/30 transition-colors duration-700"></div>

            <h3 className="text-4xl sm:text-5rem font-bold font-sans mb-4 leading-tight relative z-10 text-white">
              Transforming Ideas into <br />
              <span className="italic text-gradient tracking-wide">Digital Reality</span>
            </h3>

            <div className="w-16 h-1.5 bg-primary mb-8 rounded-full relative z-10 shadow-[0_0_10px_rgba(56,189,248,0.8)]"></div>

            <p className="text-base sm:text-lg text-lightText/90 leading-relaxed mb-6 relative z-10">
              I'm <strong className="text-white font-semibold">Adarsh Raj</strong>, a passionate software developer specializing in <strong className="text-white font-semibold">MERN Stack, Java, Python</strong> and modern web technologies. I enjoy architecting robust websites, solving complex coding problems, and creating highly intuitive user-friendly applications.
            </p>

            <p className="text-base sm:text-lg text-lightText/90 leading-relaxed mb-8 relative z-10">
              My goal is to craft digital experiences that not only look visually stunning but also perform seamlessly across all platforms. I believe in writing <strong className="text-white font-semibold flex-inline">clean, maintainable code</strong> that scales and stands the test of time.
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-8 sm:gap-12 w-full border-t border-white/10 pt-8 mt-2 mb-10 relative z-10">
              <div className="flex flex-col">
                <h4 className="text-4xl sm:text-5xl font-bold text-white mb-1 drop-shadow-md">10+</h4>
                <p className="text-xs sm:text-sm text-primary uppercase tracking-widest font-semibold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary/80 animate-pulse"></span> Projects
                </p>
              </div>
              <div className="hidden sm:block w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
              <div className="flex flex-col">
                <h4 className="text-4xl sm:text-5xl font-bold text-white mb-1 drop-shadow-md">300+</h4>
                <p className="text-xs sm:text-sm text-secondary uppercase tracking-widest font-semibold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-secondary/80 animate-pulse"></span> DSA Solved
                </p>
              </div>
              <div className="hidden sm:block w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
              <div className="flex flex-col">
                <h4 className="text-4xl sm:text-5xl font-bold text-white mb-1 drop-shadow-md">1+</h4>
                <p className="text-xs sm:text-sm text-primary uppercase tracking-widest font-semibold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary/80 animate-pulse"></span> Year Exp.
                </p>
              </div>
            </div>

            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              className="relative overflow-hidden z-10 px-8 py-4 bg-card/50 backdrop-blur-md border border-white/20 hover:border-primary text-white font-bold tracking-[0.1em] flex items-center gap-3 transition-all cursor-pointer rounded-full hover:shadow-[0_0_30px_rgba(56,189,248,0.4)] group/btn w-fit"
            >
              <span className="relative z-10 flex items-center gap-3">
                LET'S CONNECT <span className="group-hover/btn:translate-x-3 transition-transform duration-300">→</span>
              </span>
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-primary/20 to-secondary/20 scale-x-0 group-hover/btn:scale-x-100 origin-left transition-transform duration-500 z-0"></div>
            </Link>
          </div>

          {/* Right Side Cards Grid */}
          <div className="lg:w-[45%] grid grid-cols-1 sm:grid-cols-2 gap-6 h-full" data-aos="fade-left">
            {cards.map(({ id, icon, title, desc }) => (
              <div
                key={id}
                className="glass p-8 rounded-[2rem] flex flex-col items-center text-center hover:-translate-y-4 transition-all duration-500 hover:shadow-[0_15px_40px_rgba(56,189,248,0.25)] border border-white/5 bg-gradient-to-br from-white/5 to-transparent relative overflow-hidden group/card h-full justify-center"
              >
                {/* Card Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-transparent to-secondary/10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>

                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-background/60 flex items-center justify-center mb-6 shadow-inner border border-white/10 group-hover/card:bg-gradient-to-br group-hover/card:from-primary/20 group-hover/card:to-secondary/20 transition-colors duration-500 group-hover/card:shadow-[0_0_25px_rgba(56,189,248,0.5)] relative z-10 backdrop-blur-sm">
                  {icon}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 relative z-10 group-hover/card:text-transparent group-hover/card:bg-clip-text group-hover/card:bg-gradient-to-r group-hover/card:from-primary group-hover/card:to-secondary transition-all duration-300">{title}</h3>
                <p className="text-sm sm:text-base text-lightText/80 relative z-10 leading-relaxed max-w-[150px]">{desc}</p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
