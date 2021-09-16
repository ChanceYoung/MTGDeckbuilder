import React from 'react'
import { useState } from 'react'

export default function DeckEditor({deck, onSaveDeck}) {
    const [editedDeck, setEditedDeck] = useState(deck)

   const onDeckNameChange = (event) => {
    setEditedDeck({
      ...editedDeck,
       deckname: event.target.value,
    })
   }
   
   const onDeckDescriptionChange = (event) => {
    setEditedDeck({
      ...editedDeck,
       deckdescription: event.target.value,
    })
   }

   const saveDeck = () => {
       onSaveDeck(editedDeck)
   }

    return (
        <form classNameName="row g-3" onSubmit={saveDeck}>
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">Deck Name</label>
              <input type="text" className="form-control" value={editedDeck.deckname} onChange={onDeckNameChange}/>
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">Description</label>
              <input type="text" className="form-control" id="inputPassword4" value={editedDeck.deckdescription} onChange={onDeckDescriptionChange}/>
            </div>
            <button type="submit"> </button>
        </form>
    )
}
