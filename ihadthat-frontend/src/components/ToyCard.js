import React, { Component } from 'react'; 
import './Toy.css';
import {Card, Icon, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';

class ToyCard extends Component {


  render(){
    // const { toy } = this.props;

    // console.log("ToyCard toy", this.props.toy)
    // console.log("ToyCard key", this.props.toy.id)

    // const thisToy = this.props.toys.find(t => t.id == this.props.toy.id)
    // console.log("thisToy", thisToy)
     
 
    return(
      
       <Card>
            <div key={this.props.toy.id} >
 
                <Card.Content>
                    <Image className="ToyImage" src={this.props.toy.url} alt={this.props.toy.name} />
                    <Card.Header>{this.props.toy.name}</Card.Header>
                    <Card.Description>{this.props.description}</Card.Description>
                </Card.Content>

                <Card.Content extra>
                    <Icon name='user' /> {this.props.toy.users != undefined ? this.props.toy.users.length : 0}
                </Card.Content>

            </div>
        </Card>
   
    )
  }
}


const mapStateToProps = (state) => {
  return ({
    toys: state.toys 
  })
}
 

export default connect(mapStateToProps)(ToyCard);
