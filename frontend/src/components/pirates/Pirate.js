import React  from 'react';
import {Link} from 'react-router-dom';

const Pirate = (props) => {

  const raids = props.pirate.raids.map((raid, index) => {
    return <p key={index}>{raid.location}</p>
  });

  const raidDiv = raids.length > 0? <div><h4>Raids:</h4>{raids}</div> : '';

  const url = "/pirates/" + props.pirate.id

  return (
    <div className="component">
      <Link to={url}>
        <p className="name">
          {props.pirate.firstName} {props.pirate.lastName}
        </p>
      </Link>
      <p>Age: {props.pirate.age}</p>
      <p>Ship: {props.pirate.ship.name}</p>
      {raidDiv}
    </div>
  )
}

export default Pirate;
