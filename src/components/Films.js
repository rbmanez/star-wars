import React, { useState } from 'react'
import SearchBar from './SearchBar'

function Films({ films }){

    const [searchValue, setSearchValue] = useState('')
    
    function handleChange(e){
        setSearchValue(e.target.value)
    }

    return (
        <div className="char-film-container">
            <div>
                <h2>Star Wars Films</h2>
                    <SearchBar handleChange={handleChange} placeholderString="search for film title"/>
                    {films.filter((film)=>{
                        if (film === ''){
                            return film
                        } else if(film.title.toLowerCase().includes(searchValue.toLowerCase())){
                            return film
                        } else {
                            return null
                        }
                    }).map((f, i) => {
                        return(
                            <div className="card" key={i}>
                                <h3>{f.title}</h3>
                                <p>Episode ID: {f.episode_id}</p>
                                <p>Director: {f.director}</p>
                                <p>Release Date:{f.release_date}</p>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}

export default Films