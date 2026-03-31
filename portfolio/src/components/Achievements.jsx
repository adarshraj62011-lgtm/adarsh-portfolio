import React from 'react';
import { FaTrophy, FaCertificate, FaMedal, FaStar } from 'react-icons/fa';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      icon: <FaTrophy size={26} className="text-primary" />,
      title: 'LeetCode Problem Solver',
      desc: 'Solved 300+ algorithm and data structure problems.',
      link: 'https://leetcode.com/u/adarsh2616/',
      label: 'LeetCode'
    },
    {
      id: 2,
      icon: <FaMedal size={26} className="text-secondary" />,
      title: 'HackerRank 3 Star',
      desc: 'Achieved 3 stars in Java and Python problem solving.',
      link: 'https://www.hackerrank.com/profile/adarshraj62011',
      label: 'HackerRank'
    },
    {
      id: 3,
      icon: <FaCertificate size={26} className="text-primary" />,
      title: 'Full Stack Certificate',
      desc: 'Completed comprehensive MERN stack bootcamp training.',
      link: '#',
      label: 'Certification'
    },
    {
      id: 4,
      icon: <FaStar size={26} className="text-secondary" />,
      title: 'CodeChef 3 Star',
      desc: 'Achieved 3-star rating in competitive programming.',
      link: 'https://www.codechef.com/users/adarsh_raj01',
      label: 'CodeChef'
    }
  ];

  return (
    <section id="achievements" className="w-full py-24 relative bg-cardAlt">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        <div data-aos="fade-up" className="text-center mb-16">
          <div className="animate-float flex flex-col items-center">
            <p className="text-sm font-bold tracking-[0.3em] text-primary uppercase mb-3">Recognition</p>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-text mb-4">
              My <span className="italic text-gradient">Achievements</span>
            </h2>
            <div className="section-divider mx-auto" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {achievements.map(({ id, icon, title, desc, link, label }) => (
            <a
              key={id}
              href={link}
              target={link !== '#' ? "_blank" : "_self"}
              rel="noreferrer"
              data-aos="fade-up"
              data-aos-delay={`${(id - 1) * 80}`}
              className="bg-card border border-border p-8 flex flex-col items-center text-center hover:-translate-y-2 hover:border-primary hover:shadow-sm transition-all duration-300 cursor-pointer group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-500" />

              <p className="text-xs tracking-[0.2em] text-primary uppercase mb-5 font-bold">{label}</p>

              <div className="w-14 h-14 bg-background border border-border flex items-center justify-center mb-5 group-hover:border-primary transition-colors duration-300">
                {icon}
              </div>

              <h3 className="font-serif text-lg font-bold text-text mb-2">{title}</h3>
              <p className="text-base text-lightText leading-relaxed font-medium">{desc}</p>

              <div className="mt-5 flex items-center gap-2 text-sm text-primary font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View Profile →
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Achievements;
