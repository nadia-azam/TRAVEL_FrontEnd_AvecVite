import React, {useState} from 'react'
import './Questions.css'

import Accordion from './Accordion'

const Questions = () => {
  const [active , setActive] = useState("title1")
  return (
    <div className='questions section container'>

      <div className="secHeading">
        <h3>Frequently Asked Questions</h3>
      </div>

      <div className="secContainer grid">
        <div className="accordion grid">
          <Accordion title="title1" desc="hiiii" active={active} setActive={setActive}/>
          <Accordion title="title2" desc="how can i just see the catalog" active={active} setActive={setActive}/>
         
        </div>

        <div className="form">

          <div className="secHeading">
            <h3>Do you have any specific question?</h3>
            <p>Please fill the form bellow and our dedicated team will get intouch with you as soon as possible.</p>
          </div>

          <div className="formContent grid">
            <input type="email" placeholder='Enter email address'/>
            <textarea placeholder='Enter you question here'></textarea>
            <button className='btn'>Submit Inquiry</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Questions


/* rafce  pour ecrire le premier syntaxe  */