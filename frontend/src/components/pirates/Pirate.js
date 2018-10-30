import React  from 'react';
import {Link} from 'react-router-dom';

const Pirate = (props) => {

  const onDelete = () => {
    props.handleDelete(props.pirate.id);
  }

  const onEdit = () => {
    props.handleEdit(props.pirate.id)
  }

  if(!props.pirate){
    return null;
  }
  const raids = props.pirate.raids.map((raid, index) => {
    return <li key={index} >{raid.location}</li>
  });

  return (
    <div className="component">
        <Link to = {"/pirates/" + props.pirate.id} className="name">
          {props.pirate.firstName} {props.pirate.lastName}
        </Link>
      <p>Age: {props.pirate.age}</p>
      <p>Ship: {props.pirate.ship.name}</p>
      Raids:
      <ul>
        {raids}
      </ul>
      <button onClick={onDelete}>Delete Pirate</button>
      <button onClick={onEdit}>Edit Pirate</button>
    </div>
  )
}

export default Pirate;
