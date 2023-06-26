import React from 'react';
import { header } from '../../data';

const Header = () => {
    const {homepage, title} = header
    return (
        <div>
            <h3>
                {homepage? (
                    <a href={homepage}>{title}</a>
                ):(
                    title
                )}
            </h3>
        </div>
    );
};

export default Header;