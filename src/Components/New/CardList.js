import React from 'react'

export default function CardList({ cards }) {
    return (
        <>
            {cards.map((card) => {
                return (
                    <div key={card.id} className="card col-4" >
                        <img src={card.imageUrl}  alt="no img found"/>
                        <div className ="card-body">
                        <h5 className ="card-title">{card.name}</h5>
                        <i className ="card-text">{card.flavor}</i>
                        <button className ="btn btn-primary">See More</button>
                        </div>
                    </div>
                )
            })}

        </>
    )
}
