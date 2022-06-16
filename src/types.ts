export interface FilmProp {
    characters: string[];
    created: string;
    director: string; 
    edited: string; 
    episode_id: number;
    opening_crawl: string; 
    planets: string[];
    producer: string;
    release_date: string; 
    species: string[];
    starships: string[];
    title: string; 
    url: string; 
    vehicles: string[];
}

export interface SpeciesProp {
    average_height: string;
    average_lifespan: string;
    classification: string;
    created: string;
    designation: string;
    edited: string;
    eye_colors: string;
    films: string[];
    hair_colors: string;
    homeworld: null | string;
    language: string;
    name: string;
    people: string[];
    skin_colors: string;
    url: string;
}

export interface CharacterProp {
    birth_year: string;
    created: string;
    edited: string;
    eye_color: string;
    films: string[];
    gender: string;
    hair_color: string;
    height: string;
    homeworld: string;
    mass: string;
    name: string;
    skin_color: string;
    species: string;
    starships: string[];
    url: string;
    vehicles: string[];
}

export interface CharacterInfoState {
    character: CharacterProp;
}

export interface FetchedCharacterData {
    count: number;
    next: null | string;
    previous: null | string;
    results: CharacterProp[];
}

export interface Error {
    name: string;
    message: string;
    stack?: string;
}
