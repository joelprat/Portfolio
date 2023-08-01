import React from 'react'

import "./Project.css"

import git from "../assets/github-mark.png"

export default function Project({title, description, url, github, pict}) {
  return (
    <div className='project'>
        <img src={pict} alt={`joel prat vilanova project ${title}`}></img>
        <div className='project-info'>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className='project-links'>
              {
                url === "This project is not online" ? 
                <a>This project is not online</a> :
                <a href={url}>Take a look!</a>
              }
              <a href={github}><img src={git}></img></a>
            </div>
        </div>

    </div>
  )
}
