import React from 'react'
import './skillscolumn.css'


//importing skillname
import SkillName from './SkillNameBox/skillnamebox'



//importing footer
import Footer from '../../../UniversalComponents/Footer/footer'

function skillscolumn() {
    return (
        <div className='skills-column-wrapper'>
            <div className='skills-column'>
                      <div className='skills-column-heading-wrapper'>
                          <span className='skills-column-heading'>
                              My Skills
                          </span>
                      </div>
                      <div className='skills-column-description-text-wrapper'>
                          <p className='skills-column-description-text'>We like to build close relationships with our clients. We believe dynamic collaboration is the only way to get the job done well. See what they said about us in </p>
                      </div>

                      
            </div>
            <div className='skills-listing-box-wrapper'>
                           <SkillName/>
                      </div>
                      <div className='footer-ctn'>
                          <Footer/>
                      </div>
        </div>
    )
}

export default skillscolumn
