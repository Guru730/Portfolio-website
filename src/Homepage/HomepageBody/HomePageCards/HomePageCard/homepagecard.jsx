import React from 'react'
import './homepagecard.css'



function homepagecard({image, AppName, description, color, backColor,}) {
    return (
 <div class="projects-flip-card">

       <div class="projects-flip-card-inner">
             <div style={{backgroundColor: `${color}`}} class="projects-flip-card-front">
                   <div className='projects-flip-card-content-wrapper'>
                     <div className='projects-flip-card-text-content-wrapper'>
                          <div className='projects-flip-card-text-content'>
                              <div className='projects-flip-card-text-heading'>
                                 {AppName}
                              </div>
                              <div className='projects-flip-card-project-description'>
                                {description}
                              </div>
                          </div>
                     </div>
                     <div className='projects-flip-card-image-wrapper'>
                       <img src={image} className='projects-flip-card-image' alt="image"/>
                     </div>
                   </div>
           </div>

                  <div style={{backgroundColor: `${backColor}`}} class="projects-flip-card-back">
                  
 
    </div>
  </div>
</div>
    )
}

export default homepagecard
