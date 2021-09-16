import React from 'react'

export default function CardList({cards, toggleVisible}) {
    return (
        <>
        <ul className="list-group list-group-flush">
            {cards.map((card) => <li className='list-group-item'>{card.name}</li>)}
        </ul>
        <button className="btn btn-secondary container" onClick={toggleVisible}>{'\u2716'}</button>
        </>
    )
}
