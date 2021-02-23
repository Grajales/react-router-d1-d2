import React, { Component } from 'react';
import './App.css';
import { Route, Link, Switch, Redirect } from "react-router-dom";
import Homepage from "./Homepage";
import Show from "./Show";

class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      parks: this.props.parks
    }
  }
  render() {
    console.log(this.props.parks)
    //console.log(this.state) also works
    return (
        <div>
          <Link to='/'> 
          <h1>National Parks List</h1>
          </Link>
          <Switch> 
          <Route exact path='/' render={(routerProps) => 
          <Homepage parks={this.state} {...routerProps} /> 
          }>
          </Route>
          <Route path='/park/:id' render={(routerProps) => 
          <Show parks= {this.state} {...routerProps}  />
          } >
          </Route>
          </Switch>
       
 
{/* <Switch>
<Route exact path='/' render={routerProps => 
  <Home {...routerProps} {...this.state} /> 
  } />
<Route path='/park/:id' render={routerProps => 
  <Show {...routerProps} {...this.state} />
  } />

</Switch>  */}
        </div>
    );
  }
}

export default App;
