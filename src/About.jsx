import React from 'react'
import { useState } from 'react';
import { FaGraduationCap, FaHiking } from "react-icons/fa";
import { MdOutlineArrowDropUp } from "react-icons/md";
import { SiFramework, SiTailwindcss } from "react-icons/si";
import { FaToolbox, FaGithub, FaJs, FaReact, FaVuejs, FaHtml5, FaCss3, FaPython, FaDatabase, FaGit, FaBootstrap, FaDocker, FaPaintBrush} from 'react-icons/fa';
import portfolio from './assets/portfolio.png'

function About() {
    const [enlargeImg, setEnlargeImg] = useState(true);

    const toggleImg = () => {
        setEnlargeImg(!enlargeImg);
    };

  return (
    <div className='flex justify-center w-380 font-mono'>
    <div className='flex flex-col justify-between items-center w-full h-full gap-2'>
            <div className='grid grid-cols-2 relative z-4 w-full h-full gap-2 text-white'>
                <div className='rounded-2xl border-4 border-transparent hover:border-blue-500 duration-300'>
                <h3 className='justify-self-center flex items-center gap-4 text-3xl py-2'><FaPaintBrush className='hover:animate-[brush_1s_linear_infinite]'/>Frontend experience</h3>
                <div className='grid grid-cols-3 gap-6'>
                    <div className='h-42 w-full duration-1000 cursor-pointer'
                    style={{ scale: enlargeImg ? '100%' : '350%', transform: enlargeImg ? 'translatex(0) translatey(0)' : 'translatex(180px) translatey(60px)', position: enlargeImg ? 'static' : 'relative' }}
                    onClick={toggleImg}>
                    <img src={portfolio} alt="" className='h-40 rounded-md'
                    />
                    <p className='relative bottom-6 rounded-b-md flex bg-slate-950 justify-center'>Portfolio website</p>
                    </div>
                    <div className='h-42 w-full'></div>
                    <div className='h-42 w-full'></div>
                </div>
                </div>
                <div className='rounded-2xl border-4 border-transparent hover:border-blue-500 duration-300'>
                <h3 className='justify-self-center flex items-center gap-4 text-3xl py-2'><SiFramework className='hover:rotate-360 duration-1500 transition-all'/>Backend experience</h3>
                <div className='grid grid-cols-3 gap-6'>
                    <div className='h-42 w-full'>
                        
                    </div>
                    <div className='h-42 w-full'></div>
                    <div className='h-42 w-full'></div>
                </div>
                </div>
                
            </div>

        <div className='flex w-full h-full'>
            <div className='rounded-2xl border-4 border-transparent duration-300 hover:border-blue-500 w-full text-white font-mono pt-2'>
            <h3 className='justify-self-center flex items-center gap-4 text-3xl pb-2'><FaHiking className='rotate-y-180 hover:animate-[move_1s_linear_infinite]'/>My Journey</h3>
            <div className='w-full border-2 flex relative top-16'></div>
            <p className='relative top-5 left-2 px-4 rounded-xl bg-blue-500 flex w-fit'>efwegewr rgewrgw wgwrgw</p>
            <p className='relative top-14 left-80 px-4 rounded-xl bg-blue-500 flex w-fit'>efwegewr rgewrgw wgwrgw</p>
            <p className='relative bottom-7 left-160 px-4 rounded-xl bg-blue-500 flex w-fit'>efwegewr rgewrgw wgwrgw</p>
            <p className='relative top-2 left-220 px-4 rounded-xl bg-blue-500 flex w-fit'>efwegewr rgewrgw wgwrgw</p>
            <p className='relative bottom-19 left-290 px-4 rounded-xl bg-blue-500 flex w-fit'>efwegewr rgewrgw wgwrgw</p>
            <MdOutlineArrowDropUp className='absolute top-90 left-28 size-16'/>
            <MdOutlineArrowDropUp className='absolute top-93 left-110 rotate-180 size-16'/>
            <MdOutlineArrowDropUp className='absolute top-90 left-190 size-16'/>
            <MdOutlineArrowDropUp className='absolute top-93 left-248 rotate-180 size-16'/>
            <MdOutlineArrowDropUp className='absolute top-90 left-320 size-16'/>
            </div>
        </div>

       
        <div className='grid grid-cols-2 w-full gap-2 h-full '>
            <div className='rounded-2xl border-4 border-transparent duration-300 hover:border-blue-500 text-white font-mono pt-2 pl-4'>
            <h3 className='justify-self-center flex items-center gap-4 text-3xl pb-2'><FaToolbox className='hover:animate-[shake_1s_linear_infinite]'/>Languages, frameworks and utilities</h3>
                <div className='flex flex-wrap justify-center gap-4 pt-6'>
                <p className='flex items-center gap-2 bg-slate-950 w-fit p-2 rounded-xl hover:bg-blue-500 duration-300'><SiTailwindcss className='size-6'/>Tailwind</p>
                <p className='flex items-center gap-2 bg-slate-950 w-fit p-2 rounded-xl hover:bg-blue-500 duration-300'><FaJs className='size-6'/>JavaScript</p>
                <p className='flex items-center gap-2 bg-slate-950 w-fit p-2 rounded-xl hover:bg-blue-500 duration-300'><FaReact className='size-6'/>React</p>
                <p className='flex items-center gap-2 bg-slate-950 w-fit p-2 rounded-xl hover:bg-blue-500 duration-300'><FaGit className='size-6'/>Git</p>
                <p className='flex items-center gap-2 bg-slate-950 w-fit p-2 rounded-xl hover:bg-blue-500 duration-300'><FaCss3 className='size-6'/>CSS</p>
                <p className='flex items-center gap-2 bg-slate-950 w-fit p-2 rounded-xl hover:bg-blue-500 duration-300'><FaDocker className='size-6'/>Docker</p>
                <p className='flex items-center gap-2 bg-slate-950 w-fit p-2 rounded-xl hover:bg-blue-500 duration-300'><FaHtml5 className='size-6'/>HTML</p>
                <p className='flex items-center gap-2 bg-slate-950 w-fit p-2 rounded-xl hover:bg-blue-500 duration-300'><FaGithub className='size-6'/>Github</p>
                <p className='flex items-center gap-2 bg-slate-950 w-fit p-2 rounded-xl hover:bg-blue-500 duration-300'><FaPython className='size-6'/>Python</p>
                <p className='flex items-center gap-2 bg-slate-950 w-fit p-2 rounded-xl hover:bg-blue-500 duration-300'><FaDatabase className='size-6'/>SQL</p>
                <p className='flex items-center gap-2 bg-slate-950 w-fit p-2 rounded-xl hover:bg-blue-500 duration-300'><FaVuejs className='size-6'/>VueJs</p>
                <p className='flex items-center gap-2 bg-slate-950 w-fit p-2 rounded-xl hover:bg-blue-500 duration-300'><FaBootstrap className='size-6'/>Bootstrap</p>
                </div>
            </div>
            <div className='rounded-2xl border-4 border-transparent duration-300 hover:border-blue-500 text-white font-mono pt-2 pl-4'>
                <h3 className='justify-self-center flex items-center gap-4 text-3xl pb-6'><FaGraduationCap className='hover:animate-[tip_1s_linear_infinite]'/>My Education</h3>
                <p className=''>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis 
                praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias 
                excepturi sint occaecati cupiditate non provident, similique sunt in culpa 
                qui officia  deserunt mollitia animi, id est laborum et dolorum fuga.</p>
            </div>
        </div>
    </div>

    </div>
    
  )
}

export default About