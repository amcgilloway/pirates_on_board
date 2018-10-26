import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PirateList from '../../components/pirates/PirateList.js';
import Pirate from '../../components/pirates/Pirate.js';

import Request from '../../helpers/request.js';

class PirateContainer extends Component {
  constructor(props){
    super(props);
    this.state = {pirates: []}
  }

  componentDidMount(){
    let request = new Request()
    request.get('/api/pirates').then((data) => {
      this.setState({pirates: data._embedded.pirates})
    })
  }


  render(){
    return (<Router>
      <React.Fragment>
        <Switch>

          <Route exact path="/pirates/:id" render = {(props) =>{
            console.log(this.state.pirates);
            const id = props.match.params.id;
            const foundPirate = this.state.pirates.find((pirate) => {
              return pirate.id == id;
            });
            return <Pirate pirate = {foundPirate} />
          }}
        />

        <Route exact path= "/pirates" render = {() =>{
          console.log("HERE");
          return <PirateList pirates = {this.state.pirates} />}}
        />



      </Switch>
    </React.Fragment>
  </Router>

)
}
}

export default PirateContainer;
