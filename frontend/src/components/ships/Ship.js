import React  from 'react';
import {Link} from 'react-router-dom'

const Ship = (props) => {

	if(!props.ship){
		return null;
	}
	return (
		<div className="component">
				<Link to = {"/ships/" + props.ship.id} className="name">
					{props.ship.name}
				</Link>
		</div>
	)
}


export default Ship;
