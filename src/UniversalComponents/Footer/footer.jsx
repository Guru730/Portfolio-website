import React, {useState} from 'react'
import './footer.css'


//importing lets talk button
import LetsTalk from '../../UniversalComponents/Navbar/Letstalkbutton/letstalk'


//importing logo
import Logo from '../../UniversalComponents/Navbar/Navbarlogo/navbarlogo'


//importing linksrow
import LinksRow from './FooterLinksRow/linksrow'


//IMPORTING EMAILPOPUP
import EmailPopUp from '../EmailPopUp/emailpopup'

function Footer() {

    const array = [{heading: 'ABOUT US', firstlink: 'About', secondlink: 'Projects', thirdlink: 'Skills', destinationfirst: '#', destinationsecond: '#', destinationthird: '#'},
    {heading: 'Follow me', firstlink:'Linkedin', secondlink: 'Github', thirdlink:'', destinationfirst: 'https://www.linkedin.com/in/gurshran-singh-02776119b/', destinationsecond:'https://github.com/Guru730', destinationthird: '#'},
    ];


    const [Popup, setPopup] = useState(false)

    return (
        <div id='footer' className='footer-wrapper'>
            <div className='footer-email-popup-wrapper'>
               <EmailPopUp isOpen={Popup} onClose={() => setPopup(false)}/>
            </div>
            <div className='footer'>
                <div className='footer-upper-column'>
                <div className='footer-heading-wrapper'>
                    Interseted in collaboration
                </div>
                <div className='footer-lets-talk-button-wrapper'>
                   <LetsTalk handleClick={() => setPopup(true)} width={8} height={6}/>
                </div>
                </div>
                <div className='footer-bottom-column'>
                <div  className='general-contact-information-column'>
                     <div className='general-contact-information-heading'>
                       Guru
                       </div>
                     <div className='general-contact-information-address'>
                       Harayana, Gurugran,, sector 28
                     </div>
                     <div className='general-contact-information-phone-number'>
                       +91 95015-74941
                     </div>
                     <div className='general-contact-information-emial'>
                         Gurshran4544@gmail.com
                    </div>
    </div>
                    <div className='links-row-ctn'>
                         {
                             array.map((value, idx) => {
                                 return <LinksRow heading={value.heading} firstColumn={value.firstlink} twoColumn={value.secondlink} threeColumn={value.thirdlink} firstLink={value.destinationfirst} secondLink={value.destinationsecond} thirdlink={value.destinationthird} />
                             })
                         }
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer
