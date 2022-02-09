import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { character } from '../../features/characterSlice'
import SearchBar from '../SearchBar/SearchBar'
import Character from '../Character/Character'

function Characters(){
    const characters = useSelector((state) => state.character.value)
    const dispatch = useDispatch()
    const [searchValue, setSearchValue] = useState('')

    function handleChange(e){
        setSearchValue(e.target.value)
    }

    function getCharacters(searchVal){
        fetch(`https://swapi.dev/api/people/?search=${searchVal}`)
            .then(res => res.json())
            .then(data => dispatch(character(data.results)))
            .catch(e => console.log("Error: ", e))
    }

    useEffect(() => {
        getCharacters(searchValue)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchValue, dispatch])

    return(
        <div className="char-film-container">
            <div>
                <h2>Star Wars Characters</h2>
                <SearchBar handleChange={handleChange} placeholderString="search for character name"/>
                <div>{characters.map((character, i) => <Character character={character} key={i}/>)}</div>
            </div>
        </div>
    )
}

export default Characters