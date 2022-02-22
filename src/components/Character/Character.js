import React from 'react'
import { Link } from 'react-router-dom'

function Character({ character }){
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