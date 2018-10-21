import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './NavBar.js'

import PirateContainer from './containers/pirates/PirateContainer'
import ShipContainer from './containers/ships/ShipContainer'
import SinglePirateContainer from './containers/pirates/SinglePirateContainer';
import SingleShipContainer from './containers/ships/SingleShipContainer';
import PirateFormContainer from './containers/pirates/PirateFormContainer';
// import RaidContainer from './containers/RaidContainer'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <React.Fragment>
            <NavBar/>
            <Switch>
              <Route  path="/pirates/new" component= {PirateFormContainer}/>
              <Route  path="/pirates/:id" component= {SinglePirateContainer}/>
              <Route  path="/ships/:id" component= {SingleShipContainer}/>
            <Route exact path="/pirates" component={PirateContainer} />
            <Route exact path="/ships" component={ShipContainer} />
          </Switch>


          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
