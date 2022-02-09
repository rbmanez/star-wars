import { render, screen } from '@testing-library/react'
import Character from './Character'

test('character name', () => {
    const character = {name: 'Luke Skywalker', species: [''], films: ['']}
    render(<Character character={character}/>)
    const h3Element = screen.getByTestId('name')
    expect(h3Element).toHaveTextContent('Luke Skywalker')
})