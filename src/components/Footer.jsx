function Footer({ name, socialLinks }) {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <p>© {new Date().getFullYear()} {name}. All rights reserved.</p>
        <ul className="footer-links">
          {socialLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} target="_blank" rel="noreferrer">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer
