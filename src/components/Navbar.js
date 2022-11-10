import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';
import { SidebarData } from './Sidebar';
import fashion from '../fashion.png';

function navbar() {
  return (
    <>
    <nav className="Nav-bar">
    <img src={fashion} className='logo' />
    <ul>
        {SidebarData.map((item, index) => {
            return(
                <li key={index} className={item.cName}>
                    <Link to={item.path}>
                        <span>{item.title}</span>
                    </Link>
                </li>
                            );
                    })}
    </ul>
    
</nav>

    </>
  )
}

export default navbar
