import React from 'react'
import './Portifolio.css'


import icon1 from '../../Assets/step-1.png'
import icon2 from '../../Assets/clock-icon.png'
import icon3 from '../../Assets/map-icon.png'
import img from '../../Assets/woman.jpg'

const Portifolio = () => {
  return (
    <div className='portifolio section container'>
      <div className="secContainer grid">

        <div className="leftContent">

          <div className="secHeading">
            <h3>Why Should You Choose Us</h3>
            <p>We have extensive knowledge and experience in the travel industry.</p>
          </div>

          <div className="grid">

            <div className="singlePortifolio flex">
              <div className="iconDiv">
                <img src={icon1} alt="protection's icon" />
              </div>
              <div className='info'>
                <h4>Safety and support</h4>
                <p>Our top priority is the sefety and well-being of our clients.
                We maintain high safety and have emergency support available during the trip.
                </p>
              </div>
            </div>
            
            <div className="singlePortifolio flex">
              <div className="iconDiv">
                <img src={icon2} alt="protection's icon" />
              </div>
              <div className='info'>
                <h4>Safety and support</h4>
                <p>Our top priority is the sefety and well-being of our clients.
                We maintain high safety and have emergency support available during the trip.
                </p>
              </div>
            </div>


            <div className="singlePortifolio flex">
              <div className="iconDiv">
                <img src={icon3} alt="protection's icon" />
              </div>
              <div className='info'>
                <h4>Safety and support</h4>
                <p>Our top priority is the sefety and well-being of our clients.
                We maintain high safety and have emergency support available during the trip.
                </p>
              </div>
            </div>

          </div>

        </div>

        <div className="rightContent">
          <img src={img} alt="" />
          
        </div>

      </div>
    </div>
  )
}

export default Portifolio


/* rafce  pour ecrire le premier syntaxe  */