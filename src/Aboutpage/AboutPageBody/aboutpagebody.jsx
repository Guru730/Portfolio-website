import React from 'react'
import './aboutpagebody.css'




//IMPORTING ABOUT PAGE CARD
import AboutCard from './AboutCard/aboutcard'


function aboutpagebody() {
    return (
        <div className='about-page-body-wrapper'>
            <div className='about-page-body'>
                <div className='slef-description-card-ctn'>
                      <AboutCard/>
                </div>
            </div>
        </div>
    )
}

export default aboutpagebody
