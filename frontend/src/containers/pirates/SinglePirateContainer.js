import React, {Component} from 'react';

import SinglePirate from '../../components/pirates/SinglePirate.js';
import Request from '../../helpers/request';

class SinglePirateContainer extends Component {
  constructor(props){
    super(props);
    this.state = {pirate: null}
    this.url = '/pirates/' + props.match.params.id + "?projection=embedShip";
    this.deletePirate = this.deletePirate.bind(this);
  }

  componentDidMount(){
    const request = new Request(this.url);
    request.get().then((data) => {
      console.log(data);
      this.setState({pirate: data})
    })
  }

  deletePirate(id){
    const request = new Request("/pirates/" + id)
    request.delete()
    window.location = '/pirates'
  }

  render(){
    if(!this.state.pirate){
      return null;
    };
    return (
      <div className="singlePirate">
        <SinglePirate pirate={this.state.pirate} deletePirate={this.deletePirate}/>
      </div>
    );
  }
}

export default SinglePirateContainer;
