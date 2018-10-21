import React  from 'react';

const Ship = (props) => {

  function handleButtonClick() {
      props.deleteShip(props.ship.id)

  }

  const pirates = props.ship.pirates.map((pirate, index) => {
    const url = "/pirates/" + pirate.id;
    return <a href={url} key={index}><p>{pirate.firstName} {pirate.lastName}</p></a>
  })
		const url = "/ships/" + props.ship.id;
		return (
				<div className="component">
					<a href={url}>
					<p className="name">
						{props.ship.name}
					</p>
					</a>
          <h4>Pirates</h4>
          {pirates}
          <button onClick={handleButtonClick}>Delete Ship</button>
				</div>
		)
	}

export default Ship;
