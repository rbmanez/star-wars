import { render, screen } from '@testing-library/react'
import Character from './Character'
import { HashRouter as Router } from 'react-router-dom'

describe('<Character />', () => {
    test('renders character name', () => {
        render(<Router><Character character={{name: 'Luke Skywalker'}}/></Router>)
        screen.getByRole('heading', 'Luke Skywalker')
    })
})