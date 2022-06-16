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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filmsUrl])

    return <p>- {!filmName ? 'loading...' : filmName}</p>
}

export default Film