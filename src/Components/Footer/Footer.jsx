import React from 'react'
import './Footer.css'


// imported icons
import {BiLogoMediumOld} from 'react-icons/bi'
import {ImFacebook} from 'react-icons/im'
import {BsTwitter} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="secContainer container grid">

          <div>
          <div className="footerLogo">
            <BiLogoMediumOld className='icon'/>
            <span>OU-Trips</span>
          </div>

          <div className="socilas flex">
            <ImFacebook className='icon'/>
            <BsTwitter className='icon'/>
            <AiFillInstagram className='icon'/>
          </div>
          </div>

          <div className="footerLinks">
            <span className="linkTitle">Information</span>
           
              <li><a href="">Home </a></li>
              <li><a href="">Explore </a></li>
              <li><a href="">Travel </a></li>
              <li><a href="">Blog </a></li>
            
          </div>
          <div className="footerLinks">
            <span className="linkTitle">Helpful links</span>
            
            <li> <a href="">Destination</a></li>
            <li> <a href="">Support</a></li>
            <li> <a href="">Travel & conditions</a></li>
            <li> <a href="">Privacy</a></li>
            
          </div>

          <div className="footerLinks">
            <span className="linkTitle">Contact Details</span>
            <span className="phone">+212 6 08 25 15 22</span>
            <span className="email">azam.nadia.2002@gmail.com</span>
            
          </div>

        </div>
    </div>
  )
}

export default Footer


/* rafce  pour ecrire le premier syntaxe  */