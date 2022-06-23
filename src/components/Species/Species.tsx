import { useState, useEffect } from 'react'
import { getSpeciesData } from '../../api'

function Species({ speciesUrl }: {speciesUrl: string}){
    const [speciesName, setSpeciesName] = useState<string>('')

    useEffect(() => {
        async function getSpeciesName(){
            const speciesData = await getSpeciesData(speciesUrl)
            setSpeciesName(speciesData.name)
        }
        getSpeciesName()
    }, [speciesUrl])

    return <span>{speciesName}</span>
}

export default Species