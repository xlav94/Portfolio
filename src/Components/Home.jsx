import React from 'react';
import './Home.css';
import { Cursor, useTypewriter} from 'react-simple-typewriter';
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Home() {
    const [nom] = useTypewriter({
        words: ['Hi, I\'m Cédric Guévremont'],
        loop: true,
        delaySpeed: 10000
      });
    
  return (
    <>
       <section className='home common-background'>
            <div className='description'>
                <h1>{nom} <Cursor className='black' /></h1> 
                <p>Développeur web et mobile</p>
            </div>
            <div className='social-icons'>
                <FontAwesomeIcon icon={faGithub} color='white' bounce size='3x'/>
                <FontAwesomeIcon icon={faLinkedin} color='white'  bounce size='3x'/>
            </div>
       </section>
    </>
  )
}

export default Home

