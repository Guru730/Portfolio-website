import React, { Component } from 'react'
import './homepagecards.css'




import Card from './HomePageCard/homepagecard'


export class homepagecard extends Component {
    render() {

        const projectsCards = [{company: 'My Company', image: 'https://sebostudio.com/wp-content/themes/sebotheme-3.0.0/assets/img/project-item/heylink-ill.svg', description: 'A web App for all the normal day services', frontColor: '#fd8252', backColor: '#6937ff', ProjectCardBack: {
            heading: 'My Company', 
            information: 'Its is app that i created for which can be used by any company which offers home based services like body care services, huouse care etc.',
            tecnolgies: 'React.js , Redux, firebase, sass, css, Xml, react animation group,'
        },}, 
                               {company: 'anything', image:'https://sebostudio.com/wp-content/themes/sebotheme-3.0.0/assets/img/project-item/vitally-ill.svg', description: 'this is a content description', frontColor: '#6937ff', backColor: 'fd8252'}, 
                               {company: 'anything', image: 'https://sebostudio.com/wp-content/themes/sebotheme-3.0.0/assets/img/project-item/fonedynamics-ill.png', description: 'this is the description content', frontColor: '#2ebbff', backColor: '#fcb737'}, 
                               {company: 'anything', image: 'https://sebostudio.com/wp-content/themes/sebotheme-3.0.0/assets/img/project-item/randstad-ill.png', description: 'this is the description', frontColor: '#fcb737', backColor: '#2ebbff'}
                            ];

        return (
            <>
               <div className='home-page-body-projects-ctn'>
       {
           projectsCards.map((value, idx) => {
               return <Card image={value.image} AppName={value.company} description={value.description} color={value.frontColor} backColor={value.backColor} />
           })
       }
       </div>
            </>
        )
    }
}

export default homepagecard
