import React, { Component } from 'react'; 
import './Toy.css';
import {Card, Icon, Image } from 'semantic-ui-react';


class ToyCard extends Component {
  render(){
    const { toy } = this.props;

    return(
       <Card>
            <div key={toy.id} >
 
                <Card.Content>
                    <Image className="ToyImage" src={toy.url} alt={toy.name} />
                    <Card.Header>{toy.name}</Card.Header>
                    <Card.Description>{toy.description}</Card.Description>
                </Card.Content>

                <Card.Content extra>
                  <Icon name='user' /> {toy.users ? toy.users.length : 0}
                </Card.Content>

            </div>
        </Card>
   
    )
  }
}




export default ToyCard;
