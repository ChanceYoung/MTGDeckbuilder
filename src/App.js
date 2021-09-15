import './Styles/custom.scss'
import decks from './Data/Decks.js'
import { useState } from 'react'

function App() {
  const [filteredDecks, setFilteredDecks] = useState(decks)

  return (
    <div className='row'>
      <div className="col-2">
        <p>Filter box here</p>
        <p>Decklist will go here, accordian style</p>
      </div>
      <div className="col">
        <p>Details will go here, this will be a large card with decklist information, the edit details button, and remove button </p>
        <p>Show card button, which when toggled will show us the list of bootstrap cards that are representative of the cards that exist in the currently selected deck</p>
      </div>
    </div>
  );
}

export default App;
