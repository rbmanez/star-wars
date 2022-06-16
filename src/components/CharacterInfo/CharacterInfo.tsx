import Film from '../Film/Film'
import Species from '../Species/Species'
import { useLocation } from "react-router-dom"
import { CharacterInfoState } from '../../types'

function CharacterInfo(){
    const data = useLocation<CharacterInfoState>()
    const { name, birth_year, eye_color, height, mass, gender, species: speciesUrl, films: filmsUrls } = data.state.character
    
    return (
        <div className="char-film-container">
            <div className="card char-info">
                <h3>{name}</h3>
                <p>Birth Year: {birth_year}</p>
                <p>Eye Color: {eye_color}</p>
                <p>Height: {height} cm</p>
                <p>Mass: {mass} kg</p>
                <p>Gender: {gender}</p>
                <p>Species: {speciesUrl.length === 0 ? 'Human' : <Species speciesUrl={speciesUrl}/>}</p>
                <p>Films:</p>
                {
                    filmsUrls.length === 0
                    ? 'n/a'
                    : filmsUrls.map((filmsUrl, key) => <Film filmsUrl={filmsUrl} key={key}/>)
                }
            </div>
        </div>
    )
}

export default CharacterInfo