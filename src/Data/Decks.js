const cards = [
    {
        id: 0,
        name: 'Ajani\'s Welcome',
        cmc:  '1',
        set:  'M19',
        type: 'Enchantment'
    },
    {
        id: 1,
        name: 'Alley Evasion',
        cmc: '1',
        set: 'KLD',
        type: 'Instant'
    },
    {
        id: 2,
        name: 'Concordia Pegasus',
        cmc: '2',
        set: 'M21',
        type: 'Creature'
    },
    {
        id: 3,
        name: 'Containment Priest',
        cmc: '2',
        set: 'M21',
        type: 'Creature'
    },
    {
        id: 4,
        name: 'Ajani\'s Influence',
        cmc: '4',
        set: 'M19',
        type: 'Sorcery'
    }
]

const decks = [
    {
        deckid: 0,
        deckname: 'Deck One',
        decktype: 'deck one type',
        deckdescription: 'deck one description',
        decklist: cards,
    },
    {
        deckid: 1,
        deckname: 'Deck Two',
        decktype: 'deck two type',
        deckdescription: 'deck two description',
        decklist: cards,
    }

]

export default decks