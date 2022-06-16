import { Link } from 'react-router-dom'
import { CharacterProp } from '../../types'

function Character({ character }: {character: CharacterProp}){
    const { name } = character
    return (
        <div className="card">
                <Link to={{ pathname: '/characterInfo', state: { character: character }}}>
                    <h3 data-testid="name">{name}</h3>
                </Link>
        </div>
    )
}

export default Character 