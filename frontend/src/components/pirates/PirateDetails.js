import React  from 'react';
import {Link} from 'react-router-dom';

const PirateDetails = (props) => {

  if(!props.raids){
    return null;
  }
  const raids = props.raids.map((raid, index) => {
    return <li key = {index}>{raid.location}</li>
  })

  return (
    <React.Fragment>
    Raids:
    <ul>
    {raids}
    </ul>
    </React.Fragment>
  )
}

export default PirateDetails;
