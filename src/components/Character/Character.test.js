import { getByRole, render, screen } from '@testing-library/react'
import Character from './Character'
import { HashRouter as Router } from 'react-router-dom'

test('character name', () => {
    render(<Router><Character character={{name: 'Luke Skywalker'}}/></Router>)
    expect(screen.getByRole('heading', 'Luke Skywalker')).toBeInTheDocument()
})