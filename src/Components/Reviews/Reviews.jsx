import React from 'react'
import './Reviews.css'

//imported imagess
import image1 from '../../Assets/pic-3.png'
import image2 from '../../Assets/pic-4.png'
import image3 from '../../Assets/pic-5.png'
import image4 from '../../Assets/pic-6.png'
import image5 from '../../Assets/image7.jpg'


// imported icon
import {AiFillStar} from 'react-icons/ai'

const Reviews = () => {
  return (
    <div className='review section container'>
      <div className="secContainer grid">

        <div className="textDiv">
          <span className="redText">
            FROM OUR CLIENTS
          </span>
          <h3>Real travel History From Our Beloved Clients</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Nam officia in voluptatem fugit fuga dolore repellat quae
            sequi laboriosam nesciunt.</p>
          
          <span className="stars flex">
            <AiFillStar className='icon'/>
            <AiFillStar className='icon'/>
            <AiFillStar className='icon'/>
            <AiFillStar className='icon'/>
            <AiFillStar className='icon'/>
          </span>

          <div className="clientsImages flex">
             <img src={image1} alt="" />
             <img src={image2} alt="" />
             <img src={image3} alt="" />
             <img src={image4} alt="" />
          </div>          
        </div>

        <div className="imgDiv">
          <img src={image5} alt="Div image" />
        </div>
      </div>
    </div>
  )
}

export default Reviews


/* rafce  pour ecrire le premier syntaxe  */