import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';

const Nav = ({toggleAbout, toggleHome}) => {
    
    const [openNav, setOpenNav] = useState(false);

    const toggleNav = () => {
        setOpenNav(!openNav);
    };

    const [scrollToContact, setScrollToContact] =useState(null);
    const toggleScrollToContact = () => {
        setScrollToContact(!scrollToContact)
    }
    useEffect(()=>{
        if (scrollToContact) {
            window.scrollTo({ top: 1000, behavior: "smooth" });
        }
    }, [scrollToContact]);

    
    const [scrollToHome, setScrollToHome] =useState(null);
    const toggleScrollToHome = () => {
        setScrollToHome(!scrollToHome)
    }
    useEffect(()=>{
        if (scrollToHome) {
            window.scrollTo({ top: -1, behavior: "smooth" });
        }
    }, [scrollToHome]);


    return (
        <div className={`w-full fixed top-0 left-0 z-20 transition-all duration-500 ${openNav ? 'bg-transparent' : 'bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10'}`}>
            <div className=" py-6 text-white">
                <div className='grid grid-cols-2 mx-4'>
                    <div style={{ opacity: openNav ? '0' : '1', cursor: 'default', transition: 'all 1s' }} className='font-mono text-4xl'>
                        <ul className='space-x-10 pl-44'>
                            <a className='hover:text-blue-500 duration-500' style={{ cursor: openNav ? 'default' : 'pointer' }} onClick={() => { toggleHome(); toggleScrollToHome(); }} href="#home">Home</a>
                            <a className='hover:text-blue-500 duration-500' style={{ cursor: openNav ? 'default' : 'pointer' }} onClick={() => { toggleAbout(); toggleScrollToHome(); }} href="#about">About</a>
                            <a className='hover:text-blue-500 duration-500' style={{ cursor: openNav ? 'default' : 'pointer' }} onClick={toggleScrollToContact} href="#contact">Contact</a>
                        </ul>
                    </div>
                    <div className='justify-self-end cursor-pointer hover:scale-110 transition-all duration-300'>
                        <FaBars onClick={toggleNav} className='size-10'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;
