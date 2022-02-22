import Home from "./Home"
import { render, screen } from '@testing-library/react'

test('renders div', () => {
    render(<Home />)
    expect(screen.getByTestId('home')).toBeInTheDocument()
})