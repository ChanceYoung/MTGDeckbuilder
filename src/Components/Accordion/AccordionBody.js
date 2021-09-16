import {ReactComponent as MGicon} from '../../Styles/search_icon.svg'

export default function AccordionBody({content, onDetailClick}) {

    return (
        <div className="accordion-body">
            <div className='row'>
                <h1 className="badge bg-secondary col-md-2 justify-content-center text-wrap">{content.decktype}</h1>
                <p className="col-md-7">Number of Cards: <span>{content.decklist.length}</span></p>
                <div className="col-md-1">
                    <button onClick={onDetailClick} className='text-center btn btn-primary'>
                    <MGicon/>
                    </button>
                </div>
            </div>
        </div>
    )
}
