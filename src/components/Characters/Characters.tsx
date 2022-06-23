import React, { useEffect, useState } from 'react'
import { characterActions } from '../../features/characterSlice'
import SearchBar from '../SearchBar/SearchBar'
import Character from '../Character/Character'
import { getCharactersData } from '../../api'
import { useAppDispatch, useAppSelector } from '../../store'

function Characters(){
    const characters = useAppSelector((state) => state.character.value)

    const dispatch = useAppDispatch()
    const [searchValue, setSearchValue] = useState<string>('')

    function handleTextInputChange(event: React.ChangeEvent<HTMLInputElement>){
        setSearchValue(event.target.value)
    }

    useEffect(() => {
        async function getCharacters(){
            const charactersData = await getCharactersData(`https://swapi.dev/api/people/?search=${searchValue}`)
            dispatch(characterActions(charactersData.results))
        }
        getCharacters()
    }, [searchValue, dispatch])

    return(
        <div className="char-film-container">
            <div>
                <h2>Star Wars Characters</h2>
                <SearchBar handleTextInputChange={handleTextInputChange} />
                <div>{characters.map((character, i) => <Character character={character} key={i}/>)}</div>
            </div>
        </div>
    )
}

export default Characters