import React from 'react'
import AccordionItem from './AccordionItem'


export default function Accordion({data, onDetailClick}) {
    
    const handleDetailClick = (index) => {
        onDetailClick(index)
    }
    return (
        <div className="accordion mt-4">
            {data.map((deck,index) => <AccordionItem key={index} item={deck} handleClick={() => handleDetailClick(index)}/>)}
        </div>
    )
}
