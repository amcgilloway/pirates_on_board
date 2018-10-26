import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ShipList from '../../components/ships/ShipList.js';
import Ship from '../../components/ships/Ship.js';


import Request from '../../helpers/request.js';

class ShipContainer extends Component {
  constructor(props){
    super(props);
    this.state = {ships: []}
  }

  componentDidMount(){
    let request = new Request()
    request.get('/api/ships').then((data) => {
      this.setState({ships: data._embedded.ships})
    })
  }

  render(){
    return <Router>
    <React.Fragment>
      <Switch>
      <Route exact path="/ships/:id" render = {(props) =>{
        console.log("Reached here");
        const index = props.match.params.id -1;
        const ship = this.state.ships[index]
      return <Ship ship={ship}/>}}
    />
        <Route exact path= "/ships" render = {() =>{
        return <ShipList ships = {this.state.ships} />}}
          />
        </Switch>
    </React.Fragment>
  </Router>

  }
}

export default ShipContainer;
