import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './Footer.css'

const Footer = () => {
    return (
        <div className='main_section'>
            <div className='footer'>
                <GitHubIcon />
                <LaunchIcon />
            </div>
            <p>© 2023 Rakib Sarowar - All rights reserved.</p>
        </div>
    );
};

export default Footer;