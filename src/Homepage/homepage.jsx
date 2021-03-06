import React from 'react'
import './homepage.css'





//importing Navbar from universal component
import Navbar from '../UniversalComponents/Navbar/navbar'



//importing linkdin


//importing Header from 
import Header from './HomePageHeader/homepageheader'


//importing SectionDivider
import SectionDivider from './HomePageHeader/SectionDivider/sectiondivider'



//importing homebody
import Homebody from './HomepageBody/homepagebody'



//importing footer and skills column
import SkillsColumn from './HomepageBody/HomePageSkillsColumn/skillscolumn'

function homepage() {
    return (
        <div className='home-page-wrapper'>
            
            <div className='home-page-header-ctn'>
            <div className='home-page-navbar-ctn'>
                <Navbar/>
            </div>
        
                    <Header/>
                 </div>
                 <div className='header-body-divider-ctn'>
                       <SectionDivider/>
                 </div>
            <div className='home-page-body-wrapper'>
               <Homebody/>
            </div>
            <div className='home-page-skills-and-footer-column'>
                   <SkillsColumn/>
            </div>
        </div> 
    )
}

export default homepage
