import React, { useState } from 'react'
import { images } from '../../constants/index';
import './NavBar.scss'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuStatus, setMenuStatus] = useState('hidden');

  const handleHamburger = () => {
    !isOpen ? setMenuStatus('active-menu') : setMenuStatus('hidden');
  }

  return (
    <header>
      <img src={images.logo} alt="" />

      <nav className={menuStatus}>
        <a href="/"><span>00</span> HOME</a>

        <a href="/"><span>01</span> DESTINATION</a>

        <a href="/"><span>02</span> CREW</a>

        <a href="/"><span>03</span> TECHNOLOGY</a>
      </nav>

      {!isOpen
        ? <img
          className='hamburger-menu'
          src={images.hamburgerIcon}
          alt="Hamburger Menu"
          onClick={() => {
            setIsOpen(true)
            handleHamburger()
          }}
        />
        : <img
          className='hamburger-menu'
          src={images.closeIcon}
          alt='close Icon'
          onClick={() => {
            setIsOpen(false)
            handleHamburger()
          }}
        />
      }
    </header>
  )
}

export default NavBar