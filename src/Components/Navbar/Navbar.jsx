import React, { useState } from 'react'
import './Navbar.css'
import {BiLogoMediumOld} from 'react-icons/bi'
import {AiFillCloseCircle} from 'react-icons/ai'
import {PiDotsNineBold} from 'react-icons/pi'

const Navbar = () => {
  
  const [navBar , setNavBar] = useState("menu");    /* creation d une variable initialise a menu  n9dro nktbo blast navBar active w hta {active}*/
  const showNavBar = ()=>{
    setNavBar("menu showNavBar");
  };
  const removeNavBar = ()=>{
    setNavBar("menu ");
  };

  return (    
    <div className='navBar'>

      <div className="logoDiv">
        <BiLogoMediumOld className='icon'/>
        <span>OU-Trips</span>
      </div>

      <div className={navBar}>
        <ul>
          <li className='navList'>Destinations</li>
          <li className='navList'>About Us</li>
          <li className='navList'>Testimonial</li>
          <li className='navList'>Gallery</li>
        </ul>
        <AiFillCloseCircle className='icon closeIcon' onClick={removeNavBar}/>
      </div>

      <button className="signUpBtn btn">
          Sign Up
      </button>

      <PiDotsNineBold className='icon menuIcon' onClick={showNavBar}/>

    </div>
  
)}

export default Navbar


/* rafce  pour ecrire le premier syntaxe  */