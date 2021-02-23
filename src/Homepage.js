import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from "react-router-dom";
import './Homepage.css';
export default class Homepage extends Component {
    
    render() {
        
        const parksList = this.props.parks.map((value,index) =>
            <div key={index}> 
                <nav className="box" > 
                    <h2 className="centered"> {value.name}</h2>
                    <Link to={`/park/${value.id}`} > 
                        <img className="h_img" src={value.images[0].url} />
                    </Link>
                </nav>
            </div>
        )
      return (
        <div>

            {parksList}
        </div>
      )
    }
}