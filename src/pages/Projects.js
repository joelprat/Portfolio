import React from 'react'

import "./Projects.css"

import Project from '../components/Project'

import {texts} from "../texts_images";

export default function Projects() {
  return (
    <div className='projects'>
        <div className='projects-info'>
            <h1 className='title'>Projects</h1>
            <p>This are some of my most significant projects. You can check the rest of them on my GitHub.</p>
        </div>

        <div className='projects-projects' >
            {
                texts.map(text => {
                    return <Project
                        title={text.title}
                        description={text.description}
                        url={text.url}
                        github={text.github}
                        pict={text.img}
                    />
                })
            }
        </div>
    </div>
  )
}
