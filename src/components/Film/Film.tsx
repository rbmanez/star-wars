import { useState, useEffect } from 'react'
import { getFilmData } from '../../api'

function Film({ filmsUrl }: {filmsUrl: string}){
    const [filmName, setFilmName] = useState<string>('')

    useEffect(() => {
        async function getFilmName(){
            const filmData = await getFilmData(filmsUrl)
            setFilmName(filmData.title)
        }
        getFilmName()
    }, [filmsUrl])

    return <p>- {!filmName ? 'loading...' : filmName}</p>
}

export default Film