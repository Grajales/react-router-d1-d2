import React, { Component } from 'react';
export default class Show extends Component {
    // constructor(props) {
    //   super(props) 
    //   this.state = {
    //     parks: parks
    //   }
    // }
    render() {
        console.log(this.props.match.params.id)
        let parkId=this.props.match.params.id;
        let parkData=this.props.parks.parks.find(value => value.id === parkId)

      return (
          <div>
              <h1>Show Page</h1>
              {parkData.name}
              </div>
      )
    }
}