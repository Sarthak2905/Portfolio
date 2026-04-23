import { useState } from 'react'
import { motion } from 'framer-motion'

function Contact({ socialLinks }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (event) => {
    event.preventDefault()
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <motion.section
      id="contact"
      className="section"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container contact-grid">
        <div>
          <h3>Let&apos;s Connect</h3>
          <p className="section-copy">Have an opportunity or project in mind? Let&apos;s build something great.</p>
          <ul className="social-links">
            {socialLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} target="_blank" rel="noreferrer" aria-label={link.name}>
                  <link.icon />
                  <span>{link.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            autoComplete="name"
            required
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit" className="btn primary">
            Send Message
          </button>
        </form>
      </div>
    </motion.section>
  )
}

export default Contact
