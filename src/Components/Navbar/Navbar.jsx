import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
            <nav className='center nav'>
                <ul className='nav__list'>
                    <li className='nav__list-item'><a className='link link--nav' href="#skills">Skills</a></li>
                    <li className='nav__list-item'><a className='link link--nav' href="">Projects</a></li>
                    <li className='nav__list-item'><a className='link link--nav' href="">Contact</a></li>
                </ul>
            </nav>
    );
};

export default Navbar;