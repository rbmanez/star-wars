import React, { useState, useEffect } from 'react'

function Species({ species }){
    const [sepciesName, setSpeciesName] = useState('')

    function getSpecies(speciesUrl, setSpeciesNameState){
        let mounted = true;
        fetch(speciesUrl)
            .then(res => res.json())
            .then(data => {
                if (mounted) return setSpeciesNameState(data.name)
            })
            .catch(e => console.log("Error: ", e))
        return () => mounted = false;
    }

    useEffect(() => {
        getSpecies(species, setSpeciesName)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [species])

    return <span>{sepciesName}</span>
}

export default Species