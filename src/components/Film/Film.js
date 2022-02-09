import React, { useState, useEffect } from 'react'

function Film({ film }){
    const [filmName, setFilmName] = useState('')

    function getFilm(){
        let mounted = true
        fetch(film)
            .then(res => res.json())
            .then(data => {
                if (mounted) return setFilmName(data.title)
            })
            .catch(e => console.log("Error: ", e))
        return () => mounted = false
    }

    useEffect(() => {
        getFilm()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [film])

    return <p>- {!filmName ? 'loading...' : filmName}</p>
}

export default Film