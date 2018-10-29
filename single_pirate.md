# React Requests - Single Pirate from API

## Learning Objectives

- Understand how to make a call to our Pirate API using React to fetch a single Pirate.
- Understand how to use built in props in routes to pass Id as prop.


## Duration
1 hour.

# Intro

So we have been able to get all of the Pirates from our API but we may also want to display more details about a single pirate. Well we can define a route using the Pirates ID and create a container to hold that Pirate as it's state.

# Routes.

> Hand out start point and have students open back-end from last lesson in IntelliJ.

So our code has changed a little bit. We now have a separate `SinglePirateContainer` and also a `PirateDetails` component.  In here we will make a request to the API to get a single pirates details based on an id that we will pass in via a `Route`

Why have we done this? Well we are going to have another route to `/pirates/:id` to render a single pirates with some additional details.

This route will be defined in our `App.js` and will use props attached to the route to get the id parameter from the url. Each route we build in the `App.js` will send us to a top level container with it's own state.


## Defining Route for a single pirate

So the route we want to go to in React will be `/pirates/:id`. This is fine but we need to look at how to get the value of the ID from the parameters. Fortunately props come to our rescue.

Let's start by adding the route for a single Pirate.

```js
// App.js
render(){
  return (<Router>
    <React.Fragment>
    <Switch>

    <Route exact path= "/pirates" component = {PirateContainer} />
    />

    <Route exact path="/pirates/:id" render = {() =>{
      // ADDED
    }}
    />

    </Switch>
    </React.Fragment>
    </Router>
  )
}
```

Next we can pass in props to the arrow function. This gives us the default props used by the Route. Part of these props is a path to gain access to any parameters in the url. We can access these by using `props.match.params.id`.

Lets log out the ID..

```js
// App.js
render(){
  return (
    // AS BEFORE

    <Route exact path="/pirates/:id" render = {(props) =>{
      console.log(props.match.params.id);
    }}
    />
  )
}
```

Now we need a Link somewhere to take us to that Route. We need this to go somewhere that we have access to the individual pirate and it's id.

In `Pirate` component we will wrap the Pirates name in a Link.

For this we need to build a url using the pirates id.

```js
// Pirate.js
return (
  <React.Fragment>
  <Link to = {"/pirates/" + props.pirate.id} className="name">
  {props.pirate.firstName} {props.pirate.lastName}
  </Link> //MODIFIED
  <p>Age: {props.pirate.age}</p>
  <p>Ship: {props.pirate.ship.name}</p>
  </React.Fragment>
)
}
```

Great so if we refresh our list click on the name of a pirate in our list in the browser we should see the ID logged out to the console.

So we have the Pirate ID what good is that to us? Well we can pass that to our SinglePirateContainer and use that to build our URL that we want to fetch from the API


Lets change the console log and instead assign the params.id to a variable and then pass that as prop to `SinglePirateContainer`.

```js
// App.js
render(){
  return (
    // AS BEFORE

    <Route exact path="/pirates/:id" render = {(props) =>{
      const id = props.match.params.id;
      <SinglePirateContainer id = {id} />
    }}
    />
  )
}
```

In `SinglePirateContainer` add a pirate to our state to store the data that comes back from the API.

```js
// SinglePirateContainer.js
constructor(props){
  super(props);
  this.state = {pirate: null}
}
```

Now lets go write our `componentDidMount` method and build the url. We will use projections to make sure our data is in a good order.


```js
// SinglePirateContainer.js
componentDidMount(){
  let request = new Request()
  const url = '/api/pirates/' + this.props.id + '?projection=embedShip';
  request.get(url).then((data) => {
    this.setState({pirate: data})
  })
}
```

And now let's render a Pirate component.

```js
// SinglePirateContainer.js

return (
  <div className = "component">
   <Pirate pirate = {this.state.pirate} /> // ADDED
 </div>
)

```
Great now when we click on a pirates name we should be taken to the single pirate.

Lastly lets add some more details in our `PirateDetails` component and render this under the `Pirate` component.

We will import PirateDetails and render this. We will pass in the list of raids as a prop too.

```js
SinglePirateContainer.js

return (
  <div className = "component">
   <Pirate pirate = {this.state.pirate} />
   <PirateDetails raids={this.state.pirate.raids} /> // ADDED
 </div>
)
```

In `PirateDetails` will list out the raids the Pirate has been on. For this we will need to create a `ul` for our list of raids to go into. Then we will map over each raid and build up an array of `li` elements for each raid.

Also each `li` element needs a key so we will use the index from our map method.

```js
//PirateDetails.js

  if(!props.raids){
    return null;
  }
  const raids = props.raids.map((raid, index) => {
    return <li key = {index}>{raid.location}</li>
  }) // ADDED

  return (
    <React.Fragment>
    Raids:
    <ul>
    {raids}
    </ul> //ADDED
    </React.Fragment>
  )

```

Great now we get back our Pirate with some additional details.

# Summary
- Learned how to make a call to our Pirate API using React to fetch single Pirate.

# Next Lesson
* **Lab** - Fetch all Ships and raids.
