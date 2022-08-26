import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {

constructor(props){
  super(props);
  this.State={
    numofpits:0
  }
}
incremant= () =>{
  this.setState({
    numofpits : 0
  })

}
//this.state.numofpits + 1


    render(){
      return(
        <>
         <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={this.props.URL} onClick={this.incremant} />
      <Card.Body>
        <Card.Title>{this.props.name}</Card.Title>
        <Card.Text>
        😻num of pits:{this.state.numofpits}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        
        </>
      );
    }
  }
  
  export default HornedBeast;