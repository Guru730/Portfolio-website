import React from 'react'
import './sectiondivider.css'



//importing twitter
import Twitter from '../../../assets/twitter.png'



//importing Linkding
import Linkdin from '../../../assets/linkedin.png'


//importing internert
import Internet from '../../../assets/internet.png'

function sectiondivider() {
    return (
        <>
           <div className='header-body-divider'></div>
                 <div className='social-media-icons'>
                     <img src={Linkdin} className='linkdin-logo' alt="linkdin"/>
                     <img src={Twitter} className='twitter-logo' alt='twitter logo'/>  
                     <img src={Internet} alt="Internet-logo" className='internet-logo'/>
                 </div>  
        </>
    )
}

export default sectiondivider
