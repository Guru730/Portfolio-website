import React from 'react'
import './homepageheader.css'




//importing see projects button
import SeeProjectsButton from './HomePageSeeProjectsButton/seeprojectsbutton'

function homepageheader() {
    return (
        <div className='home-page-header-wrapper'>
            <div className='home-page-header'>
               
                     <div className='home-page-header-content'>
                             <span className='home-page-header-heading'>
                                 Think the Design,
                                 Design the Thinking.
                             </span>
                      
                         <div className='home-page-header-sub-heading-text-wrapper'>
                             We come up with how it would look attractive and how it would work effectively
                         </div>
                         <div className='home-page-header-see-my-projects-button-ctn'>
                          <SeeProjectsButton/>
                         </div>
                     </div>
           
                <div className='home-page-header-illustration-wrapper'>
                  <img src="https://sebostudio.com/wp-content/themes/sebotheme-3.0.0/assets/img/il-home-header.svg" className='home-page-header-illustration' alt="image"/>
                </div>
            </div>
        </div>
    )
}

export default homepageheader
