import React from 'react'
import './navbarlogo.css'


//importing logo 
import Guru from '../../../assets/guru.png'


function navbarlogo() {
    return (
        <div className='main-logo-wrapper'>
            <img src={Guru} alt="logo-image"/>
            <span className='main-logo-text'>
                 Guru
            </span>
        </div>
    )
}

export default navbarlogo
