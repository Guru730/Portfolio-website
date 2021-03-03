import React, { Component } from 'react'
import './bigcard.css'


export class bigcard extends Component {

  handlerightRotation = (e) => {

    const  element  = document.getElementById('move-element');
    const  rightColumn = document.getElementById('right-column');
    const getClient = rightColumn.getBoundingClientRect();
    var rotationResult = getClient.right - e.pageX;
    var rotate = rotationResult / 20;
          element.style.transform = `rotateY(${rotate}deg)`;
   
  }



  
  handleleftRotation = (e) => {

    const  element  = document.getElementById('move-element');
    const  rightColumn = document.getElementById('right-column');
    const getClient = rightColumn.getBoundingClientRect();
    var rotationResult = getClient.right - e.pageX;
    var rotate = rotationResult / 20;
     element.style.transform = `rotateY(${rotate}deg)`;
   
  }




  DefaultRotation = () => {
    const  element  = document.getElementById('move-element');
    element.style.transform = `rotateY(0deg)`;


  }

  componentDidMount(){

    const leftSide = document.getElementById('right-column');
    const rightSide = document.getElementById('move-element');

    rightSide.addEventListener('mousemove', this.handleleftRotation);
    rightSide.addEventListener('mouseleave', this.DefaultRotation);

    leftSide.addEventListener('mousemove', this.handlerightRotation);
    leftSide.addEventListener('mouseleave', this.DefaultRotation);
  }

    render() {
        return (
            <div id='flip-card' className='flip-card'>
                <div id='move-element' className='flip-card-inner'>
                    <div className='flip-card-front'>
                        
                         <div id='right-column' className='right-column-wrapper'>
                             <div className='card-right-column-text-wrapper'>
                                 <div className='card-right-column-text-heading-wrapper'>
                          
                                     PHONEWAGON
                            
                                 </div>

                                 <div className='card-right-column-text'>
                                      Top-Rated Call Tracking software
                                 </div>
                        
                             </div>
                         </div>
                          <div className='card-ipad-svg-wrapper'>
                         <img src="https://sebostudio.com/wp-content/themes/sebotheme-3.0.0/assets/img/project-item/phonewagon-ill.svg" className='mobile-svg' alt=""/>
                            </div>
                    </div>
                    <div className='flip-card-back'>
        
                    </div>
                </div>
                
            </div>
        )
    }
}

export default bigcard
