import { ExternalLink, Folder, Github } from 'lucide-react';

// Projects Component
const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with user authentication, product management, shopping cart, and payment integration. Built with modern web technologies for optimal performance.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
      github: '#',
      external: '#'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Designed for modern teams.',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'WebSocket'],
      github: '#',
      external: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'An interactive weather dashboard that displays current weather, forecasts, and historical data using various weather APIs. Features beautiful visualizations.',
      technologies: ['React', 'D3.js', 'Weather API', 'Tailwind', 'Chart.js'],
      github: '#',
      external: '#'
    },
    {
      title: 'Portfolio CMS',
      description: 'A headless CMS for managing portfolio content with a clean admin interface. Built to help creatives showcase their work effortlessly.',
      technologies: ['Next.js', 'Sanity', 'GraphQL', 'Tailwind CSS'],
      github: '#',
      external: '#'
    },
    {
      title: 'AI Chat Application',
      description: 'A real-time chat application with AI-powered responses and natural language processing. Features include message history and user authentication.',
      technologies: ['React', 'Express', 'OpenAI API', 'Socket.io', 'MongoDB'],
      github: '#',
      external: '#'
    },
    {
      title: 'Music Player App',
      description: 'A Spotify-inspired music player with playlist management, audio visualization, and integration with music streaming APIs.',
      technologies: ['React', 'Spotify API', 'Web Audio API', 'Redux'],
      github: '#',
      external: '#'
    }
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
