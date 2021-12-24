import React, { Component } from 'react'
import Profile from './Profile'
import Photo1 from '../photos.JPG';
export default class ProfileParent extends Component {
   constructor (props) {
       super(props)
       this.state = {
           name :'Yesser',
           description : 'I am a super student',
           image: Photo1,
           show: false,
       }
   }
   toggle(){
    this.setState({show: !this.state.show})
}
    render() {
        return (
            <div>
            <h1> we are having fun </h1>
            <button onClick={() => this.toggle()}> Click Me </button>
            {this.state.show ?
              <Profile name={this.state.name} 
              description={this.state.description}
              image={this.state.image}/> : null }
            </div>
        )
    }
}
