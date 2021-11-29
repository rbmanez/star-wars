import { createSlice } from "@reduxjs/toolkit";

export const characterSlice = createSlice({
    name: "character",
    initialState: { value: [{
        name: '',
        birth_year: '',
        eye_color: '',
        height: '',
        mass: '',
        gender: '',
        species: '',
        films: ''
    }]},
    reducers: {
        character: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { character } = characterSlice.actions

export default characterSlice.reducer