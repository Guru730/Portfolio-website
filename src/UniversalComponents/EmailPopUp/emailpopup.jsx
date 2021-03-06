import React from 'react'
import './emailpopup.css'



import ReactDOM from 'react-dom'



//importing email modal 
import EmailModal from './EmailForm/emailform'


function servicepagepopup({isOpen, onClose}) {

    if(!isOpen) {
        return null
    } else {
        return ReactDOM.createPortal(
          <div className='service-page-popup-overlay'>
              <div className='service-page-popup-ctn'>
                 <div  className='service-page-close-popup-button-wrapper'>
                   <span onClick={onClose} className='service-page-close-popup-button'>&#9747;</span>
                </div>
                <div className='service-page-Modal-ctn'>
                  <EmailModal/>
                </div>
           </div>
        </div>, 
        document.getElementById('portal-modal')
      )
    }
}

export default servicepagepopup
