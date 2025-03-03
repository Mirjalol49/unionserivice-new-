import React from 'react'
import Logo from '../../images/logo.svg'
import './Header.css'
const Header = () => {
  return (
    <header className='header'>
        <div className='container'>
          <div className='header-inner'>
            <a href='/' className='logo-link'><img src={Logo} alt='logo' /></a>
            <nav className='nav'>
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
