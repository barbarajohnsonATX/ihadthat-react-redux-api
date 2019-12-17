import React, { Component } from 'react'; 
import './Toy.css';
import {Card, Icon, Image } from 'semantic-ui-react';
import { claimToy } from '../actions/toys';
import { connect } from 'react-redux';

class ToyCard extends Component {


  render(){
   
    
    return(
      
       <Card>
            <div key={this.props.toy.id} >
 
                <Card.Content>
                    <Image className="ToyImage" src={this.props.toy.url} alt={this.props.toy.name} />
                    <Card.Header><strong>{this.props.toy.name}</strong></Card.Header>
                    <Card.Description>{this.props.toy.description}</Card.Description>
                </Card.Content>

                <Card.Content extra>
                    <Icon name='user' /> {this.props.toy.users !== undefined ? this.props.toy.users.length : 0}
                </Card.Content>

                <button onClick={() => {this.props.claimToy(this.props.toy, this.props.user)}}>I HAD THIS!</button>

            </div>
        </Card>
   
    )
  }
}


 
const mapStateToProps = state => {
  return {
    toys: state.toys,
    user: state.currentUser,
  }
}

export default connect(mapStateToProps, {claimToy})(ToyCard);
