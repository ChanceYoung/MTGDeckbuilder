import { useState } from 'react'
import AccordionBody from './AccordionBody'
import transitional from '../../Styles/transitional.module.css'

export default function AccordionItem({item, handleClick}) {
    const [isActive, setIsActive] = useState(false)

    return (
        <div className="accordion-item">
          <h2 className="accordion-header">
          <button
            className={isActive ? "accordion-button" : "accordion-button collapsed"}
            onClick={() => setIsActive(!isActive)}
          >
            {item.deckname}
          </button>
          </h2>
          <div className={isActive ? transitional.collapsibleactive : transitional.collapsible}>
          {isActive && <AccordionBody content={item} onDetailClick={handleClick}/>}
          </div>
        </div> 
    )
}
