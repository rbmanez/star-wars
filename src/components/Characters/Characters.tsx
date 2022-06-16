import React, { useEffect, useState } from 'react'
import { characterActions } from '../../features/characterSlice'
import SearchBar from '../SearchBar/SearchBar'
import Character from '../Character/Character'
import { getCharactersData } from '../../api'

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../../store'
// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

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
        // eslint-disable-next-line react-hooks/exhaustive-deps
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