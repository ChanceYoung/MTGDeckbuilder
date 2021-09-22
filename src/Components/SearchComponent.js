export default function SearchComponent({onFilterChange}) {
    return (
        <div className='row'>
        <div className="input-group">
            <span className="input-group-text" id="inputGroup-sizing-lg">Filter by Name</span>
          <input type="text" className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-lg" onChange={onFilterChange}/>
        </div>
    </div>
    )
}