import React, { useState } from 'react';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className='center nav'>
      <div className='nav__hamburger' onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={`nav__list ${isOpen ? 'open' : ''}`}>
        <li className='nav__list-item'>
          <a className='link link--nav' href="#home" onClick={closeMenu}>
            Home
          </a>
        </li>
        <li className='nav__list-item'>
          <a className='link link--nav' href="#skills" onClick={closeMenu}>
            Skills
          </a>
        </li>
        <li className='nav__list-item'>
          <a className='link link--nav' href="#projects" onClick={closeMenu}>
            Projects
          </a>
        </li>
        <li className='nav__list-item'>
          <a className='link link--nav' href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </li>
      </ul>
      {isOpen && (
        <div className="close-button" onClick={toggleMenu}>
          <FaTimes />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
