import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './NavBar.js'

import PirateContainer from './containers/pirates/PirateContainer'
import SinglePirateContainer from './containers/pirates/SinglePirateContainer';


class App extends Component {
  render() {
    return (
      <Router >
        <React.Fragment>
          <NavBar />
          <Switch>
          <Route exact path = '/pirates' component={PirateContainer}/>
          <Route exact path="/pirates/:id" render = {(props) =>{
            const id = props.match.params.id;
            return <SinglePirateContainer id = {id} />
            }}
          />
          </Switch>
        </React.Fragment>
      </Router>

    );
  }
}

export default App;
