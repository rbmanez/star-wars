import CharacterInfo from "./CharacterInfo"
import { render, screen } from "@testing-library/react" 
import { MemoryRouter } from 'react-router-dom'

describe('<CharacterInfo />', () => {
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
    
    test('renders name', () => {
        render(
            <MemoryRouter initialEntries={[{ pathname: '/characterInfo', state: { character: character }}]}>
                <CharacterInfo />
            </MemoryRouter>
        )
        screen.getByText('C-3PO')
    })
    
    test('renders birth_year', () => {
        render(
            <MemoryRouter initialEntries={[{ pathname: '/characterInfo', state: { character: character }}]}>
                <CharacterInfo />
            </MemoryRouter>
        )
        screen.getByText('Birth Year: 112BBY')
    })
    
    test('renders eye_color', () => {
        render(
            <MemoryRouter initialEntries={[{ pathname: '/characterInfo', state: { character: character }}]}>
                <CharacterInfo />
            </MemoryRouter>
        )
        screen.getByText('Eye Color: yellow')
    })
    
    test('renders height', () => {
        render(
            <MemoryRouter initialEntries={[{ pathname: '/characterInfo', state: { character: character }}]}>
                <CharacterInfo />
            </MemoryRouter>
        )
        screen.getByText('Height: 167 cm')
    })
    
    test('renders mass', () => {
        render(
            <MemoryRouter initialEntries={[{ pathname: '/characterInfo', state: { character: character }}]}>
                <CharacterInfo />
            </MemoryRouter>
        )
        screen.getByText('Mass: 75 kg')
    })
    
    test('renders gender', () => {
        render(
            <MemoryRouter initialEntries={[{ pathname: '/characterInfo', state: { character: character }}]}>
                <CharacterInfo />
            </MemoryRouter>
        )
        screen.getByText('Gender: n/a')
    })
    
    test('renders species', () => {
        render(
            <MemoryRouter initialEntries={[{ pathname: '/characterInfo', state: { character: character }}]}>
                <CharacterInfo />
            </MemoryRouter>
        )
        screen.getByText('Species:')
    })
    
    test('renders films', () => {
        render(
            <MemoryRouter initialEntries={[{ pathname: '/characterInfo', state: { character: character }}]}>
                <CharacterInfo />
            </MemoryRouter>
        )
        screen.getByText('Films:')
    })
})