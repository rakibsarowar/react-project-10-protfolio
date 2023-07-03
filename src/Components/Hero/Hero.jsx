import React from 'react';
import { about as hero } from '../../data';
import './Hero.css'


const Hero = () => {
    const { name, role, description, resume, social, image } = hero

    return (
        <div className='hero-main'>
            <div className='left'>
                <div className='hero center'>
                    {name && (
                        <h1>
                            Hi, <br /> I am <span className='hero__name'>{name}.</span>
                        </h1>
                    )}
                    {role && <h2 className='hero__role'>A {role}.</h2>}
                    <p className='hero__desc'>{description && description}</p>
                    <div className='social'>
                        {social && (
                            <>
                                {social.github && (
                                    <a
                                        href={social.github}
                                        aria-label='github'
                                        className='link link--icon'
                                    > GitHub
                                    </a>
                                )}

                                {social.linkedin && (
                                    <a
                                        href={social.linkedin}
                                        aria-label='linkedin'
                                        className='link link--icon'
                                    > LinkedIn
                                    </a>
                                )}
                            </>
                        )}
                    </div>
                </div>
                <div className='hero__contact center'>
                    {resume && (
                        <a href={resume}>
                            <span type='button' className='btn btn--outline'>
                                Resume
                            </span>
                        </a>
                    )}
                </div>

            </div>
            <div className='right'>
                <img src={image} className='floating-image' alt="" />
            </div>
        </div>
    );
};

export default Hero;