import React from 'react';
import {BallCanvas} from './Ball';
import { technologies } from "../Constants";
import {faLinux, faApple, faWindows} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Lottie from "lottie-react";
import OSAnimation from '../assets/OSAnimation.json';

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
        <FontAwesomeIcon icon={faLinux} color='white' size='6x'/>
        <FontAwesomeIcon icon={faApple} color='white' size='6x'/>
        <FontAwesomeIcon icon={faWindows} color='white' size='6x'/>
      </div>
    </div>
    
  )
}

export default Skills;
