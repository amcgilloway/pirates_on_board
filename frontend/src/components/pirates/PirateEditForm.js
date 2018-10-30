import React, {Component} from 'react';

class PirateEditForm extends Component {
  constructor(props){
    super(props);
    const pirateShip = props.ships.find((ship) => {
      return ship.name === props.pirate.ship.name
    })
    this.state = {
      firstName: props.pirate.firstName,
      lastName: props.pirate.lastName,
      age: props.pirate.age,
      ship: pirateShip._links.self.href,
      raids: props.pirate.raids
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRaidSelect = this.handleRaidSelect.bind(this);
  }

 handleSubmit(event){
    event.preventDefault();
    const pirate = {
        "firstName": this.state.firstName,
        "lastName": this.state.lastName,
        "age": this.state.age,
        "ship": this.state.ship,
        "raids": this.state.raids
      }
    this.props.handlePirateEdit(pirate)
  }

  handleRaidSelect(e){
    const raids = [... e.target.options].filter((option) => {
      return option.selected
    }).map((option) => {
      return option.value
    });

    this.setState({raids: raids})
  }


render(){
     const shipOptions = this.props.ships.map((ship, index) => {
      return <option key={index} selected = {ship.name== this.props.pirate.ship.name} value={ship._links.self.href}>{ship.name}</option>
    })

    const raidOptions = this.props.raids.map((raid, index) => {
      let hasRaid = false;
      if (this.props.pirate.raids[index]){
       hasRaid = true
    }
      return <option key={index} selected = {hasRaid} value={raid._links.self.href}>{raid.location}</option>
    })


  return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <input type="text" value = {this.state.firstName} name="firstName" onChange={e => this.setState({ firstName: e.target.value })}/>
        <input type="text" value = {this.state.lastName} name="lastName" onChange={e => this.setState({ lastName: e.target.value })}/>
        <input type="number" value = {this.state.age} name="age" onChange={e => this.setState({ age: e.target.value })}/>
        <select name="ship" onChange={e => this.setState({ ship: e.target.value })}>
          {shipOptions}
        </select>
        <select multiple name="raids" onChange={this.handleRaidSelect} >
          {raidOptions}
        </select>
        <button type="submit">Save</button>
      </form>
    </div>

)
}
  }

  export default PirateEditForm;
