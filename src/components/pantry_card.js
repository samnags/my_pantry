import React from 'react'
import { Link } from 'react-router'

const PantryCard = (props) => {
    let pantry = props.pantry
    return (
      <div className="pantrycard col span-1-of-4">
            <div className="pantryname"><Link to={`/pantries/${pantry.id}`} key={pantry.id}>{pantry.location}</Link></div>
            {/* <div className="chalkboard">Pantry</div> */}
            <div className="updated pink chalkboard">last updated at {pantry.updated_at}</div>
      </div>
    )
}

module.exports = PantryCard
