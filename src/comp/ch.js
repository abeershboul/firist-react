import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
class Ch extends React.Component{
    constructor(props){
        super(props);
        this.state={
            nunpits:0
        }
    
    }
incc=()=>{
    this.setState({
        nunpits:this.state.nunpits+1,
        numoftuna:0
    })

}
inctuna=()=>{
    this.setState({
        numoftuna:this.state.numoftuna +1
    })
}


  render(){
    return(
      <>
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={this.props.URL} onClick={this.props.incc} />
      <Card.Body>
        <Card.Title>{this.props.imgTitle}</Card.Title>
        <Card.Text>
         <p> num of pits :{this.state.nunpits}</p>
        </Card.Text>
        <Card.Text>
         <p> num of totalnum :{this.state.numoftuna}th</p>
        </Card.Text>
        <Button variant="primary" onClick={this.inctuna}>i need tona</Button>
      </Card.Body>
    </Card>

      </>
    )
  }
}
export default Ch;