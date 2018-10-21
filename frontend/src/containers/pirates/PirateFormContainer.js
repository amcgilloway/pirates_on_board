import React, { Component } from "react";
import PirateForm from "../../components/pirates/PirateForm";
import Request from '../../helpers/request.js'

class PirateFormContainer extends Component {

  constructor(props) {
    super(props);
    this.handlePirateSubmit = this.handlePirateSubmit.bind(this);
  }

  handlePirateSubmit(pirate) {
      let request = new Request('/pirates')
      request.post(pirate);
      window.location = '/pirates'

  }

  render() {
    return (
      <div className="new pirate">
        <h2>Add a Pirate</h2>
        <PirateForm onPirateSubmit={this.handlePirateSubmit} />
      </div>
    );
  }
}

export default PirateFormContainer;
