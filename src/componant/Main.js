import React from 'react';
import HornedBeast from './HornedBeast';
import Pu from './asstes/pu.jpg'
import dog from './asstes/god.jpg';



class Main extends React.Component {
  render(){
    return(
    <div>
      <h1>parant</h1>
      <HornedBeast name='Franky
' 
      URL={Pu}
      
      imgTitle='Rhino
      '
      Description='The cat beast'/>
      <HornedBeast name='fulfly' 
      URL={dog}
      
      imgTitle='dog'
      Description='The dog beast'/>

    </div>
    )
  }
}

export default Main;