import { motion } from 'framer-motion'
import './FeaturedProjects.css'
import { projects } from '../lib/projects'


export default function FeaturedProjects() {
  return (
    <section className="featured-section">
      <motion.h2 
        className="featured-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Featured Projects
      </motion.h2>

      <div className="featured-projects-grid">
        {projects.filter(p => p.featured).map((project, i) => (
          <a
          href={`https://github.com/${project.repoFullName}`}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card-link"
          >
            <motion.div 
              className="featured-project-card"
              key={i}
              style={{ backgroundImage: `url(${project.backgroundUrl})` }}
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: i * 0.2 }}
            >
              <div className="overlay">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
            </motion.div>
          </a>

        ))}
      </div>
    </section>
  )
}
