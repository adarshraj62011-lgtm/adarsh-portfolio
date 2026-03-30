import React from 'react';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaJava, FaPython 
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiExpress, SiMongodb, SiMysql, SiCplusplus 
} from 'react-icons/si';

const Skills = () => {
  const skillsData = [
    {
      category: 'Frontend',
      mainIcon: <FaReact className="text-primary text-4xl" />,
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
      mainIcon: <FaNodeJs className="text-secondary text-4xl" />,
      items: [
        { name: 'Node.js', icon: <FaNodeJs className="text-[#339933]" />, level: 75 },
        { name: 'Express.js', icon: <SiExpress className="text-white" />, level: 70 },
        { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" />, level: 75 },
        { name: 'MySQL', icon: <SiMysql className="text-[#4479A1]" />, level: 80 },
      ]
    },
    {
      category: 'Programming',
      mainIcon: <FaJava className="text-blue-400 text-4xl" />,
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
    <section id="skills" className="w-full py-20 flex flex-col justify-center items-center relative z-10">
      <div className="max-w-7xl mx-auto px-4 w-full">
        
        <div data-aos="fade-up" className="text-center mb-16">
          <div className="animate-float">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 font-sans text-white tracking-wide">
              Languages & <span className="text-gradient">My Skills</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </div>
          <p className="mt-6 text-lightText text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise, including modern frontend frameworks, robust backend architectures, and core programming languages.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full items-start">
          
          {/* Left Side: Technical Skills */}
          <div className="lg:w-[65%] w-full flex flex-col">
            <h3 className="text-2xl font-bold text-white mb-6" data-aos="fade-right">Technical Expertise</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-2">
              {skillsData.map((group, index) => (
                <div 
                  key={index} 
                  data-aos="fade-up" 
                  data-aos-delay={`${index * 100}`}
                  className={`glass p-8 rounded-3xl border border-white/5 hover:border-primary/30 transition-all duration-300 relative overflow-hidden group shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_40px_rgba(56,189,248,0.2)] ${index === 2 ? 'sm:col-span-2' : ''}`}
                >
                  {/* Decorative background glow */}
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-500"></div>

                  <div className="flex flex-col items-center text-center mb-8 relative z-10">
                    <div className="p-4 bg-card rounded-2xl border border-white/5 object-cover shadow-xl mb-4 group-hover:-translate-y-2 transition-transform duration-300 flex items-center justify-center w-20 h-20 group-hover:bg-gradient-to-br group-hover:from-primary/20 group-hover:to-secondary/20">
                      {group.mainIcon}
                    </div>
                    <h3 className="text-2xl font-bold text-white tracking-wide group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all duration-300">{group.category}</h3>
                  </div>
                  
                  <div className={`flex flex-col gap-6 relative z-10 w-full ${index === 2 ? 'sm:grid sm:grid-cols-2 sm:gap-x-12 sm:gap-y-6' : ''}`}>
                    {group.items.map((skill, i) => (
                      <div key={i} className="w-full relative group/skill cursor-default">
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center gap-2">
                            <span className="text-xl group-hover/skill:scale-110 transition-transform">{skill.icon}</span>
                            <span className="text-lightText font-medium group-hover/skill:text-white transition-colors">{skill.name}</span>
                          </div>
                          <span className="text-primary font-bold text-sm">{skill.level}%</span>
                        </div>
                        {/* Progress Bar Track */}
                        <div className="w-full bg-background/80 rounded-full h-2 border border-white/5 overflow-visible">
                          {/* Progress Bar Gradient */}
                          <div 
                            className="bg-gradient-to-r from-primary to-secondary h-full rounded-full relative group-hover/skill:shadow-[0_0_15px_rgba(56,189,248,0.5)] transition-shadow duration-300"
                            style={{ width: `${skill.level}%` }}
                          >
                            {/* Glowing End Dot */}
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_rgba(56,189,248,1)]"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Spoken Languages Sidebar */}
          <div className="lg:w-[35%] w-full flex flex-col">
            <h3 className="text-2xl font-bold text-white mb-6" data-aos="fade-left">Spoken Languages</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6 pb-2">
              {spokenLanguages.map((lang, index) => (
                <div 
                  key={index}
                  data-aos="fade-left"
                  data-aos-delay={`${index * 100}`}
                  className="glass p-8 rounded-3xl border border-white/5 flex flex-col items-center justify-center group hover:border-primary/50 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-primary/10 hover:-translate-y-2 h-full"
                >
                  {/* Circular Progress SVG */}
                  <div className="relative w-28 h-28 flex items-center justify-center mb-6">
                    {/* Background glow for circle */}
                    <div className="absolute inset-0 bg-primary/0 rounded-full blur-xl group-hover:bg-primary/20 transition-colors duration-500"></div>
                    <svg className="w-full h-full -rotate-90 drop-shadow-[0_0_10px_rgba(56,189,248,0.2)] relative z-10" viewBox="0 0 36 36">
                      <path
                        className="text-white/10"
                        strokeWidth="3.5"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="text-primary transition-all duration-1000 ease-out"
                        strokeWidth="3.5"
                        strokeDasharray={`${lang.level}, 100`}
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center flex-col z-20">
                      <span className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{lang.level}%</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{lang.name}</h3>
                  <p className="text-xs font-medium text-lightText">{lang.proficiency}</p>
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
