import React from 'react';
import './Project.css';
import { projectName } from "../Constants";

import {faGithub} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Project() {
  return (
    <div className='projects'>
        <div className='title'>
        <h1>My Projects</h1>
        </div>
       <div className='projects-container'>
       {projectName.map((project) => (
        <div className='project' key={project.image}>
            <div className='github-icon'>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} color='black' size='3x' cursor='pointer'/>
              </a>
            </div>
            <div className='image'>
                <img src={project.image} alt={project.image} />
            </div>
            <div className='titleProject'>
                {project.name}
            </div>
            <div className='desscription'>
                {project.description}
            </div>
            <div className='language'>
                Language: {project.language} 
            </div>
            
        </div>
      ))}
        </div>
   
    </div>
  )
}

export default Project;
