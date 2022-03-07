import SearchBar from "./SearchBar"
import { render, screen } from '@testing-library/react'

describe("<SearchBar />", () => {
    test("renders input element", () => {
        render(<SearchBar />)
        screen.getByTestId("searchbar")
    })
})