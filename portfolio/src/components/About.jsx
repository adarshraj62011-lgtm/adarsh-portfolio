import React from 'react';
import { FaGraduationCap, FaBriefcase, FaCode, FaLaptopCode } from 'react-icons/fa';
import { Link } from 'react-scroll';

const About = () => {
  const cards = [
    {
      id: 1,
      icon: <FaGraduationCap size={28} className="text-primary" />,
      title: 'Education',
      desc: 'B.Tech in CS, Parul University',
    },
    {
      id: 2,
      icon: <FaBriefcase size={28} className="text-secondary" />,
      title: 'Experience',
      desc: 'Internships & Projects',
    },
    {
      id: 3,
      icon: <FaLaptopCode size={28} className="text-primary" />,
      title: 'Freelancing',
      desc: 'Building Web Apps',
    },
    {
      id: 4,
      icon: <FaCode size={28} className="text-secondary" />,
      title: 'Coding',
      desc: 'LeetCode & HackerRank',
    },
  ];

  return (
    <section id="about" className="w-full py-24 flex flex-col justify-center items-center relative bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col items-center w-full">

        {/* Section Header */}
        <div data-aos="fade-up" className="w-full mb-16">
          <div className="animate-float flex flex-col items-center">
            <p className="text-sm font-bold tracking-[0.3em] text-primary uppercase mb-3">Discover</p>
            <h2 className="font-serif text-5xl sm:text-6xl font-bold text-center text-text mb-4">
              About <span className="italic text-gradient">Me</span>
            </h2>
            <div className="section-divider" />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch w-full">

          {/* Left Content */}
          <div className="lg:w-[55%] flex flex-col items-start bg-card border border-border p-8 sm:p-12 relative" data-aos="fade-right">
            {/* Top accent line */}
            <div className="absolute top-0 left-0 w-16 h-[3px] bg-primary" />

            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-text mb-4 leading-tight">
              Transforming Ideas into <br />
              <span className="italic text-gradient">Digital Reality</span>
            </h3>

            <div className="section-divider mb-8" />

            <p className="text-lg text-lightText leading-relaxed mb-6 font-medium">
              I'm <strong className="text-text font-semibold">Adarsh Raj</strong>, a passionate software developer specializing in{' '}
              <strong className="text-text font-semibold">MERN Stack, Java, Python</strong> and modern web technologies. I enjoy
              architecting robust websites, solving complex coding problems, and creating highly intuitive user-friendly applications.
            </p>

            <p className="text-lg text-lightText leading-relaxed mb-10 font-medium">
              My goal is to craft digital experiences that not only look visually stunning but also perform seamlessly across all platforms.
              I believe in writing <strong className="text-text font-semibold">clean, maintainable code</strong> that scales and stands the test of time.
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-10 w-full border-t border-border pt-8 mb-10">
              <div className="flex flex-col">
                <h4 className="text-4xl font-serif font-bold text-text mb-1">10+</h4>
                <p className="text-xs text-primary uppercase tracking-widest font-semibold">Projects</p>
              </div>
              <div className="hidden sm:block w-[1px] bg-border" />
              <div className="flex flex-col">
                <h4 className="text-4xl font-serif font-bold text-text mb-1">300+</h4>
                <p className="text-xs text-secondary uppercase tracking-widest font-semibold">DSA Solved</p>
              </div>
              <div className="hidden sm:block w-[1px] bg-border" />
              <div className="flex flex-col">
                <h4 className="text-4xl font-serif font-bold text-text mb-1">1+</h4>
                <p className="text-xs text-primary uppercase tracking-widest font-semibold">Year Exp.</p>
              </div>
            </div>

            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              className="px-8 py-3 border border-text text-text font-medium text-sm tracking-[0.15em] uppercase hover:bg-text hover:text-background transition-all duration-300 cursor-pointer flex items-center gap-3 w-fit"
            >
              LET'S CONNECT <span>→</span>
            </Link>
          </div>

          {/* Right Side Cards */}
          <div className="lg:w-[45%] grid grid-cols-1 sm:grid-cols-2 gap-5 h-full" data-aos="fade-left">
            {cards.map(({ id, icon, title, desc }) => (
              <div
                key={id}
                className="bg-card border border-border p-8 flex flex-col items-center text-center hover:-translate-y-2 transition-all duration-400 hover:border-primary hover:shadow-md group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-500" />

                <div className="w-16 h-16 bg-background border border-border flex items-center justify-center mb-5 group-hover:border-primary transition-colors duration-300">
                  {icon}
                </div>

                <h3 className="font-serif text-xl font-bold text-text mb-2">{title}</h3>
                <p className="text-base text-lightText leading-relaxed font-medium">{desc}</p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
