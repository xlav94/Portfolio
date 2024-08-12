import React from 'react';
import './Hero.css';
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
                <FontAwesomeIcon icon={faGithub} color='white' bounce size='3x' cursor='pointer'/>
                <FontAwesomeIcon icon={faLinkedin} color='white'  bounce size='3x' cursor='pointer'/>
            </div>
            <div className='cv'>
              <button className='cvButton'> 
                Resume <i class="fa fa-download" aria-hidden="true" />
              </button>
            </div>
       </section>
    </>
  )
}

export default Home

