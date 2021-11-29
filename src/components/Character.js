import React from 'react'
import Film from './Film'
import Species from './Species'

function Character({ character }){
    const { name, birth_year, eye_color, height, mass, gender, species, films } = character
    return (
        <div className="card">
            <h3 data-testid="name">{name}</h3>
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
    )
}

export default Character 