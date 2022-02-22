import Species from "./Species"
import { render, screen } from "@testing-library/react" 

test('renders speciesName', async () => {
    render(<Species species={['https://swapi.dev/api/species/2/']}/>)
    expect(await screen.findByText('Droid')).toBeInTheDocument()
})