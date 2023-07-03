import React from 'react';
import './Skills.css'
import { skills } from '../../data';
import uniqid from 'uniqid';

const Skills = () => {
    if (!skills.length) return null

    return (
        <section className='section_skills' id='skills'>
            <h2 className='section__title'>Skills</h2>
            <ul className='skills__list'>
                {skills.map((skill) => (
                    <li key={uniqid()} className='skills__list-item btn btn--plain'>
                        {skill}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Skills;