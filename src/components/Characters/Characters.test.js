import Characters from "./Characters"
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { HashRouter as Router } from 'react-router-dom'
import { createSlice, configureStore } from "@reduxjs/toolkit";

describe('<Characters />', () => {
    test('renders character name', () => {
        const characterSlice = createSlice({
            name: "character",
            initialState: { value: [{
                birth_year: "112BBY",
                eye_color: "yellow",
                films: ['https://swapi.dev/api/films/1/', 'https://swapi.dev/api/films/2/', 'https://swapi.dev/api/films/3/', 'https://swapi.dev/api/films/4/', 'https://swapi.dev/api/films/5/', 'https://swapi.dev/api/films/6/'],
                gender: "n/a",
                height: "167",
                mass: "75",
                name: "C-3PO",
                species: ['https://swapi.dev/api/species/2/']
            }]},
            reducers: {
                character: (state, action) => {
                    state.value = action.payload
                }
            }
        })
        const store = configureStore({
            reducer: {
            character: characterSlice.reducer,
            }
        })
        render(<Provider store={store}><Router><Characters /></Router></Provider>)
        screen.getByText('C-3PO')
    })
})