import SearchBar from "./SearchBar"
import { render, fireEvent } from '@testing-library/react'

describe("<SearchBar />", () => {
    test("triggers handleChange function onChange", () => {
        const handleTextInputChange = jest.fn()
        const wrapper = render(<SearchBar handleTextInputChange={handleTextInputChange}/>)
        const input = wrapper.getByTestId("searchbar")
        fireEvent.change(input, { target: { value: "Luke" } })
        expect(handleTextInputChange).toHaveBeenCalled()
    })
})