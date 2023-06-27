import React from 'react';
import { projects } from '../../data';
import uniqid from 'uniqid'
import ProjectContainer from '../ProjectContainer/ProjectContainer';

const Projects = () => {
    if (!projects.length) return null

    return (
        <div>
            <section id='projects' className='section projects'>
                <h2 className='section__title'>Projects</h2>

                <div className='projects__grid'>
                    {projects.map((project) => (
                        <ProjectContainer key={uniqid()} project={project} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Projects;