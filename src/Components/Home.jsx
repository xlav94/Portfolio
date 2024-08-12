import React from 'react'
import Hero from './Hero';
import Skills from './Skills';
import Project from './Project';

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
    
    </div>
  )
}

export default Home
