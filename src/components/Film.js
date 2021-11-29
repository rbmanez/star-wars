import React, { useState, useEffect } from 'react'

function Film({ film }){
    const [filmName, setFilmName] = useState('')

    useEffect(() => {
        let mounted = true
        fetch(film)
            .then(res => res.json())
            .then(data => {
                if (mounted) return setFilmName(data.title)
            })
            .catch(e => console.log("Error: ", e))
        return () => mounted = false
    }, [film])

    return <p>- {!filmName ? 'loading...' : filmName}</p>
}

export default Film