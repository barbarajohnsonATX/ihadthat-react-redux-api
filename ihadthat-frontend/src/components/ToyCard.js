import React, { Component } from 'react'; 
import './Toy.css';
import {Card, Icon, Image, Divider } from 'semantic-ui-react';


class ToyCard extends Component {
  render(){
    const { toy } = this.props;

    return(
       <Card>
            <div key={toy.id} >
 
                <Image className="ToyImage" src={toy.url} alt={toy.name} />
                <Card.Content>
                    <Card.Header>{toy.name}</Card.Header>
                    <Card.Description>{toy.description}</Card.Description>
                </Card.Content>
            </div>
        </Card>
   
    )
  }
}



 





export default ToyCard;
