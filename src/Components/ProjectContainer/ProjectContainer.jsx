import React from 'react';
import uniqid from 'uniqid';
import './ProjectContainer.css';
import { AiFillGithub, AiOutlineLink } from 'react-icons/ai';

const ProjectContainer = ({ project }) => {
  console.log(project.image);
  return (
    <>
      <div className='project'>
        <img className='project__image' src={project.image} alt='' />
        <h3>{project.name}</h3>

        <p className='project__description'>{project.description}</p>
        {project.stack && (
          <ul className='project__stack'>
            {project.stack.map((item) => (
              <li key={uniqid()} className='project__stack-item'>
                {item}
              </li>
            ))}
          </ul>
        )}

        {project.sourceCode && (
          <a
            href={project.sourceCode}
            aria-label='source code'
            className='link link--icon'
          >
            <AiFillGithub />
          </a>
        )}

        {project.livePreview && (
          <a
            href={project.livePreview}
            aria-label='live preview'
            className='link link--icon'
          >
            <AiOutlineLink />
          </a>
        )}
      </div>
    </>
  );
};

export default ProjectContainer;
