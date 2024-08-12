import React from 'react';
import {BallCanvas} from './Ball';
import { technologies } from "../Constants";
import Lottie from "lottie-react";
import OSAnimation from '../assets/OSAnimation.json';
import Linux from './Linux';
import Windows from './Windows';
import Apple from './Apple';

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
      <h1>My Skills</h1>
      <div className='language'>
      <Language />
      </div>
      <div className='os'>
        <div className='lottie-container'>
          <Lottie animationData={OSAnimation} loop={true} className='lottie-animation'/>;
        </div>
        <div className='os3d'>
          <Linux />
          <Apple/>
          <Windows />
      </div>
        
      </div>
      
     
    </div>
    
  )
}

export default Skills;
