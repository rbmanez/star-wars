import { render, screen } from '@testing-library/react';
import App from '../../App';

test('renders home and characters header link', () => {
  render(<App />);
  const divElement = screen.getByTestId('app')
  expect(divElement).toHaveTextContent('Characters')
  expect(divElement).toHaveTextContent('Home')
});
