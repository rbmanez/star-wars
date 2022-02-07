import React from 'react'
import Film from './Film'
import Species from './Species'

import {useLocation} from "react-router-dom"

function CharacterInfo(){
    let data = useLocation()
    const { name, birth_year, eye_color, height, mass, gender, species, films } = data.state.character
    
    return (
        <div className="char-film-container">
            <div className="card char-info">
                <h3>{name}</h3>
                <p>Birth Year: {birth_year}</p>
                <p>Eye Color: {eye_color}</p>
                <p>Height: {height} cm</p>
                <p>Mass: {mass} kg</p>
                <p>Gender: {gender}</p>
                <p>Species: {species.length === 0 ? 'Human' : <Species species={species}/>}</p>
                <p>Films:</p>
                {
                    films.length === 0
                    ? 'n/a'
                    : films.map((film, key) => <Film film={film} key={key}/>)
                }
            </div>
        </div>
    )
}

export default CharacterInfo