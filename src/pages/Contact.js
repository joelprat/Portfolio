import React from 'react'
import {useState, useEffect } from 'react';

import emailjs from '@emailjs/browser';

import './Contact.css';
import linkedin from '../assets/LI-In-Bug.png'
import github from '../assets/github-mark.png'


export default function Contact() {

  //template_qvduydl
  //service_dr8mfph
  //7nuxIf1xV8UOCTZdZ

  const placeholderMessages = {
    name: "What's your name?",
    email: "What's your email?",
    message: "What you want to say?"
  }

  const [name, setName] = useState(placeholderMessages.name);
  const [email, setEmail] = useState(placeholderMessages.email);
  const [message, setMessage] = useState(placeholderMessages.message);

  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    let data = {
      form_name: name,
      to_name: 'Joel',
      from_email: email,
      to_email: 'jpratv23@gmail.com',
      message: message
    }

    
  await emailjs.send('service_dr8mfph', 'template_qvduydl', data, '7nuxIf1xV8UOCTZdZ').then(() => {
      alert('I will get in touch as soon as possible!');
      resetForm();
      window.location.reload();
    }, (error) => {
      console.log(error);
      alert("Something went wrong");
    });
  }

  useEffect(()=>{
    if (name === ""){
      setName(placeholderMessages.name);
    }

    if (email === ""){
      setEmail(placeholderMessages.email);
    }

    if (message === ""){
      setMessage(placeholderMessages.message);
    }
  }, [name, email, message])



  return (
    <div className='contact'>
        <div className='contact-text'>
            <h1 className='title'>CONTACT</h1>
            <p>You can find me on this social platforms, or if you rather, you can send me an email. Make sure that your email address is correct!</p>
            <div className='contact-links'>
                <a href='https://github.com/joelprat' target='_blank'><img src={github} alt='github joel prat vilanova portfolio'></img></a>
                <a href='https://www.linkedin.com/in/joelpratvilanova/' target='_blank'><img src={linkedin} alt='linkedin joel prat vilanova'></img></a>
            </div>
        </div>
        
        <div className='contact-form'>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder={name} onChange={e => setName(e.target.value)} pattern="^[A-Za-z\s]+$" required></input>
                <input type='email' placeholder={email} onChange={e => setEmail(e.target.value)} required></input>
                <textarea placeholder={message} onChange={e=> setMessage(e.target.value)} required></textarea>
                <button type='submit'>Send</button>
            </form>
        </div>
    </div>
  )
}
