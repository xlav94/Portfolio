import React from 'react';
import {BallCanvas} from './Ball';
import { technologies } from "../Constants";

import './Skills.css';

function Language() {
  return (
    <div className='skills-container'>
      {technologies.map((technology) => (
        <div className='icon-wrapper' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
}

function Skills() {
  return (
    <div className='skills'>
      <h1 className='text'>Skills</h1>
      <Language />
    </div>
  )
}

export default Skills;
