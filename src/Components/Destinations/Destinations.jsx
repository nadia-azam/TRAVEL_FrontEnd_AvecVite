import React,{useEffect} from 'react'
import './Destinations.css'

import Aos from 'aos'
import 'aos/dist/aos.css'

//imported icons
import {MdLocationPin} from "react-icons/md"
import {BsFillCalendarDateFill} from 'react-icons/bs'
import {BsFillCreditCardFill} from 'react-icons/bs'
import {BiSearchAlt} from 'react-icons/bi'
import {TiLocation} from 'react-icons/ti'

//imported images
import image1 from '../../Assets/image1.jpg'
import image2 from '../../Assets/image2.jpg'
import image3 from '../../Assets/image3.jpg'
import image4 from '../../Assets/image4.jpg'
import image5 from '../../Assets/image5.jpg'
import image6 from '../../Assets/image6.jpg'


// lets create an array for all destination and we loop
const destination = [
  {
    id:1,
    image : image1,
    name: 'Seychelles Island',
    location: 'Indian Ocean',
    rating: 4.7,
  },
  {
    id:2,
    image : image2,
    name: 'Seychelles Island',
    location: 'Indian Ocean',
    rating: 4.7,
  },
  {
    id:3,
    image : image3,
    name: 'Seychelles Island',
    location: 'Indian Ocean',
    rating: 4.7,
  },
  {
    id:4,
    image : image4,
    name: 'Seychelles Island',
    location: 'Indian Ocean',
    rating: 4.7,
  },
  {
    id:5,
    image : image5,
    name: 'Seychelles Island',
    location: 'Indian Ocean',
    rating: 4.7,
  },
  {
    id:6,
    image : image6,
    name: 'Seychelles Island',
    location: 'Indian Ocean',
    rating: 4.7,
  },

]

const Destinations = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])

  return (
    <div className='destination section container'>
      <div className="secContainer">

        <div className="secTitle">
          <span data-aos='fade-up' className="redText">
            EXPLORE NOW
          </span>
          <h3 data-aos='fade-up'>Find your Dream Destination</h3>
          <p data-aos='fade-up'>Fill in the fields below to find the best spot for your  next tour.</p>
        </div>

        <div className="searchField grid">

          <div data-aos='fade-up' className="inputField flex">
            <MdLocationPin className="icon"/>
            <input type="text" placeholder='Location' />
          </div>

          <div data-aos='fade-up' className="inputField flex">
            <BsFillCreditCardFill className="icon"/>
            <input type="text" placeholder='Budget'/>
          </div>

          <div data-aos='fade-up' className="inputField flex">
            <BsFillCalendarDateFill className="icon"/>
            <input type="text" placeholder='Date'/>
          </div>

          <button data-aos='fade-up' className='btn flex'><BiSearchAlt className='icon'/>Search</button>

          
        </div>

        <div className='secMenu' >
          <ul className='flex' data-aos='fade-up'>
            <li data-aos='fade-up' className="active">All</li>
            <li>Recommended</li>
            <li>Beach</li>
            <li>Park</li>
            <li>Nature</li>
            <li>Montain</li>
          </ul>
        </div>

        <div className="destinationContainer grid">
          {destination.map(destination=> {
            return (
              <div data-aos='fade-up' className="singleDestination" key={destination.id}>
              <div className="imgDiv">
                <img src={destination.image} alt="Destination image"/>
              
                <div className="descInfo flex">
                  <div className="text">
                    <span className="name">{destination.name}</span>
                    <p className='flex'><TiLocation className='icon'/>{destination.location}</p>
                  </div>
                  <span className="rating">{destination.rating}</span>
                </div>
                </div>
               </div>
            )
          })}
          
        </div>

      </div>
    </div>
  )
}

export default Destinations

/* heta kandir style ghi b image whda w ndir fake name w location 3ad mn b3d ndir array w loop w doouk {} */


/* rafce  pour ecrire le premier syntaxe  */