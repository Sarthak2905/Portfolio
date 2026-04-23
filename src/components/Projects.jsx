import { motion } from 'framer-motion'
import { FaArrowUpRightFromSquare, FaGithub } from 'react-icons/fa6'

function Projects({ projects }) {
  return (
    <motion.section
      id="projects"
      className="section"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <h3>Featured Projects</h3>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <img src={project.thumbnail} alt={`${project.title} thumbnail`} loading="lazy" />
              <div className="project-content">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <ul className="tag-list">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <div className="project-links">
                  <a href={project.githubUrl} target="_blank" rel="noreferrer">
                    <FaGithub /> GitHub
                  </a>
                  <a href={project.demoUrl} target="_blank" rel="noreferrer">
                    <FaArrowUpRightFromSquare /> Live Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Projects
