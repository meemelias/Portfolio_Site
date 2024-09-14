import React from 'react'
import './projectStyles.css'
import { Link } from 'react-router-dom'

function ProjectSection() {
  return (
    <>
    <div className='section-1'>

    </div>
    <div className='grid-content'>
      <div className="box">
        <div className="img-section">
        <img class="image" src="../../../src/assets/Capture.PNG" alt=""/>
        </div>
        <div className='detail-section'>
          <span>TMUber App</span>
          <Link to='https://github.com/meemelias/TMUberSystem'> See Details </Link>

        </div>
      </div>

      <div className="box">
        <div className="img-section">
        <img class="image" src="../../../src/assets/fullstack.PNG" alt=""/>
        </div>
        <div className='detail-section'>
          <span>Fullstack Auth Project</span>
          <Link to = 'https://github.com/meemelias/FullStack_AuthProject'> See Details </Link>
        </div>
      </div>

      <div className="box">
        <div className="img-section">
        <img class="image" src="../../../src/assets/create-responsive-websites-using-html-css-javascript-react.jpeg" alt=""/>
        </div>
        <div className='detail-section'>
          <span>Personal Portfolio Project</span>
          <Link to='https://github.com/meemelias/Portfolio_Site'> See Details </Link>
        </div>
      </div>

      <div className="box">
        <div className="img-section">
        <img class="image" src="../../../src/assets/react-logo.png" alt=""/>
        </div>
        <div className='detail-section'>
          <span>React Recipe App</span>
          <Link to='https://github.com/meemelias/ReactRecipeApp'> See Details </Link>
        </div>
      </div>
      
    </div>
    </>
  )
}

export default ProjectSection