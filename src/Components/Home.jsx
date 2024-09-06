import React from 'react'
import Hero from './Hero';
import Skills from './Skills';
import Project from './Project';
import Contact from './Contact';

function Home() {
  return (
    <div>
        <section id='hero'>  
            <Hero />
        </section>
    
        <section id='skills'>
            <Skills />
        </section>

        <section id='projects'>
            <Project />
        </section>
        <section id='contact'>
            <Contact />
        </section>
    
    </div>
  )
}

export default Home
