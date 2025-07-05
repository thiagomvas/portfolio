import './Projects.css';
import './../lib/projects';
import { projects } from './../lib/projects';
import { useEffect, useState } from "react";
import ProjectCard from './ProjectCard';

export default function Projects() {
  const initialStats = projects.reduce((acc, proj) => {
    acc[proj.repoFullName ?? proj.name] = {
      stars: proj.stars ?? 0,
      forks: proj.forks ?? 0,
    };
    return acc;
  }, {} as Record<string, { stars: number; forks: number }>);

  const [stats, setStats] = useState(initialStats);

  useEffect(() => {
    projects.forEach((project) => {
      if (!project.repoFullName) return;

      fetch(`https://api.github.com/repos/${project.repoFullName}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.stargazers_count !== undefined && data.forks_count !== undefined) {
            setStats((prev) => ({
              ...prev,
              [project.repoFullName]: {
                stars: data.stargazers_count,
                forks: data.forks_count,
              },
            }));
          }
        })
        .catch(() => {});
    });
  }, []);

  return (
    <section className="projects" id="projects">
      <h1 className="section-header">Projects</h1>
      <div className="projects-grid">
        {projects.map((project, i) => {
          const projectStats = project.repoFullName ? stats[project.repoFullName] : null;
          return (
            <ProjectCard
              key={i}
              project={project}
              stats={projectStats}
            />
          );
        })}
      </div>
    </section>
  );
}
