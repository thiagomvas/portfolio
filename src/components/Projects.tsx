import './Projects.css';
import './../lib/projects';
import { projects } from './../lib/projects';
import RepoSvg from '/repo.svg';

export default function Projects() {
    return (
      <div className="projects">
        <h1 className="section-header">Projects</h1>
        <div className="projects-grid">
          {projects.map((project, i) => (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card-link"
              key={i}
            >
              <div className="project-card">
                <div className="project-header">
                  <img
                    src={project.logoUrl ?? RepoSvg}
                    alt={`${project.name} logo`}
                    className="project-logo"
                  />
                  <h3>{project.name}</h3>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-stack">
                  {project.stack.split(',').map((tech, idx) => (
                    <span key={idx} className="stack-item">{tech.trim()}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    );
}
