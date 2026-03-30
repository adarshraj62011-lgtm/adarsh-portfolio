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
      desc: 'Personal portfolio with dark theme and glassmorphism.',
      image: 'https://images.unsplash.com/photo-1456324504439-367ceee240ca?q=80&w=600&auto=format&fit=crop',
      tech: ['React', 'Framer Motion', 'Tailwind'],
      github: '#',
      live: '#',
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
    <section id="projects" className="w-full py-20 bg-background/50">
      <div className="max-w-7xl mx-auto px-4">
        
        <div data-aos="fade-up" className="text-center mb-16">
          <div className="animate-float">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 font-sans">
              My <span className="text-gradient">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(({ id, name, desc, image, tech, github, live }) => (
            <div 
              key={id} 
              data-aos="fade-up"
              className="glass rounded-2xl overflow-hidden group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-2 border border-white/5"
            >
              <div className="relative overflow-hidden h-48 w-full">
                <img 
                  src={image} 
                  alt={name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
                <p className="text-lightText text-sm mb-4 h-10">{desc}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {tech.map((t, index) => (
                    <span key={index} className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a href={github} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 py-2 glass border border-white/10 hover:bg-white/5 rounded-lg text-sm font-medium transition-colors">
                    <FaGithub /> GitHub
                  </a>
                  <a href={live} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg text-sm font-medium hover:scale-105 transition-transform">
                    <FaExternalLinkAlt /> Demo
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
