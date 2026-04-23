import { useEffect, useState } from 'react'
import { HiBars3, HiMiniXMark } from 'react-icons/hi2'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

function Navbar({ activeSection, onNavigate, name }) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!isOpen) return undefined

    const closeMenu = () => setIsOpen(false)
    window.addEventListener('resize', closeMenu)

    return () => window.removeEventListener('resize', closeMenu)
  }, [isOpen])

  const handleClick = (id) => {
    onNavigate(id)
    setIsOpen(false)
  }

  return (
    <header className="navbar">
      <nav className="container nav-content" aria-label="Primary navigation">
        <button type="button" className="brand" onClick={() => handleClick('home')}>
          {name}
        </button>

        <button
          type="button"
          className="menu-toggle"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <HiMiniXMark /> : <HiBars3 />}
        </button>

        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => handleClick(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
