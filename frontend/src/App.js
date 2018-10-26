import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './NavBar.js'

import PirateContainer from './containers/pirates/PirateContainer'
import ShipContainer from './containers/ships/ShipContainer';


class App extends Component {
  render() {
    return (
      <Router >
        <React.Fragment>
          <NavBar />
          <Switch>
          <Route exact path = '/pirates' component={PirateContainer}/>
          <Route exact path = '/ships' component={ShipContainer}/>

          </Switch>
        </React.Fragment>
      </Router>

    );
  }
}

export default App;
