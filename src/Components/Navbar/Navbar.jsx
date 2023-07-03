import React, { useState } from 'react';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='center nav'>
      <div className='nav__hamburger' onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={`nav__list ${isOpen ? 'open' : ''}`}>
        <li className='nav__list-item'>
          <a className='link link--nav' href="#skills">Skills</a>
        </li>
        <li className='nav__list-item'>
          <a className='link link--nav' href="#projects">Projects</a>
        </li>
        <li className='nav__list-item'>
          <a className='link link--nav' href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
