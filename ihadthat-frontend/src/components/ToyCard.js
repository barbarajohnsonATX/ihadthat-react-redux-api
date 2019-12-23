import React, { Component } from 'react'; 
import './Toy.css';
import {Card, Icon, Image } from 'semantic-ui-react';
import { claimToy, unclaimToy } from '../actions/toyOwnerships';
 
import { connect } from 'react-redux';

class ToyCard extends Component {


  render(){
   console.log("props.claimed", this.props.claimed, this.props.toy.name)
   console.log("users of this toy", this.props.toy.users)
 
    return(
      
       <Card>
            <div key={this.props.toy.id} >
 
                <Card.Content>
                    <Image className="ToyImage" src={this.props.toy.url} alt={this.props.toy.name} />
                    <Card.Header><strong>{this.props.toy.name}</strong></Card.Header>
                    <Card.Description>{this.props.toy.description}</Card.Description>
                </Card.Content>

                <Card.Content extra>
                    <Icon name='user' /> {this.props.numUsers !== undefined ? this.props.toy.users.length : 0}

                </Card.Content>
                {this.props.toy.claimed !== "true" ? 
                <button className="ui green basic button" onClick={() => {this.props.claimToy(this.props.toy, this.props.user)}}>I HAD THIS!</button> :
                <button className="ui red basic button" onClick={() => {this.props.unclaimToy( this.props.toyOwnerships, this.props.toy, this.props.user)}}>UNCLAIM THIS!</button> } 


            </div>
        </Card>
   
    )
  }
}


 
const mapStateToProps = state => {
  return {
    toys: state.toys,
    user: state.currentUser,
    toyOwnerships: state.toyOwnerships
  }
}

export default connect(mapStateToProps, {claimToy, unclaimToy})(ToyCard);
