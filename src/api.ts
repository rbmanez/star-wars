import { Error, FilmProp, SpeciesProp, FetchedCharacterData } from './types'

async function fetchApi(url: string){
    const response = await fetch(url)
        .then(result => result.json())
        .catch((error: Error) => console.log("Error: ", error))
    return response
}

export async function getFilmData(url: string){
    const filmData: FilmProp = await fetchApi(url)
    return filmData
}

export async function getSpeciesData(url: string){
    const speciesData: SpeciesProp = await fetchApi(url)
    return speciesData
}

export async function getCharactersData(url: string){
    const charactersData: FetchedCharacterData = await fetchApi(url)
    return charactersData
}