import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from "react-router-dom";
export default class Homepage extends Component {
    // constructor(props) {
    //   super(props) 
    //   this.state = {
    //     parks: parks
    //   }
    // }
    render() {
        const parksList = this.props.parks.parks.map((value,index) =>
            <div key={index}> 
            <h2> {value.name}</h2>
            <Link to={`/park/${value.id}`} > 
                <img src={value.images[0].url} />
            </Link>
            </div>
        )
      return (
          <div>
              <h1>HomePage</h1>
              {parksList}
              </div>
      )
    }
}