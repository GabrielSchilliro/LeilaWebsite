import React, { useState } from 'react'
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../../assets/logo3.png'
import '../../index.css'
import './Navbar.css'

const Navbar = () => {

  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  const closeMenu = () => setClick(false)

  return (
    <div className='header'>
      <nav className='navbar'>
        <a href='/' className='logo'>
          <img src={logo} alt='logo' />
        </a>
        <div className='hamburger' onClick={handleClick}>
          {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
            : (<FaBars size={30} style={{ color: '#ffffff' }} />)}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className='nav-item'>
            <Link className='cursor-pointer' to="quiensoy" spy={true} smooth={true} offset={0} duration={500} onClick={closeMenu}>Quien soy</Link>
          </li>
          <li className='nav-item cursor-pointer'>
            <Link className='cursor-pointer' to="servicios" spy={true} smooth={true} offset={20} duration={500} onClick={closeMenu}>Servicios</Link>
          </li>
          <li className='nav-item cursor-pointer'>
            <Link className='cursor-pointer' to="testimonios" spy={true} smooth={true} offset={20} duration={500} onClick={closeMenu}>Testimonios</Link>
          </li>
          <li className='nav-item cursor-pointer'>
            <Link className='cursor-pointer' to="contacto" spy={true} smooth={true} offset={20} duration={500} onClick={closeMenu}>Contacto</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar