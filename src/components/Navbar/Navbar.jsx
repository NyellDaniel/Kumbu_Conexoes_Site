import React, { useState, useEffect } from 'react'
import './Navbar.css'
import logo from '../../assets/imgs/logo.png'

const Navbar = () => {
  const [sticky, setSticky]   = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar ${sticky ? 'sticky' : ''}`}>
      <div className="nav-inner">

        <a href="#home" className="nav-logo">
          <img src={logo} alt="Mais Kumbu" />
        </a>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><a href="#home"     onClick={() => setMenuOpen(false)}>Início</a></li>
          <li><a href="#about"    onClick={() => setMenuOpen(false)}>Sobre Nós</a></li>
          <li><a href="#services" onClick={() => setMenuOpen(false)}>Serviços</a></li>
          <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projectos</a></li>
          <li><a href="#contact"  onClick={() => setMenuOpen(false)}>Contactos</a></li>
        </ul>

        <a href="#contact" className="nav-cta" onClick={() => setMenuOpen(false)}>
          Fale Connosco
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"/>
            <polyline points="12 5 19 12 12 19"/>
          </svg>
        </a>

        <button
          className={`nav-burger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>

      </div>
    </nav>
  )
}

export default Navbar