import CharacterInfo from "./CharacterInfo"
import { render, screen } from "@testing-library/react" 
import { MemoryRouter } from 'react-router-dom'

test('renders name, birth_year, eye_color, height, mass, gender, species, films', () => {
    const character = {
        birth_year: "112BBY",
        eye_color: "yellow",
        films: ['https://swapi.dev/api/films/1/', 'https://swapi.dev/api/films/2/', 'https://swapi.dev/api/films/3/', 'https://swapi.dev/api/films/4/', 'https://swapi.dev/api/films/5/', 'https://swapi.dev/api/films/6/'],
        gender: "n/a",
        height: "167",
        mass: "75",
        name: "C-3PO",
        species: ['https://swapi.dev/api/species/2/']
    }
    
    render(
        <MemoryRouter initialEntries={[{ pathname: '/characterInfo', state: { character: character }}]}>
            <CharacterInfo />
        </MemoryRouter>
    )
    const name = screen.getByText('C-3PO')
    const birth_year = screen.getByText('Birth Year: 112BBY')
    const eye_color = screen.getByText('Eye Color: yellow')
    const films = screen.getByText('Films:')
    const gender = screen.getByText('Gender: n/a')
    const height = screen.getByText('Height: 167 cm')
    const mass = screen.getByText('Mass: 75 kg')
    const species = screen.getByText('Species:')

    expect(name).toBeInTheDocument()
    expect(birth_year).toBeInTheDocument()
    expect(eye_color).toBeInTheDocument()
    expect(films).toBeInTheDocument()
    expect(gender).toBeInTheDocument()
    expect(height).toBeInTheDocument()
    expect(mass).toBeInTheDocument()
    expect(species).toBeInTheDocument()
})