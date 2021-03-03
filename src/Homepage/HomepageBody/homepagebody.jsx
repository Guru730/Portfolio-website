import React from 'react'
import './homepagebody.css'



//importing BigCard
import BigCard from './HomePageBiggerCard/bigcard'


//importing projects cards
import ProjectCards from './HomePageCards/homepagecards'

function homepagebody() {
    return (
        <div className='home-page-body-wrapper'>
            <div className='home-page-body'>
                <div className='home-page-body-projects-column-heading-wrapper'>
                    <span className='home-page-body-projects-column-heading'>
                        Our Projects
                    </span>
                    <span className='home-page-body-projects-column-sub-heading'>
                        Our Work is the bridge to various insightful digital experiences.
                    </span>
                </div>
                <div className='home-page-body-projects-column-wrapper'>
                    <div className='home-page-body-projects-first-column'>
                            <BigCard/>
                    </div>
                    <div className='home-page-body-other-projects-ctn'>
                         <ProjectCards/>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default homepagebody
