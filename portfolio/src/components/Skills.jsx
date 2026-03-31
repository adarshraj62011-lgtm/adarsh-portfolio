import React, { useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaJava, FaPython
} from 'react-icons/fa';
import {
  SiTailwindcss, SiExpress, SiMongodb, SiMysql, SiCplusplus
} from 'react-icons/si';

const AnimatedNumber = ({ value }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      onViewportEnter={() => {
        animate(count, value, { duration: 1.5, ease: "easeOut" });
      }}
      viewport={{ once: false, amount: 0.1 }}
    >
      {rounded}
    </motion.span>
  );
};

const Skills = () => {
  const skillsData = [
    {
      category: 'Frontend',
      mainIcon: <FaReact className="text-primary text-3xl" />,
      items: [
        { name: 'HTML5', icon: <FaHtml5 className="text-[#E34F26]" />, level: 90 },
        { name: 'CSS3', icon: <FaCss3Alt className="text-[#1572B6]" />, level: 85 },
        { name: 'JavaScript', icon: <FaJs className="text-[#F7DF1E]" />, level: 85 },
        { name: 'React', icon: <FaReact className="text-[#61DAFB]" />, level: 80 },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" />, level: 85 },
      ]
    },
    {
      category: 'Backend',
      mainIcon: <FaNodeJs className="text-secondary text-3xl" />,
      items: [
        { name: 'Node.js', icon: <FaNodeJs className="text-[#339933]" />, level: 75 },
        { name: 'Express.js', icon: <SiExpress className="text-text" />, level: 70 },
        { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" />, level: 75 },
        { name: 'MySQL', icon: <SiMysql className="text-[#4479A1]" />, level: 80 },
      ]
    },
    {
      category: 'Programming',
      mainIcon: <FaJava className="text-primary text-3xl" />,
      items: [
        { name: 'Java', icon: <FaJava className="text-[#007396]" />, level: 85 },
        { name: 'Python', icon: <FaPython className="text-[#3776AB]" />, level: 80 },
        { name: 'C / C++', icon: <SiCplusplus className="text-[#00599C]" />, level: 75 },
      ]
    }
  ];

  const spokenLanguages = [
    { name: 'Hindi', level: 100, proficiency: 'Native Speaker' },
    { name: 'Bhojpuri', level: 100, proficiency: 'Native Speaker' },
    { name: 'English', level: 80, proficiency: 'Professional Fluency' },
  ];

  return (
    <section id="skills" className="w-full py-24 flex flex-col justify-center items-center bg-cardAlt">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">

        <div data-aos="fade-up" className="text-center mb-16">
          <div className="animate-float flex flex-col items-center">
            <p className="text-sm font-bold tracking-[0.3em] text-primary uppercase mb-3">Expertise</p>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-text mb-4">
              Languages & <span className="italic text-gradient">My Skills</span>
            </h2>
            <div className="section-divider mx-auto" />
          </div>
          <p className="mt-6 text-lightText text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            A comprehensive overview of my technical expertise, including modern frontend frameworks, robust backend architectures, and core programming languages.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full items-start">

          {/* Left Side: Technical Skills */}
          <div className="lg:w-[65%] w-full flex flex-col">
            <h3 className="text-sm font-semibold text-text mb-6 uppercase tracking-[0.2em]" data-aos="fade-right">
              Technical Expertise
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pb-2">
              {skillsData.map((group, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={`${index * 100}`}
                  className={`bg-card border border-border p-8 relative overflow-hidden group hover:border-primary transition-all duration-300 hover:shadow-sm ${index === 2 ? 'sm:col-span-2' : ''}`}
                >
                  <div className="absolute top-0 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-500" />

                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-background border border-border flex items-center justify-center group-hover:border-primary transition-colors duration-300">
                      {group.mainIcon}
                    </div>
                    <h3 className="font-serif text-xl font-bold text-text">{group.category}</h3>
                  </div>

                  <div className={`flex flex-col gap-5 w-full ${index === 2 ? 'sm:grid sm:grid-cols-2 sm:gap-x-12 sm:gap-y-5' : ''}`}>
                    {group.items.map((skill, i) => (
                      <div key={i} className="w-full">
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center gap-2">
                            <span className="text-lg">{skill.icon}</span>
                            <span className="text-base text-lightText font-semibold">{skill.name}</span>
                          </div>
                          <span className="text-primary font-bold text-sm tracking-wider">
                            <AnimatedNumber value={skill.level} />%
                          </span>
                        </div>
                        {/* Progress Bar */}
                        <div className="w-full bg-background rounded-none h-[3px] border border-border overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="bg-gradient-to-r from-primary to-secondary h-full rounded-none"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Spoken Languages */}
          <div className="lg:w-[35%] w-full flex flex-col">
            <h3 className="text-sm font-semibold text-text mb-6 uppercase tracking-[0.2em]" data-aos="fade-left">
              Spoken Languages
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-5 pb-2">
              {spokenLanguages.map((lang, index) => (
                <div
                  key={index}
                  data-aos="fade-left"
                  data-aos-delay={`${index * 100}`}
                  className="bg-card border border-border p-8 flex flex-col items-center justify-center group hover:border-primary transition-all duration-300 hover:shadow-sm hover:-translate-y-1 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-500" />

                  {/* Circular Progress */}
                  <div className="relative w-24 h-24 flex items-center justify-center mb-5">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                      <path
                        className="text-border"
                        strokeWidth="2.5"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <motion.path
                        className="text-primary"
                        strokeWidth="2.5"
                        initial={{ strokeDasharray: "0, 100" }}
                        whileInView={{ strokeDasharray: `${lang.level}, 100` }}
                        viewport={{ once: false }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        strokeLinecap="butt"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center flex-col">
                      <span className="text-xl font-serif font-bold text-text group-hover:text-primary transition-colors">
                        <AnimatedNumber value={lang.level} />%
                      </span>
                    </div>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-text mb-1">{lang.name}</h3>
                  <p className="text-sm text-lightText uppercase tracking-wider font-semibold">{lang.proficiency}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Skills;
