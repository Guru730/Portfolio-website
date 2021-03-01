import React from 'react'

function navbar() {
    return (
        <div className='navbar-wrapper'>
            <ul className='navbar-links-wrapper'>
                <li className='navnar-link-main-logo-wrapper'>
                    <span>logo</span>
                </li>
                
                 <li className='navbar-link-about-page-wrapper'>
                     <span className='navbar-link-about-page'>ABOUT</span>
                 </li>
                 <li className='navbar-link-what-we-do-page-wrapper'>
                     <span className='navbar-link-what-we-do-page'>WHAT WE DO</span>
                 </li>
                 <li className='navbar-link-projects-wrapper'>
                     <span className='navbar-link-projects'>PROJECTS</span>
                 </li>
                 <li className='navbar-link-customer-stories-wrapper'>
                     <span className='navbar-link-customer-stories'>CUSTOMER STORIES</span>
                 </li>

            </ul>
        </div>
    )
}

export default navbar
