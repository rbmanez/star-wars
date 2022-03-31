import SearchBar from "./SearchBar"
import { render, screen, fireEvent } from '@testing-library/react'

describe("<SearchBar />", () => {
    test("triggers handleChange function onChange", () => {
        const handleChange = jest.fn()
        const wrapper = render(<SearchBar handleChange={handleChange}/>)
        const input = wrapper.getByTestId("searchbar")
        fireEvent.change(input, { target: { value: "Luke" } })
        expect(handleChange).toHaveBeenCalled()
    })
})