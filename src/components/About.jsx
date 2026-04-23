import { motion } from 'framer-motion'

function About({ about, skills, resumeUrl }) {
  return (
    <motion.section
      id="about"
      className="section"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <h3>About Me</h3>
        <p className="section-copy">{about}</p>

        <div className="skills-grid">
          {skills.map((skill) => (
            <article className="skill-card" key={skill.name}>
              <skill.icon />
              <span>{skill.name}</span>
            </article>
          ))}
        </div>

        <a className="btn secondary" href={resumeUrl} download>
          Download CV
        </a>
      </div>
    </motion.section>
  )
}

export default About
