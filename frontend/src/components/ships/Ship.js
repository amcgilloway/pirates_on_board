import React  from 'react';

const Ship = (props) => {
    const pirates = props.ship.pirates.map((pirate, index) => {
   return  <p key={index}>{pirate.firstName} {pirate.lastName}</p>
    })

		const url = "/ships/" + props.ship.id
		return (
				<div className="component">
					<a href={url}>
					<p className="name">
						{props.ship.name}
					</p>
					</a>
          <h4>Pirates</h4>
          {pirates}
				</div>
		)
	}

export default Ship;
