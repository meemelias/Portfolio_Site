import { useState } from 'react'
import './App.css'
import Home from './Routes/Home'
import Project from './Routes/Project' 
import Contact from './Routes/Contact' 
import About from './Routes/About' 
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/project' element = {<Project/>}/>
      <Route path='/about' element = {<About/>}/>
      <Route path='/contact' element = {<Contact/>}/>

    </Routes>

    </>
    
  )
}

export default App
