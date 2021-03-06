import React from 'react'
import './emailform.css'



//IMPORTING EMAIL SVG
import {ReactComponent as EmailSVG} from '../../../assets/emial.svg'

function emailform() {
    return (
        <div className='email-form-wrapper'>
            <div className='email-form'>
                <div className='email-form-left-side'>
                    <div className='sender-email-wrapper'>
                        <label className='sender-email-lable'>Your Email</label>
                        <input className='sender-email' type="text" name='sender-email' id="sender-email"/>
                    </div>
                    <div className='email-input-field-wrapper'>
                    <input className='send-message-email' placeholder='Send Message' type="text"/>
                    </div>
                    <div className='send-email-button-wrapper'>
                        <div className='send-email-button'>
                            Send Email
                        </div>
                    </div>
                </div>
                <div className='email-form-right-side'>
                       
                       <EmailSVG className='email-svg'/>
                       
                </div>
            </div>
        </div>
    )
}

export default emailform
