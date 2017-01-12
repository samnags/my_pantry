import React from 'react'
import { Link } from 'react-router'
import '../../public/app.css'
import { Col } from 'react-bootstrap';

const PantryCard = (props) => {
    let pantry = props.pantry
    return (
      <div className="pantrycard">
        <div className="section group">
          {/* <div className=".span-1-of-12"> */}
            <div className="pantryname"><Link to={`/pantries/${pantry.id}`} key={pantry.id}>{pantry.location}</Link></div>
            <div className="updated pink chalkboard">last updated at {pantry.updated_at}</div>
          {/* </div> */}
        </div>
      </div>
    )
}

module.exports = PantryCard
