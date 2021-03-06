import React from 'react'
import './linksrow.css'



function linksrow({id, heading, firstColumn, twoColumn, threeColumn, firstLink, secondLink, thirdLink }) {
    return (
        <div  className='links-row-general-contact-information-column'>
        <div className='links-row-general-contact-information-heading'>
                {heading}
        </div>
        <div className='links-row-general-contact-information-address'>
           <a href={firstLink}> {firstColumn}</a>
        </div>
        <div className='links-row-general-contact-information-phone-number'>

            <a href={secondLink}>{twoColumn}</a>
        </div>
        <div className='links-row-general-contact-information-emial'>
            <a href={thirdLink}>{threeColumn}</a>  
            </div>
    </div>
    )
}

export default linksrow
