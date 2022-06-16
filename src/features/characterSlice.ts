import { createSlice } from "@reduxjs/toolkit";

export const characterSlice = createSlice({
    name: "character",
    initialState: { value: [{
        birth_year: '',
        created: '',
        edited: '',
        eye_color: '',
        films: [''],
        gender: '',
        hair_color: '',
        height: '',
        homeworld: '',
        mass: '',
        name: '',
        skin_color: '',
        species: '',
        starships: [''],
        url: '',
        vehicles: ['']
    }]},
    reducers: {
        character: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { character: characterActions } = characterSlice.actions

export default characterSlice.reducer