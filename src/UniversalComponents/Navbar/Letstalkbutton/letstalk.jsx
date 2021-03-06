import React from 'react'
import './letstalk.css'


function letstalk({id, width, height, handleClick, Close}) {

    return (
        <div onClick={handleClick} id={id} style={{width: `${width}vw`, height:`${height}vh`}} className='lets-talk-button-wrapper'>
            <span className='lets-talk-button'>Let's talk</span>
        </div>
    )
}

export default letstalk