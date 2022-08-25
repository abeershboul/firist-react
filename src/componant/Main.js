import React from 'react';
import HornedBeast from './HornedBeast';


class Main extends React.Component {
  render(){
    return(
    <div>
      <HornedBeast title='Rhino
' 
      URL='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeihBLoVqi4N8i_HVSLF1RJUzCIrR5IN5l9hRPK7jQrw&s'
      
      imgTitle='Rhino
      '
      Description='The cat beast'/>
      <HornedBeast title='Dog' 
      URL='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3selLW6_SD0cTe7CZYvqCPBJV3b76swg9qBcgwXWObQ&s'
      
      imgTitle='dog'
      Description='The dog beast'/>

    </div>
    )
  }
}

export default Main;