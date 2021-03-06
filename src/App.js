import React from 'react'
import './App.css'


//IMPORTING NAVBAR FROM UNIVERSAL COMPONENTS
import HomePage from './Homepage/homepage'


//IMPORTING FOOTER 
import AboutPage from './Aboutpage/aboutpage'

//importing react-rouetr-dom
import {Link, Route, Switch} from 'react-router-dom'



function App() {
    return (
        <div className='App'>
            <div className='home-page-ctn'>
                <Route exact path='/' component={HomePage}/>
                <Route path='/about' component={AboutPage}/>
            </div>
        </div>
    )
}

export default App
