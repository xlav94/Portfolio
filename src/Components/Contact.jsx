import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";


import './Contact.css';

function Contact() {
  return (
    <div className='contactContainer'>
        <div className='contact'>
            <h1>Contact</h1>
            <ul className='contactList'>
                <li>
                    <FontAwesomeIcon icon={faEnvelope} color='white'  size='2x'/> 
                    <div className='contact-info'>
                        <a href="mailto:cedric.guevremont@gmail.com" className='contact-link'>
                            cedric.guevremont@gmail.com
                        </a>
                        <br />
                        <a href="mailto:cedric.guevremont@umontreal.ca" className='contact-link'>
                            cedric.guevremont@umontreal.ca
                        </a>
                    </div>
                </li>
                <li>
                    <FontAwesomeIcon icon={faPhone}  color='white'  size='2x'/>  438-365-7700
                </li>
                <li>
                    <a href="https://github.com/xlav94" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub}  color='white'  size='2x'/>  xlav94
                    </a>
                </li>
                <li>
                    <a href="https://linkedin.com/in/cedric-guevremont-1289ba2a9" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} color='white' size='2x'/> Cedric Guevremont
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Contact
