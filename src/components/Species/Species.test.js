import Species from "./Species"
import { render, screen } from "@testing-library/react" 

describe('<Species />', () => {
    test('renders speciesName', async () => {
        render(<Species species={['https://swapi.dev/api/species/2/']}/>)
        await screen.findByText('Droid')
    })
})