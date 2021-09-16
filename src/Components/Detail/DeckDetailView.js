import { useState } from "react"
import CardList from './CardList'

export default function DeckDetailView({deck}) {
    const [showCards, setShowCards] = useState(false)
    
    return (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{deck.deckname}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{deck.decktype}</h6>
            <p className="card-text">{deck.deckdescription}</p>
            {showCards ? <CardList cards={deck.decklist} toggleVisible={() => {setShowCards(!showCards)}}/> : <button className="btn btn-primary"onClick={() => {setShowCards(!showCards)}}>Show Cards</button>}
          </div>
        </div>
    )
}
