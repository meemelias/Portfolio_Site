import './NavbarStyles.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as Icons from 'react-icons/fa'




function Navbar() {

  
  const [clicked, setClicked] = useState(false);
  function handClick(){
    setClicked(!clicked);
  }
  return (
    <div className='header'>
      <Link to='/'>
        <h1>Portfolio</h1>
      </Link>
      
      <ul className = {clicked ? "nav-menu clicked" : "nav-menu"} >
        <li onClick={() => setClicked(!clicked)}>
          <Link to='/'> Home </Link>
        </li> 
        <li onClick={() => setClicked(!clicked)}>
          <Link to='/project'> Projects </Link>
        </li>
        <li onClick={() => setClicked(!clicked)}>
          <Link to='/contact'> Contact </Link>
        </li>
      </ul>

      <div className='hamburger' onClick={handClick}>
        {clicked ?
          <Link>
            <Icons.FaTimes size={20} className='icon2' />
          </Link>
          :
          <Link>
            <Icons.FaBars size={20} className='icon2' />
          </Link>
        }
      </div>
    </div>
  )
}

export default Navbar