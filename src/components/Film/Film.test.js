import Film from "./Film"
import { render, screen } from "@testing-library/react" 

describe('<Film />', () => {
    test('renders filmName', async () => {
        render(<Film film='https://swapi.dev/api/films/1/'/>)
        expect(await screen.findByText('- A New Hope')).toBeInTheDocument()
    })
})