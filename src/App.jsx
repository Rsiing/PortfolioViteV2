import { useState } from 'react'
import "tailwindcss";
import './App.css'
import Nav from './Nav';
import sample from './assets/abstract.mp4';
import Hero from './Hero';
import Contact from './Contact';

function App() {
  
  const[fadeHome, setFadeHome]= useState(false);
  const[fadeAbout, setFadeAbout]= useState(true);

  const toggleAbout = () => {
    setFadeHome(true);
    setFadeAbout(false);
  };

  const toggleHome = () => {
    setFadeHome(false);
    setFadeAbout(true);
  };
  



  return (
      <>
        <Nav toggleAbout={toggleAbout} toggleHome={toggleHome}/>
        <Hero fadeHome={fadeHome} fadeAbout={fadeAbout}/>
        <video className='videoTag' autoPlay loop muted>
          <source src={sample} type='video/mp4' />
        </video>
        <Contact/>
        
        
       
        
      </>
  )
}

export default App
