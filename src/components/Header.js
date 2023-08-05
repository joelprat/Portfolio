import React, { useEffect } from 'react'

import { annotate } from 'rough-notation'

import "./Header.css"

export default function Header() {
  
  useEffect(()=>{
    setTimeout(()=>{      
      const links = document.getElementsByClassName("link");

      for(let i=0; i<links.length; i++){
        let annotation = annotate(links[i], {type: "highlight", color:"lightgrey"})
        annotation.show();
      }
    }, 2000)    
  }, []);


  
  return (
    <>
      <header className="header">
        <a href='#home'><h1>{"JPV"}</h1></a>
        <nav className="links">
            <a className='link' href='#home'>Home</a>
            <a className='link' href='#projects'>Projects</a>
            <a className='link' href='#tech'>Tech</a>
            <a className='link' href='#contact'>Contact</a>
        </nav>
      </header>
    </>
  )
}