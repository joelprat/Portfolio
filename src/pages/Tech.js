import React from 'react'

import "./Tech.css"

import {habilities_picts} from "../texts_images";

export default function Tech() {
  return (
    <div className='tech'>
        <div className='tech-info'>
            <h1 className='title'>Tech</h1>
            <p>
                These are the main skills that I have learned during the degree and on my own.
                I consider myself a person capable of learning and adapting to new technologies quickly.
            </p>
        </div>

        <div className='tech-imgs'>
            {
                habilities_picts.map((picture) => {
                    return <img src={picture} alt='joel prat vilanova tech'></img>
                })
            }
        </div>
    </div>
  )
}
