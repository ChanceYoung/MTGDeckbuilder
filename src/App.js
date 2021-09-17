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
            if(filteredDecks[index].deckid === currentDeck.deckid)
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

    if(deckIndex !== -1)
      {
        let updatedDeckList = masterDeckList
        updatedDeckList[deckIndex] = deck
        setMasterDeckList(updatedDeckList)
        setFilteredDecks(updatedDeckList)
        setCurrentDeck({})
      }
    else if(deck.deckname !== '')
      {
        setMasterDeckList([...masterDeckList, deck])
        setFilteredDecks([...masterDeckList, deck])
      }
      setToggleEdit(false)
      setToggleAdd(false)
  }

  const handleDeckRemoval = (id) => {
      let newDeckList = masterDeckList.filter((deck) => deck.deckid !== id)
      setFilteredDecks(newDeckList)
      setMasterDeckList(newDeckList)
      setToggleDetail(false)
  }

  const handleDeckEdit = (id) => {
    let deckEditIndex = masterDeckList.findIndex(deck => deck.deckid === id)
    setCurrentDeck(masterDeckList[deckEditIndex])
    setToggleEdit(!toggleEdit)
    setToggleDetail(false)
  }

  return (
    <div className='row justify-content-center mt-5'>
      <div className="col-4">
        <SearchComponent onFilterChange={onFilterChange}/>
        <Accordion data={filteredDecks} onDetailClick={handleToggleDetail}/>
        {toggleAdd ? <></> : <button className='btn btn-primary container' onClick={handleAddDeck}>Add A New Deck</button>}
      </div>
      <div className="col-6">
        {toggleDetail ? <DeckDetailView deck={currentDeck} removeDeck={handleDeckRemoval} editDeck={handleDeckEdit}/>: <></>}
        {toggleEdit || toggleAdd ? <DeckEditor deck={currentDeck} onSaveDeck={saveDecks}/>: <></>}
      </div>
    </div>
  );
}

export default App;
