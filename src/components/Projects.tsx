import './Projects.css';
import './../lib/projects';
import { projects } from './../lib/projects';
import RepoSvg from '/repo.svg';
import StarSvg from '/star.svg';
import ForkSvg from '/fork.svg';
import React, { useEffect, useState } from "react";

export default function Projects() {
  const [stats, setStats] = useState<{ [key: string]: { stars: number; forks: number } }>({});

  useEffect(() => {
    projects.forEach((project) => {
      if (!project.repoFullName) return;

      fetch(`https://api.github.com/repos/${project.repoFullName}`)
        .then((res) => res.json())
        .then((data) => {
          setStats((prev) => ({
            ...prev,
            [project.repoFullName]: {
              stars: data.stargazers_count,
              forks: data.forks_count,
            },
          }));
        })
        .catch(() => {
          // handle errors if needed
        });
    });
  }, []);

  return (
    <div className="projects">
      <h1 className="section-header">Projects</h1>
      <div className="projects-grid">
        {projects.map((project, i) => {
          const projectStats = project.repoFullName ? stats[project.repoFullName] : null;
          return (
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
                <div className="project-stack-container">
                  <div className="project-meta">
                    {projectStats?.stars > 0 && (
                      <>
                        <img src={StarSvg} alt="stars" /> {projectStats.stars}
                        &nbsp;&nbsp;
                      </>
                    )}
                    {projectStats?.forks > 0 && (
                      <>
                        <img src={ForkSvg} alt="forks" /> {projectStats.forks}
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
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
