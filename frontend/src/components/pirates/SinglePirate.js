import React  from 'react';



const SinglePirate = (props) => {

  function handleButtonClick(){
    props.deletePirate(props.pirate.id);
  }

  const total = props.pirate.raids.reduce((total, raid) => {
    return total + raid.loot;
  },0)
  const raids = props.pirate.raids.map((raid, index) => {
    return <p key={index}>{raid.location}</p>
  });


  return (
    <div className="component">
        <p className="name">
          {props.pirate.firstName} {props.pirate.lastName}
        </p>
      <p>Age: {props.pirate.age}</p>
      <p>Ship: {props.pirate.ship.name}</p>
      <h4>Raids</h4>
      {raids}
      <p>Total from raids = {total}</p>
      <button onClick={handleButtonClick}>Delete</button>
    </div>
  )
}

export default SinglePirate;
