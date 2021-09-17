import React, { useState } from 'react'
import SearchBar from './SearchBar'

function Characters({ characters }){
    const [searchValue, setSearchValue] = useState('')

    function handleChange(e){
        setSearchValue(e.target.value)
    }

    return(
        <div className="char-film-container">
            <div>
                <h2>Star Wars Characters</h2>
                <SearchBar handleChange={handleChange}/>
                {characters.filter(c=>{
                    if(searchValue === ""){
                        return c
                    } else if (c.name.toLowerCase().includes(searchValue.toLowerCase())) {
                        return c
                    } else {
                        return null
                    }
                }).map((c, i)=>{
                    return(
                        <div className="card" key={i}>
                            <h3>{c.name}</h3>
                            <p>Birth Year: {c.birth_year}</p>
                            <p>Eye Color: {c.eye_color}</p>
                            <p>Height: {c.height} cm</p>
                            <p>Mass: {c.mass} kg</p>
                            <p>Gender: {c.gender}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Characters