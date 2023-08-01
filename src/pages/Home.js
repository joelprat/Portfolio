import React, { useState, useEffect } from 'react'
import { annotate } from 'rough-notation';

import "./Home.css";

export default function Home() {

    
    const [difDate, setDifDate] = useState();
  
    useEffect(() => {
      annotations();
      const initialDate = new Date(2022, 6, 7);
      const intervalId = setInterval(() => {
        const currentDate = new Date();
        const milsecDif = currentDate - initialDate;
        const yearDif = milsecDif / (365.25 * 24 * 60 * 60 * 1000);
        setDifDate(yearDif.toFixed(10));
      }, 100);
  
      return () => {
        clearInterval(intervalId);
      };
    }, []);
  

    const annotations = () => {
      setTimeout(() => {
        console.log("Loading component");
      },2000);

      setTimeout(()=>{
        const highlight1 = document.querySelector(".highlight1");
        const h_annotation1 = annotate(highlight1, {type: 'highlight', color: "pink"});
        h_annotation1.show();
      }, 4000)

      setTimeout(()=>{
        const highlight2 = document.querySelector(".highlight2");
        const h_annotation2 = annotate(highlight2, {type: 'highlight', color: "pink"});
        h_annotation2.show();
      }, 5000)

      setTimeout(()=>{
        const box = document.querySelector(".home-text p a");
        const b_annotation = annotate(box, {type: 'box', color: "green"});
        b_annotation.show();
      }, 6000)

      setTimeout(()=>{
        const highlight = document.querySelector(".circle");
        const h_annotation = annotate(highlight, {type:"highlight", color:"pink"});
        h_annotation.show();
      }, 8000)
    }
  
  
    return (
        <div className="home">
            <div className='home-text'>
                <h1 className='title'>SOFTWARE ENGINEER</h1>
                <p>
                    Hi, I'm Joel, a junior <i className='highlight1'>software</i><i className='highlight2'> engineer</i> who loves the world of computing. I have studied the degree of computer engineering at the <a href='https://www.uab.cat/web/estudiar/llistat-de-graus/informacio-general/enginyeria-informatica-1216708251447.html?param1=1263367146646' target='_blank' rel="noreferrer">UAB</a>, with a mention in software engineering.
                </p>

                <div className='home-info'>
                    <h3><i className='years'>{isNaN(difDate) ? 0 : difDate} </i><br/>EXPERIENCE YEARS</h3>
                    <h3 className='circle'>Barcelona</h3>
                </div>
            </div>
        </div>
    )
  }
