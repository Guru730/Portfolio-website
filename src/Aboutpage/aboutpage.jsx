import React from 'react'
import './aboutpage.css'





//IMPORTING NAVBAR 
import Navbar from '../UniversalComponents/Navbar/navbar'


//IMPORTING ABOUT PAGE HEADLINE
import Headline  from './AboutPageBody/AboutHeadline/aboutheadline'

//IMPORTING ABOUT PAGE BODY
import AboutBody from './AboutPageBody/AboutCard/aboutcard'


//IMPORTING FOOTER
import Footer from '../UniversalComponents/Footer/footer'



function aboutpage() {
    return (
        <div className='about-page-wrapper'>
             <div className='about-page-navbar-ctn'>
                    <Navbar/>
                    <Headline/>
             </div>
             <div className='about-page-body-ctn'>
                   <AboutBody/>
             </div>
             <div className='about-page-footer-ctn'>
                  <Footer/>
             </div>
        </div>
    )
}

export default aboutpage
