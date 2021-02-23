import React, { Component } from 'react';
import './Show.css';
export default class Show extends Component {
    
    render() {
        let parkId=this.props.match.params.id;
        let parkData=this.props.parks.find(value => value.id === parkId)

      return (
          <div>
              {parkData ? 
              <div> 
                <div className="blackbox" >
                    <nav className="box2" > 
                        <img className="topimg" src={parkData.images[0].url} />
                        <h2 className="bottom_txt">  {parkData.name} </h2>
                    </nav>
                    <p className="inBox"> {parkData.description} </p>
                </div>
                 <div className="lowHalf" >
                  <ul> 
                   Address: 
                  <li> {parkData.addresses[0].line1}</li>
                  <li> {parkData.addresses[0].city} , {parkData.addresses[0].stateCode} , {parkData.addresses[0].postalCode} </li>
                  </ul>

                  Directions:
                  <p> {parkData.directionsInfo} </p>
                  <div className="img_bottom">
                    <img src={parkData.images[0].url} />
                    <img src={parkData.images[1].url} />
                    <img src={parkData.images[2].url} />
                    {/* <img src={parkData.images[3].url} /> */}
                  </div>
                 </div> 
              </div> 

              :null} 


          </div>
      )
    }
}