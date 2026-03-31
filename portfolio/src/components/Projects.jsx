import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: 'Calculator App',
      desc: 'A premium calculator app functioning as both GUI desktop and CLI tool.',
      image: 'https://images.unsplash.com/photo-1587145820266-a5951ee6f620?q=80&w=600&auto=format&fit=crop',
      tech: ['React', 'Tailwind CSS'],
      github: 'https://github.com/adarshraj62011-lgtm/calculator-app',
      live: '#',
    },
    {
      id: 2,
      name: 'To-Do List App',
      desc: 'MERN stack task management application with mobile responsiveness.',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=600&auto=format&fit=crop',
      tech: ['MongoDB', 'Express', 'React', 'Node.js'],
      github: 'https://github.com/adarshraj62011-lgtm/todo-app',
      live: '#',
    },
    {
      id: 3,
      name: 'Weather App',
      desc: 'Real-time weather data forecasting with modern UI.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=600&auto=format&fit=crop',
      tech: ['React', 'API', 'Tailwind CSS'],
      github: '#',
      live: '#',
    },
    {
      id: 4,
      name: 'Portfolio Website',
      desc: 'Personal portfolio with elegant editorial design.',
      image: '/portfolio-preview.png',
      tech: ['React', 'Framer Motion', 'Tailwind'],
      github: 'https://github.com/adarshraj62011-lgtm/adarsh-portfolio',
      live: 'https://adarsh-portfolio-alpha.vercel.app/',
    },
    {
      id: 5,
      name: 'MERN Login Auth',
      desc: 'Secure authentication system with JWT and Bcrypt.',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=600&auto=format&fit=crop',
      tech: ['MongoDB', 'Express', 'React', 'Node.js'],
      github: '#',
      live: '#',
    },
    {
      id: 6,
      name: 'Chat Application',
      desc: 'Real-time chat functionality using Socket.io.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=600&auto=format&fit=crop',
      tech: ['React', 'Socket.io', 'Node.js'],
      github: '#',
      live: '#',
    }
  ];

  return (
    <section id="projects" className="w-full py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        <div data-aos="fade-up" className="text-center mb-16">
          <div className="animate-float flex flex-col items-center">
            <p className="text-sm font-bold tracking-[0.3em] text-primary uppercase mb-3">Portfolio</p>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-text mb-4">
              My <span className="italic text-gradient">Projects</span>
            </h2>
            <div className="section-divider mx-auto" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(({ id, name, desc, image, tech, github, live }) => (
            <div
              key={id}
              data-aos="fade-up"
              className="bg-card border border-border overflow-hidden group hover:shadow-md hover:border-primary transition-all duration-400 relative"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-500 z-10" />

              <div className="relative overflow-hidden h-52 w-full">
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600 grayscale-[20%] group-hover:grayscale-0"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent opacity-70" />
              </div>

              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-text mb-2">{name}</h3>
                <p className="text-lightText text-base mb-4 leading-relaxed font-medium">{desc}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {tech.map((t, index) => (
                    <span key={index} className="px-3 py-1 text-sm font-semibold bg-background text-text border border-border">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a href={github} target="_blank" rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2 border border-border text-text text-xs font-medium uppercase tracking-wider hover:border-text transition-colors">
                    <FaGithub size={13} /> GitHub
                  </a>
                  <a href={live} target="_blank" rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2 bg-text text-background text-xs font-medium uppercase tracking-wider hover:bg-primary transition-colors">
                    <FaExternalLinkAlt size={11} /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
