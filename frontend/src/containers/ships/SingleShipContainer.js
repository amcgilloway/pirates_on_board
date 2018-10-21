import React, {Component} from 'react';

import ShowShip from '../../components/ships/ShowShip.js';
import Request from '../../helpers/request';

class SingleShipContainer extends Component {
  constructor(props){
    super(props);
    this.state = {ship: null}
    this.url = '/ships/' + props.match.params.id + "?projection=embedPirates";
    this.deleteShip = this.deleteShip.bind(this);
  }

  componentDidMount(){
    const request = new Request(this.url);
    request.get().then((data) => {
      this.setState({ship: data})
    })
  }

  deleteShip(id){
    const request = new Request("/ships/" + id)
    request.delete()
    window.location = '/ships'

  }

  render(){
    if(!this.state.ship){
      return null;
    };
    return (
      <div className="singlePirate">
        <ShowShip ship={this.state.ship} deleteShip={this.deleteShip}/>
      </div>
    );
  }
}

export default SingleShipContainer;
