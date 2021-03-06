import React from 'react'
import './skillnamebox.css'



//importing reactjs logo for reactjs skill box
import Reactjs from '../../../../assets/reactjs.png'

function skillnamebox({name}) {
    return (
        <div className='skill-box'>
            <span id='skill-name-one' className='skill-name-box-upper'>
             React.js
            </span>
            <span id='skill-name-two' className='skill-name-box-upper'>
             Redux
            </span>
            <span id='skill-name-three' className='skill-name-box-upper'>
             React.Native
            </span>
            <span id='skill-name-four' className='skill-name-box-upper'>
             Javascript
            </span>
            <span id='skill-name-five' className='skill-name-box-upper'>
             Typscript
            </span>
            <span id='skill-name-six' className='skill-name-box-upper'>
              jquery
            </span>
            <span id='skill-name-seven' className='skill-name-box-down'>
             HtML5
            </span>
            <span id='skill-name-eight' className='skill-name-box-down'>
             CSS3
            </span>
            <span id='skill-name-nine' className='skill-name-box-down'>
             SAAS
            </span>
            <span id='skill-name-ten' className='skill-name-box-down'>
             firebase
            </span>
            <span id='skill-name-eleven' className='skill-name-box-down'>
             Nodejs
            </span>
            <span id='skill-name-twelve' className='skill-name-box-down'>
              Wordpress
            </span>
        </div>
    )
}

export default skillnamebox
