import React from 'react'

function SearchBar({ handleChange }){
    return(
        <div id="search-container">
            <input type="text" placeholder="search for character name" onChange={handleChange}/>
        </div>
    )
}

export default SearchBar