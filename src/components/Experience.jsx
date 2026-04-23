import { motion } from 'framer-motion'

function Experience({ experiences }) {
  return (
    <motion.section
      id="experience"
      className="section"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <h3>Experience & Education</h3>
        <div className="timeline">
          {experiences.map((item) => (
            <article className="timeline-item" key={`${item.date}-${item.title}`}>
              <span className="timeline-dot" aria-hidden="true" />
              <p className="timeline-date">{item.date}</p>
              <h4>{item.title}</h4>
              <p className="timeline-org">{item.organization}</p>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Experience
