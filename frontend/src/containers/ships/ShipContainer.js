import React, {Component} from 'react';
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ShipList from '../../components/ships/ShipList.js';

import Request from '../../helpers/request.js';

class ShipContainer extends Component {
  constructor(props){
    super(props);
    this.state = {ships: []}
  }

  componentDidMount(){
    let request = new Request('/ships')
    request.get().then((data) => {
      this.setState({ships: data._embedded.ships})
    })
  }


  render(){


    return (
      <ShipList ships={this.state.ships}/>
    );
  }
}

export default ShipContainer;
