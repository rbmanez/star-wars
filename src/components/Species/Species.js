import React, { useState, useEffect } from 'react'

function Species({ species }){
    const [speciesName, setSpeciesName] = useState('')

    function getSpecies(){
        let mounted = true;
        fetch(species)
            .then(res => res.json())
            .then(data => {
                if (mounted) return setSpeciesName(data.name)
            })
            .catch(e => console.log("Error: ", e))
        return () => mounted = false;
    }

    useEffect(() => {
        getSpecies()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [species])

    return <span>{speciesName}</span>
}

export default Species