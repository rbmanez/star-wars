import Navbar from "./Navbar"
import { render, screen } from '@testing-library/react'
import { HashRouter as Router } from 'react-router-dom'

describe('<Navbar />', () => {
  test('renders home header link', () => {
    render(<Router><Navbar /></Router>);
    screen.getByText('Home')
  });
  
  test('renders characters header link', () => {
    render(<Router><Navbar /></Router>);
    screen.getByText('Characters')
  });
})