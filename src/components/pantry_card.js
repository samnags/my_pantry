import React from 'react'
import { Link } from 'react-router'

const PantryCard = (props) => {
    let pantry = props.pantry
    let date = new Date(pantry.updated_at)
    let formattedDate = date.toLocaleDateString()

    return (
      <div className="pantrycard col span-1-of-4">
            <div className="pantryname"><Link to={`/pantries/${pantry.id}`} key={pantry.id}>{pantry.location}</Link></div>
            {/* <div className="chalkboard">Pantry</div> */}
            <div className="updated pink chalkboard">last updated at {formattedDate}</div>
      </div>
    )
}

module.exports = PantryCard
