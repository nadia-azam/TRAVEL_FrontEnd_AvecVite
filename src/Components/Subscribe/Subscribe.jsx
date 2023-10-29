import React from 'react'
import './Subscribe.css'

import image1 from '../../Assets/pic-2.png'

const Subscribe = () => {
  return (
    <div className="subscribe section container">
        <div className="secContainer grid">
          <img src={image1} alt="" />

          <div className="textDiv">
            <h4> Best Way To Start Your Journey</h4>
            <p>We offer personalized itineraries tailored to individual preferences and interests</p>
            <button className='btn'>Start Here</button>
          </div>
        </div>
    </div>
  )
}

export default Subscribe


/* rafce  pour ecrire le premier syntaxe  */