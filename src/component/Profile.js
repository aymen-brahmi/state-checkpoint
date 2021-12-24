import React, { Component } from 'react'
import {Card,Button} from 'react-bootstrap';

export default class Profile extends Component {
   constructor(props) {
       super(props)
   }
  
   
    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={this.props.image}/>
  <Card.Body>
    <Card.Title> jyzdyjyzhr</Card.Title>
    <Card.Text>
    rtertrt
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
            </div>
        )
    }
}
