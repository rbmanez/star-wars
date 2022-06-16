import Species from "./Species"
import { render, screen } from "@testing-library/react" 

describe('<Species />', () => {
    test('renders speciesName', async () => {
        render(<Species speciesUrl={'https://swapi.dev/api/species/2/'}/>)
        expect(await screen.findByText('Droid')).toBeInTheDocument()
    })
})