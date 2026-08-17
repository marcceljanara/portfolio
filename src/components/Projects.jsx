import { useState } from 'react';
import { ExternalLink, Folder, Github } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import ProjectDetail from './ProjectDetail';

// Projects Component
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="min-h-screen py-20 px-6 bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-100 mb-12 flex items-center">
          <span className="text-cyan-400 font-mono mr-2">03.</span>
          Some Things I've Built
          <div className="h-px bg-slate-700 flex-1 ml-4"></div>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-lg p-6 hover:transform hover:-translate-y-2 transition-all duration-300 flex flex-col cursor-pointer project-card"
              onClick={() => setSelectedProject(project)}
            >
              <div className="flex justify-between items-start mb-4">
                <Folder className="text-cyan-400" size={40} />
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.external}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
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

              {/* Click hint */}
              <div className="project-card-hint">
                Click to view details
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectDetail
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
