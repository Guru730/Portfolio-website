import React, { Component } from 'react'
import './homepagecards.css'




import Card from './HomePageCard/homepagecard'


export class homepagecard extends Component {
    render() {

        const projectsCards = [1,2,3,4];

        return (
            <>
               <div className='home-page-body-projects-ctn'>
       {
           projectsCards.map((value, idx) => {
               return <Card/>
           })
       }
       </div>
            </>
        )
    }
}

export default homepagecard
