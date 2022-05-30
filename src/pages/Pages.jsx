import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Aboutme from './AboutMe/Aboutme'
import Portfolio from './Portfolio/Portfolio'
import Skills from './Skills/Skills'

function Pages() {
  return (
   <Routes>
      <Route path="/" element={<Aboutme/>}/>
      <Route path="/skills" element={<Skills/>}/>
      <Route path="/ib-portfolio" element={<Portfolio/>}/>
    </Routes>
  )
}

export default Pages