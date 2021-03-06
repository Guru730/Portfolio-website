import React, {useState} from 'react'
import './navbar.css'



//importing logo from navabar logo
import Logo from './Navbarlogo/navbarlogo'


//importing lets talk button
import LetsTalk from './Letstalkbutton/letstalk'


//importing Link, Route from react router dom
import {Link, Route} from 'react-router-dom'


//IMPORTING EMAIL POPUP
import EmailPopUp from '../EmailPopUp/emailpopup'




function Navbar() {

    const [popup, setpopup] = useState(false);

    return (
        <div className='navbar-wrapper'>
            <ul className='navbar-links-wrapper'>
                <li className='navnar-link-main-logo-wrapper'>
                     <Logo/>
                </li>
                
                 <li  className='navbar-link-wrapper'>
                    <Link to='/'>
                     <span style={{color:'gray'}} className='navbar-link-about-page'>HOME</span>
                     </Link>
                 </li>
                 <li className='navbar-link-wrapper'>
                     <Link to='/about'>
                     <span style={{color: 'gray'}} className='navbar-link-what-we-do-page'>ABOUT</span>
                     </Link>
                 </li>
                 <li className='navbar-link-wrapper'>
                     <span className='navbar-link-projects'>PROJECTS</span>
                 </li>

            </ul>
            <div className='email-popup-wrapper'>
                     <EmailPopUp onClose={() => setpopup(false)} isOpen={popup}/>
            </div>

            <div className='lets-talk-button'>
                 <LetsTalk  handleClick={() => setpopup(true)} width={4} height={4}/>
            </div>
        </div>
    )
}

export default Navbar
