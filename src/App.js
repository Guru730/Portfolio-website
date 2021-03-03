import React from 'react'
import './App.css'


//IMPORTING NAVBAR FROM UNIVERSAL COMPONENTS
import HomePage from './Homepage/homepage'


function App() {
    return (
        <div className='App'>
            <div className='home-page-ctn'>
                  <HomePage/>
            </div>
        </div>
    )
}

export default App
