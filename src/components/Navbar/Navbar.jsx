import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logosb from '../../assets/imgs/logoMK.png'
import menu_icon from '/src/assets/icones/menu-icon.png'
import { Link } from 'react-scroll';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logosb} alt="Kumbu Conexões" className='logo' />

      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li>
          <Link to='hero' smooth={true} offset={0} duration={500}>
            Início
          </Link>
        </li>

        <li>
          <Link to='programs' smooth={true} offset={-220} duration={500}>
            Áreas
          </Link>
        </li>

        <li>
          <Link to='about' smooth={true} offset={-170} duration={500}>
            Sobre
          </Link>
        </li>

        <li>
          <Link to='testimonials' smooth={true} offset={-170} duration={500}>
            Diferenciais
          </Link>
        </li>

        <li>
          <Link to='contact' smooth={true} offset={-80} duration={500} className='btn'>
            Contacto
          </Link>
        </li>
      </ul>

      <img src={menu_icon} alt="Menu" className='menu-icon' onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar