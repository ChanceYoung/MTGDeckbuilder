import { useState } from "react"
import CardList from './CardList'
import {ReactComponent as RemovalIcon} from '../../Styles/x_icon.svg'
import {ReactComponent as EditIcon} from '../../Styles/edit_icon.svg'


export default function DeckDetailView({deck, removeDeck, editDeck}) {
    const [showCards, setShowCards] = useState(false)
    
    return (
        <div className="card">
          <div className="card-body">
            <div className='row'>
            <h5 className="card-title col">{deck.deckname}</h5>
            <button className="col-md-2 btn btn-secondary justify-content-center" onClick={() =>{editDeck(deck.deckid)}}>
            <EditIcon/>
            </button>
            <button className="col-md-2 btn btn-danger justify-content-center" onClick={() =>{removeDeck(deck.deckid)}}>
            <RemovalIcon/>
            </button>
            </div>
            <h6 className="card-subtitle mb-2 text-muted">{deck.decktype}</h6>
            <p className="card-text">{deck.deckdescription}</p>
            {showCards ? <CardList cards={deck.decklist} toggleVisible={() => {setShowCards(!showCards)}}/> : <button className="btn btn-primary"onClick={() => {setShowCards(!showCards)}}>Show Cards</button>}
          </div>

        </div>
    )
}
