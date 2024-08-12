import React from 'react';
import './Project.css';
import { projectName } from "../Constants";

function Project() {
  return (
    <div className='projects'>
        <div className='title'>
        <h1>My Projects</h1>
        </div>
       <div className='projects-container'>
       {projectName.map((project) => (
        <div className='project' key={project.image}>
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
