import { ExternalLink, Folder, Github } from 'lucide-react';

// Projects Component
const Projects = () => {
  const projects = [
    {
      title: 'Rover Drone API',
      description: 'Rover-Drone API is a backend system designed to power an IoT-based rover-drone rental and management platform. It supports subscription-based device rentals, real-time MQTT control, logistics integration, and automated reporting, making it suitable for smart agriculture applications such as oil palm plantation monitoring.',
      technologies: ['PostgreSQL', 'Express.js', 'Node.js', 'Redis', 'RabbitMQ', 'MQTT', 'Docker', 'Jest'],
      github: 'https://github.com/marcceljanara/rover-drone-api-v2',
      external: '#'
    },
    {
      title: 'Rover Drone Web App',
      description: 'Developed using React 18 with MUI and Bootstrap for responsive, modern UI. Implemented smooth animations with Framer Motion and real-time data visualization with ApexCharts. Integrated secure authentication using JWT, dynamic dashboards, and detailed user/admin interfaces for rental, payment, and device management.',
      technologies: ['React.js', 'Javascript', 'HTML', 'CSS'],
      github: 'https://github.com/marcceljanara/rover-drone-webapp-v2',
      external: '#'
    },
    {
      title: 'Rover Drone IoT',
      description: 'ESP32-based IoT system for rover and drone control, featuring real-time telemetry via MQTT. Designed for smart agriculture applications, it enables remote operation and monitoring of devices through a web app interface.',
      technologies: ['C', 'ESP32', 'Arduino', 'MQTT'],
      github: 'https://github.com/marcceljanara/rover-drone-IoT',
      external: '#'
    },
    {
      title: 'Healthcare Knowledge API',
      description: 'A comprehensive backend API for a healthcare knowledge platform, built with Node.js and Express. It features RESTful endpoints for managing articles, user authentication, and role-based access control, ensuring secure and efficient data handling.',
      technologies: ['Express.js', 'Node.js', 'PostgreSQL'],
      github: 'https://github.com/marcceljanara/Healthcare-Knowledge-API',
      external: '#'
    },
    {
      title: 'Microclimate Firmware',
      description: 'Firmware for ESP32-based microclimate monitoring devices, utilizing various sensors to collect environmental data. It supports real-time data transmission via MQTT and is designed for integration with IoT platforms for mangrove monitoring applications.',
      technologies: ['Raspberry Pi', 'ESP32', 'C', 'Arduino', 'MQTT', 'Python'],
      github: 'https://github.com/marcceljanara/Microclimate',
      external: '#'
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-6 bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-100 mb-12 flex items-center">
          <span className="text-cyan-400 font-mono mr-2">03.</span>
          Some Things I've Built
          <div className="h-px bg-slate-700 flex-1 ml-4"></div>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-slate-900 rounded-lg p-6 hover:transform hover:-translate-y-2 transition-all duration-300 flex flex-col"
            >
              <div className="flex justify-between items-start mb-4">
                <Folder className="text-cyan-400" size={40} />
                <div className="flex gap-3">
                  <a href={project.github} className="text-slate-400 hover:text-cyan-400 transition-colors">
                    <Github size={20} />
                  </a>
                  <a href={project.external} className="text-slate-400 hover:text-cyan-400 transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-slate-100 mb-3">
                {project.title}
              </h3>
              
              <p className="text-slate-400 text-sm mb-4 flex-1">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="text-slate-400 font-mono text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
