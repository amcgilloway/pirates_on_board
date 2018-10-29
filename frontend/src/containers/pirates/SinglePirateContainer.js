import React, {Component} from 'react';
import Pirate from '../../components/pirates/Pirate.js';
import PirateDetails from '../../components/pirates/PirateDetails.js';

import Request from '../../helpers/request.js';

class SinglePirateContainer extends Component {
  constructor(props){
    super(props);
    this.state = {pirate: null}
  }

  componentDidMount(){
    let request = new Request()
    const url = '/api/pirates/' + this.props.id + '?projection=embedShip';
    request.get(url).then((data) => {
      this.setState({pirate: data})
    })
  }


  render(){
    if(!this.state.pirate){
      return null;
    }
    return (
      <div className = "component">
       <Pirate pirate = {this.state.pirate} />
       <PirateDetails raids={this.state.pirate.raids} />
     </div>
    )
  }
}

export default SinglePirateContainer;
