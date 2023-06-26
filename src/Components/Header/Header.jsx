import React from 'react';
import { header } from '../../data';
import Navbar from '../Navbar/Navbar';
import './Header.css'

const Header = () => {
    const {homepage, title} = header
    return (
        <div className='header center'>
            <h3>
                {homepage? (
                    <a href={homepage} className='link'>{title}</a>
                ):(
                    title
                )}
            </h3>
            <Navbar></Navbar>
        </div>
    );
};

export default Header;