import './Styles/custom.scss'
import decks from './Data/Decks.js'
import { useState } from 'react'
import Accordion from './Components/Accordion/Accordion'
import SearchComponent from './Components/Search/SearchComponent'
import DeckDetailView from './Components/Detail/DeckDetailView'
import DeckEditor from './Components/Detail/DeckEditor'


function App() {
  const [filteredDecks, setFilteredDecks] = useState(decks)
  const [masterDeckList, setMasterDeckList] = useState(decks)
  const [currentDeck, setCurrentDeck] = useState({})
  const [toggleAdd, setToggleAdd] = useState(false)
  const [toggleDetail, setToggleDetail] = useState(false)
  const [toggleEdit, setToggleEdit] = useState(false)
  
  const onFilterChange = (event) =>{
    let newcards = masterDeckList.filter(deck => deck.deckname.toLowerCase().includes(event.target.value.toLowerCase()))
    setFilteredDecks(newcards)
  }

  const handleToggleDetail = (index) => {
            if(filteredDecks[index].deckname === currentDeck.deckname)
            {
              setToggleDetail(!toggleDetail)
              setToggleEdit(false)
              setToggleAdd(false)
            }
            else{
              setToggleDetail(false)
              setCurrentDeck(filteredDecks[index])
              setToggleDetail(true)
              setToggleEdit(false)
              setToggleAdd(false)
            }
  }

  const handleAddDeck = () => {
    let newDeck = {
      deckid: masterDeckList.length,
      deckname: '',
      decktype: '',
      deckdescription: '',
      decklist: [],
    }
    setCurrentDeck(newDeck)
    setToggleAdd(!toggleAdd)
    setToggleEdit(!toggleEdit)
    setToggleDetail(false)
  }

  const saveDecks = (deck) => {
    
    let deckIndex = masterDeckList.findIndex((d) => d.deckid === deck.deckid)
      console.log(deckIndex)
    if(deckIndex !== -1)
      {
        console.log(deck)
      }
    else
      {
        setMasterDeckList([...masterDeckList, deck])
        setFilteredDecks([...masterDeckList, deck])
      }
      setToggleEdit(false)
      setToggleAdd(false)
  }

  return (
    <div className='row justify-content-center'>
      <div className="col-4">
        <SearchComponent onFilterChange={onFilterChange}/>
        <Accordion data={filteredDecks} onDetailClick={handleToggleDetail}/>
        {toggleAdd ? <></> : <button className='btn btn-primary container' onClick={handleAddDeck}>Add A New Deck</button>}
      </div>
      <div className="col-6">
        {toggleDetail ? <DeckDetailView deck={currentDeck} />: <></>}
        {toggleEdit || toggleAdd ? <DeckEditor deck={currentDeck} onSaveDeck={saveDecks}/>: <></>}
        <p>Details will go here, this will be a large card with decklist information, the edit details button, and remove button </p>
      </div>
    </div>
  );
}

export default App;
