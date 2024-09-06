import React, {useState, useEffect} from 'react'
import './NavBar.css';
import { NavLink, useLocation } from 'react-router-dom';

function NavBar() {
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
    }

    

    const location = useLocation();

    useEffect(() => {
      if (location.hash) {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, [location]);
  

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
            <NavLink to='/#about' className='nav-links'>About</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/#skills' className='nav-links' >Skills</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/#projects' className='nav-links'>Projects</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/#contact' className='nav-links'>Contact</NavLink>
          </li>
        </ul>
        </div>
      </nav>
    </>
  )
}

export default NavBar
