import React, {useState} from 'react'
import './NavBar.css';

function NavBar() {
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
    }

  return (
    <>
      <nav className='navbar common-background'>
        <div className='container'>
        <div className='logo'> Cédric Guévremont</div> 
        <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <a href='#about' className='nav-links'>About</a>
            </li>
            <li className='nav-item'>
              <a href='#skills' className='nav-links'>Skills</a>
            </li>
            <li className='nav-item'>
              <a href='#projects' className='nav-links'>Projects</a>
            </li>
            <li className='nav-item'>
              <a href='#contact' className='nav-links'>Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default NavBar
