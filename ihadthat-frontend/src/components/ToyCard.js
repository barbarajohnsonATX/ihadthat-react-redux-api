import React, { Component } from 'react'; 
import './Toy.css';


class ToyCard extends Component {
  render(){
    const { toy } = this.props;

    return(
       
        <div key={toy.id} >
 
            <img className="ToyImage" src={toy.url} alt={toy.name}/>
            <strong>{toy.name}</strong>
            <p>{toy.description}</p>

        </div>
   
    )
  }
}



 





export default ToyCard;
