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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [speciesUrl])

    return <span>{speciesName}</span>
}

export default Species