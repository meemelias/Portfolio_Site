import React from 'react'
import './HeroImg.css'
import IntoImg from '../../assets/89781.jpg'
import { Link } from 'react-router-dom'

function HeroImg() {
  return (
    <div className='Hero' >
        <div className='mask'>
            <img className = "intro-img" src={IntoImg} alt="" />

        </div>
        <div className='content'>
            <h1>Welcome</h1>
            <p>My name is Meem Elias</p>
            <div>
                <Link className='btn' to='/project'>Projects</Link>
                <Link  className='btn btn-light' to='/contact'>Contact</Link>

            </div>
        </div>
    </div>
  )
}

export default HeroImg