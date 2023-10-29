import React, {useState} from 'react'
import './Questions.css'

// imported icons
import {BsArrowDownCircle} from 'react-icons/bs'
import {BsArrowUpCircle} from 'react-icons/bs'

const Accordion = ({title , desc , active, setActive}) => {

  return (
    <div className='accordionContainer'>
        <span className="title flex">
          {title}<span onClick={()=> setActive(title)}> {active===title ? (<BsArrowUpCircle className='icon'/>):(< BsArrowDownCircle className='icon'/>)}</span>
        </span>

        <p className={(active === title ? 'show' : '')+"description"}>
          {desc}
        </p>
        
    </div>
  );
};

export default Accordion