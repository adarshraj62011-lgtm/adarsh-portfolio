import React from 'react';
import { FaTrophy, FaCertificate, FaMedal, FaStar } from 'react-icons/fa';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      icon: <FaTrophy size={30} className="text-yellow-400" />,
      title: 'LeetCode Problem Solver',
      desc: 'Solved 300+ algorithm and data structure problems.',
      link: 'https://leetcode.com/u/adarsh2616/'
    },
    {
      id: 2,
      icon: <FaMedal size={30} className="text-secondary" />,
      title: 'HackerRank 3 Star',
      desc: 'Achieved 3 stars in Java and Python problem solving.',
      link: 'https://www.hackerrank.com/profile/adarshraj62011'
    },
    {
      id: 3,
      icon: <FaCertificate size={30} className="text-primary" />,
      title: 'Full Stack Training Certificate',
      desc: 'Completed comprehensive MERN stack bootcamp.',
      link: '#'
    },
    {
      id: 4,
      icon: <FaStar size={30} className="text-blue-400" />,
      title: 'CodeChef 3 Star',
      desc: 'Achieved 3-star rating in competitive programming.',
      link: 'https://www.codechef.com/users/adarsh_raj01'
    }
  ];

  return (
    <section id="achievements" className="w-full py-20 relative">
      <div className="max-w-7xl mx-auto px-4">

        <div data-aos="fade-up" className="text-center mb-16">
          <div className="animate-float">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 font-sans">
              My <span className="text-gradient">Achievements</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full relative z-10"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map(({ id, icon, title, desc, link }) => (
            <a
              key={id}
              href={link}
              target={link !== '#' ? "_blank" : "_self"}
              rel="noreferrer"
              data-aos="zoom-in"
              className="glass p-6 rounded-2xl flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300 outline outline-1 outline-white/5 hover:outline-primary/50 cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full bg-card flex items-center justify-center mb-4 shadow-lg">
                {icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
              <p className="text-sm text-lightText">{desc}</p>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};



export default Achievements;
