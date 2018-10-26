import React, {Component} from 'react';

import Request from '../../helpers/request';
import PirateForm from '../../components/pirates/PirateForm'

class PirateFormContainer extends Component {
  constructor(props){
    super(props);
    this.state = {ships: []};
    this.handlePiratePost = this.handlePiratePost.bind(this);
    console.log("Pirate Form")
  }

  componentDidMount(){
    const request = new Request();
    request.get("/api/ships").then((data) => {
      this.setState({ships: data._embedded.ships})
    });
  }

  handlePiratePost(pirate){
    const request = new Request();
    request.post('/pirates', pirate)
  }

  render(){

    return <PirateForm ships = {this.state.ships} handlePiratePost= {this.handlePiratePost} />

  }
}

export default PirateFormContainer;
