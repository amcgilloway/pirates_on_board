import React, {Component} from 'react';

import Request from '../../helpers/request';
import PirateEditForm from '../../components/pirates/PirateEditForm'

class PirateEditFormContainer extends Component {
  constructor(props){
    super(props);
    this.state = {ships: [], pirate: null, raids: []};
    this.handlePirateEdit = this.handlePirateEdit.bind(this);
  }

  componentDidMount(){
    const request = new Request();
    request.get("/api/ships").then((ships) => {
      this.setState({ships: ships._embedded.ships})
    });
    request.get("/api/pirates/" + this.props.id).then((pirate) => {
      this.setState({pirate: pirate})
    });
    request.get("/api/raids").then((raids) => {
      this.setState({raids: raids._embedded.raids})
    });
  }

  handlePirateEdit(pirate){
    const request = new Request();
    request.patch('/api/pirates/' + this.props.id, pirate).then(() => {
      window.location = '/pirates'
    })
  }

  render(){
    if(!this.state.ships || !this.state.pirate || !this.state.raids){
      return null;
    }
    return <PirateEditForm ships = {this.state.ships} pirate={this.state.pirate} raids={this.state.raids} handlePirateEdit= {this.handlePirateEdit} />

  }
}

export default PirateEditFormContainer;
