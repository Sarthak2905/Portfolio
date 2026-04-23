import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'

function Hero({ name, role, taglines, description, onNavigate, resumeUrl }) {
  const messages = useMemo(() => taglines.filter(Boolean), [taglines])
  const [messageIndex, setMessageIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentMessage = messages[messageIndex] || ''
    const speed = isDeleting ? 40 : 75

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentMessage.length) {
        setCharIndex((prev) => prev + 1)
        return
      }

      if (isDeleting && charIndex > 0) {
        setCharIndex((prev) => prev - 1)
        return
      }

      if (!isDeleting && charIndex === currentMessage.length) {
        setIsDeleting(true)
        return
      }

      setIsDeleting(false)
      setMessageIndex((prev) => (prev + 1) % messages.length)
    }, speed)

    return () => clearTimeout(timer)
  }, [charIndex, isDeleting, messageIndex, messages])

  const typedText = (messages[messageIndex] || '').slice(0, charIndex)

  return (
    <motion.section
      id="home"
      className="hero section"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container hero-grid">
        <div>
          <p className="eyebrow">Portfolio</p>
          <h1>
            Hi, I&apos;m <span className="accent">{name}</span>
          </h1>
          <h2>{role}</h2>
          <p className="typewriter" aria-live="polite">
            {typedText}
            <span className="cursor">|</span>
          </p>
          <p className="hero-description">{description}</p>
          <div className="hero-actions">
            <button type="button" className="btn primary" onClick={() => onNavigate('projects')}>
              View Projects
            </button>
            <a className="btn secondary" href={resumeUrl} download>
              Download Resume
            </a>
          </div>
        </div>

        <div className="hero-photo" aria-hidden="true">
          <div className="photo-ring" />
          <div className="photo-placeholder">Profile</div>
        </div>
      </div>
    </motion.section>
  )
}

export default Hero
