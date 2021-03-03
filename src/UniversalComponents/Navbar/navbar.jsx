import React from 'react'
import './navbar.css'



//importing logo from navabar logo
import Logo from './Navbarlogo/navbarlogo'


//importing lets talk button
import LetsTalk from './Letstalkbutton/letstalk'

function navbar() {
    return (
        <div className='navbar-wrapper'>
            <ul className='navbar-links-wrapper'>
                <li className='navnar-link-main-logo-wrapper'>
                     <Logo/>
                </li>
                
                 <li  className='navbar-link-wrapper'>
                     <span className='navbar-link-about-page'>ABOUT</span>
                 </li>
                 <li className='navbar-link-wrapper'>
                     <span className='navbar-link-what-we-do-page'>WHAT I DO</span>
                 </li>
                 <li className='navbar-link-wrapper'>
                     <span className='navbar-link-projects'>PROJECTS</span>
                 </li>

            </ul>

            <div className='lets-talk-button'>
                 <LetsTalk/>
            </div>
        </div>
    )
}

export default navbar
