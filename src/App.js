import React, { Component } from 'react';
import './App.css';
import { Route, Link, Switch, Redirect } from "react-router-dom";
import Homepage from "./Homepage";
import Show from "./Show";
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      parks: []
    }
  }
    componentDidMount = ()=>{
      let response = axios.get('https://developer.nps.gov/api/v1/parks?&api_key=JqlIWUmSDNrT02t33NcYP3AKyIx9NZqcuQhUqE8n', {
      
      headers: {
            Accept: 'application/json'
        }
   
    })
    .then(response =>{
      console.log(response)
      this.setState({
        parks:response.data.data
      })
    })
   
    }
  
  render() {
    //  console.log(this.state)
     console.log(this.state.parks)
    return (
        <div>
          <Link to='/'> 
          <h1>National Parks List</h1>
          </Link>

          <Switch> 
          <Route exact path='/' render={(routerProps) => 
          <Homepage parks={this.state.parks} {...routerProps} /> 
          }>
          </Route>
          <Route path='/park/:id' render={(routerProps) => 
          <Show parks= {this.state.parks} {...routerProps}  />
          } >
          </Route>
          </Switch> 

        </div>
    ); 
  }
}

export default App;
