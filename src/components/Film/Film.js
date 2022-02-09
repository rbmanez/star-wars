import React, { useState, useEffect } from 'react'

function Film({ film }){
    const [filmName, setFilmName] = useState('')

    function getFilm(filmUrl, setFilmNameState){
        let mounted = true
        fetch(filmUrl)
            .then(res => res.json())
            .then(data => {
                if (mounted) return setFilmNameState(data.title)
            })
            .catch(e => console.log("Error: ", e))
        return () => mounted = false
    }

    useEffect(() => {
        getFilm(film, setFilmName)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [film])

    return <p>- {!filmName ? 'loading...' : filmName}</p>
}

export default Film