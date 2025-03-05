import React, { useState, useEffect } from 'react'
import Logo from '../../images/logo.svg'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className='container'>
          <div className='header-inner'>
            <a href='/' className='logo-link'>
              <img src={Logo} alt='logo' />
            </a>
            
            <button 
              className={`mobile-menu-btn ${isMenuOpen ? 'open' : ''}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
              <ul className='nav-list'>
                <li className='nav-item'>
                  <a href='/' className='nav-link'>Home</a>
                </li>
                <li className='nav-item'>
                  <a href='/' className='nav-link'>About</a>
                </li>
                <li className='nav-item'>
                  <a href='/' className='nav-link'>Services</a>
                </li>
                <li className='nav-item'>
                  <a href='/' className='nav-link'>Contact</a>
                </li>
                <li className='nav-item'>
                  <a href='/' className='nav-button'>Contact Us</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
    </header>
  )
}

export default Header
