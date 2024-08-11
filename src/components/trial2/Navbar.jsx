import React, { useState } from 'react'
import * as Icons from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    const [clicked, setClicked] = useState(false);

    function handleClick() {
        setClicked(!clicked);
    }
    return (
        <>
        <nav >
            <Link>
                <Icons.FaHome className='icon' />
            </Link>

            <div >
                <ul id='navbar' className={clicked ? '#navbar active' : '#navbar'}>
                    <li className='link-item'>
                        <Link> Home </Link>
                    </li>
                    <li className='link-item'>
                        <Link> About Us </Link>

                    </li>
                    <li className='link-item'>
                        <Link> Contact Us </Link>
                    </li>

                    <li className='link-item'>
                        <Link> Services </Link>
                    </li>
                </ul>
            </div>

            <div id='mobile' onClick={handleClick}>
                {clicked ?
                    <Link>
                        <Icons.FaTimes className='icon2' />
                    </Link>
                    :
                    <Link>
                        <Icons.FaBars className='icon2' />
                    </Link>
                }
            </div>
        </nav>

        
        </>
        
        
    )
}

export default Navbar
