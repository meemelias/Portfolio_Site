
import React, { useState } from 'react'
import './Dropdown.css'
import {serviceDropdown} from './Navitems.js'
import { Link } from 'react-router-dom'




function Dropdown() {
    const[Dropdown,setDropdown] = useState(false);

  return (
    <>
    <ul className={Dropdown ? 'services-submenu clicked' : 'services-submenu'} onClick={() => setDropdown(!Dropdown)}>
        {serviceDropdown.map((item) => {
            return (
                <li key={item.id}>
                    <Link to={item.path} className={item.cName} onClick={() => setDropdown(false)}>
                    {item.title}
                    </Link>
                </li>

            )
        })}
    </ul>

    </>
  )
}

export default Dropdown