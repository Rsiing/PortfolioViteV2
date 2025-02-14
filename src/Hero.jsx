import React, { useState, useEffect } from 'react'

import { IoLocationOutline } from "react-icons/io5";
import About from './About';

function Hero({fadeHome, fadeAbout}) {

const [scrollToContact, setScrollToContact] =useState(null);
    const toggleScrollToContact = () => {
        setScrollToContact(!scrollToContact)
    }
    useEffect(()=>{
        if (scrollToContact) {
            window.scrollTo({ top: 1000, behavior: "smooth" });
        }
    }, [scrollToContact]);




  return (
    <div className='text-white font-mono flex items-center justify-center cursor-default'>
        <div className=' w-400 h-200 absolute top-40 z-3 bg-transparent rounded-3xl border-white border-8 flex items-center justify-center'>
            <div className={`w-395 h-190 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 grid grid-cols-2 p-8 transition-opacity duration-1000 ${fadeHome ? 'opacity-0 pointer-events-none' : 'opacity-100'} `}>
                <div className='pl-6 pt-6 h-180 w-180'>
                    <h1 className='h-24 pl-2 text-7xl bg-gradient-to-r from-white to-blue-500 bg-clip-text text-transparent'>Ryan Singleton</h1>
                    <h2 className=' text-3xl pl-2 flex items-center gap-2 '><IoLocationOutline className='cursor-pointer hover:animate-[shake_0.6s_linear_infinite]'/> Preston, United Kingdom</h2>
                    <p className='text-2xl rounded-xl p-4 my-10 mb-4 duration-300 border-4 border-transparent hover:border-blue-500'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis 
                        praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate 
                        non provident, similique sunt in culpa qui officia  deserunt mollitia animi, id est laborum et dolorum fuga.</p>
                        <ul className='text-2xl gap-16 pl-6 flex pt-12'>
                            <a href="" className='border-4 rounded-2xl p-10 flex justify-center hover:scale-110 hover:text-blue-500 duration-300'>View my CV</a>
                            <button onClick={toggleScrollToContact} className='border-4 rounded-2xl p-10 flex justify-center hover:scale-110 hover:text-blue-500 duration-500 cursor-pointer'>Work with Me</button>
                        </ul>
                </div>
                
            </div>
                <div
                className={`w-full h-full absolute top-0 left-0 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 p-8 grid grid-cols-2 rounded-3xl transition-opacity duration-1000 ${fadeAbout ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                    <About/>
                </div>
        </div>
    </div>
    
  )
}

export default Hero