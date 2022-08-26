import React from "react";
import Ch from "./ch";
class Pa extends React.Component{
    constructor(props){
        super(props);
        this.state={
            totalnumpits:15
        }
    }
    dec=()=>{
this.setState({
totalnumpits:this.state.totalnumpits-1


})
this.props.decre();


    }
  render(){
    return(
      <>
      <h1>passfun</h1>
      <h2>totalnum pits={this.state.dec}</h2>

      <Ch
      decre={this.dec}
       URL='https://cdn4.fatabyyano.net/wp-content/uploads/2021/06/12114255/%D9%88%D8%AD%D9%8A%D8%AF-%D8%A7%D9%84%D9%82%D8%B1%D9%86-scaled.jpg'
      
       imgTitle='Rhino
       '
       Description='The cat beast'/>
       <Ch
       decre={this.dec}
        URL='https://cdn4.fatabyyano.net/wp-content/uploads/2021/06/12114255/%D9%88%D8%AD%D9%8A%D8%AF-%D8%A7%D9%84%D9%82%D8%B1%D9%86-scaled.jpg'
      
        imgTitle='Rhino
        '
        Description='The cat beast'/>
      </>
    )
  }
}
export default Pa;