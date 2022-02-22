import Navbar from "./Navbar"
import { render, screen } from '@testing-library/react'
import { HashRouter as Router } from 'react-router-dom'

test('renders home and characters header link', () => {
  render(<Router><Navbar /></Router>);
  const homeLink = screen.getByText('Home')
  const charactersLink = screen.getByText('Characters')
  expect(homeLink).toBeInTheDocument()
  expect(charactersLink).toBeInTheDocument()
});