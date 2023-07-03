import React, { useState } from 'react';
import './Navbar.css';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className='center nav'>
            <div className='nav__hamburger' onClick={toggleMenu}>
                <FaBars />
            </div>
            <ul className={`nav__list ${isOpen ? 'open' : ''}`}>
                <li className='nav__list-item'><a className='link link--nav' href="#skills">Skills</a></li>
                <li className='nav__list-item'><a className='link link--nav' href="">Projects</a></li>
                <li className='nav__list-item'><a className='link link--nav' href="">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
