import { useEffect } from 'react';
import { X, Github, ExternalLink, Layers, Cpu, Image } from 'lucide-react';
import ImageGallery from './ImageGallery';

const ProjectDetail = ({ project, onClose }) => {
  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // ESC to close
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <div
      className="modal-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-container">
        {/* ── Header ── */}
        <div className="modal-header">
          <div className="modal-header-left">
            <span className="modal-tag">Project</span>
            <h2 className="modal-title">{project.title}</h2>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={22} />
          </button>
        </div>

        {/* ── Scrollable body ── */}
        <div className="modal-body">

          {/* Links */}
          <div className="modal-links">
            {project.github && project.github !== '#' && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-link-btn modal-link-github"
              >
                <Github size={16} />
                <span>GitHub</span>
              </a>
            )}
            {project.external && project.external !== '#' && (
              <a
                href={project.external}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-link-btn modal-link-external"
              >
                <ExternalLink size={16} />
                <span>Live Demo</span>
              </a>
            )}
          </div>

          {/* Tech Stack */}
          <div className="modal-section">
            <h3 className="modal-section-title">
              <Cpu size={16} className="modal-section-icon" />
              Tech Stack
            </h3>
            <div className="modal-tech-badges">
              {project.technologies.map((tech, i) => (
                <span key={i} className="modal-tech-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="modal-section">
            <h3 className="modal-section-title">
              <span className="modal-section-icon">📄</span>
              Overview
            </h3>
            <p className="modal-description">{project.longDescription}</p>
          </div>

          {/* Features */}
          {project.features && project.features.length > 0 && (
            <div className="modal-section">
              <h3 className="modal-section-title">
                <span className="modal-section-icon">✦</span>
                Key Features
              </h3>
              <ul className="modal-features-list">
                {project.features.map((feat, i) => (
                  <li key={i} className="modal-feature-item">
                    <span className="modal-feature-bullet" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Architecture */}
          {project.architecture && (
            <div className="modal-section">
              <h3 className="modal-section-title">
                <Layers size={16} className="modal-section-icon" />
                Architecture
              </h3>
              <p className="modal-arch-desc">{project.architecture.description}</p>
              {project.architecture.diagram && project.architecture.diagram.length > 0 && (
                <div className="modal-arch-diagram">
                  {project.architecture.diagram.map((item, i) => (
                    <div key={i} className="modal-arch-row">
                      <div className="modal-arch-layer-wrap">
                        <span className="modal-arch-layer">{item.layer}</span>
                      </div>
                      <div className="modal-arch-arrow">↓</div>
                      <p className="modal-arch-detail">{item.detail}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Screenshots */}
          {project.screenshots && project.screenshots.length > 0 && (
            <div className="modal-section">
              <h3 className="modal-section-title">
                <Image size={16} className="modal-section-icon" />
                Screenshots
                <span className="modal-screenshot-count">
                  {project.screenshots.length} images
                </span>
              </h3>
              <ImageGallery screenshots={project.screenshots} />
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
