import React from "react";
import RepoSvg from '/repo.svg';
import StarSvg from '/star.svg';
import ForkSvg from '/fork.svg';
import type { Project } from './../lib/projects';
import "./Projects.css";

interface Stats {
  stars: number;
  forks: number;
}

interface ProjectCardProps {
  project: Project;
  stats?: Stats | null;
}

export default function ProjectCard({ project, stats }: ProjectCardProps) {
  return (
    <a
      href={`https://github.com/${project.repoFullName}`}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card-link"
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
        <div className="project-stack-container">
          <div className="project-meta">
            {stats && stats.stars > 0 && (
              <>
                <img src={StarSvg} alt="stars" /> {stats.stars}
                &nbsp;&nbsp;
              </>
            )}
            {stats && stats.forks > 0 && (
              <>
                <img src={ForkSvg} alt="forks" /> {stats.forks}
              </>
            )}
          </div>
          <div className="project-stack">
            {project.stack.split(",").map((tech, idx) => (
              <span key={idx} className="stack-item">
                {tech.trim()}
              </span>
            ))}
          </div>
        </div>

        { project.tryItOutUrl && (
            <a
              href={project.tryItOutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="try-it-out-btn"
            >
              Try It Out
            </a>
          )}
      </div>
    </a>
  );
}
