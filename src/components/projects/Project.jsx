import React from 'react'
import './project.css'
import Works from './Works'

const Project = () => {
  return (
    <section className="work section" id='projects'>
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">My Work</span>
      <Works/>  
    </section>
  )
}

export default Project
