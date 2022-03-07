import React from 'react'

function SearchBar({ handleChange, placeholderString }){
    return(
        <div id="search-container">
            <input data-testid="searchbar" type="text" placeholder={placeholderString} onChange={handleChange}/>
        </div>
    )
}

export default SearchBar