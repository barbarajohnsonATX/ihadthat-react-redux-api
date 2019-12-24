import React, { Component } from 'react'; 
import './Toy.css';
import {Card, Icon, Image } from 'semantic-ui-react';
import { claimToy, unclaimToy } from '../actions/toyOwnerships';
import { connect } from 'react-redux';
 
class ToyCard extends Component {


  render(){
 
 
   let buttonsVisible =  <div>
   { this.props.toy.claimed !== "true" ? 
    <div className="ui inverted  green button" onClick={() => {this.props.claimToy(this.props.toy, this.props.user)}}><Icon name="green plus" />I HAD THIS</div> :
    <div className="ui inverted red button" onClick={() => {this.props.unclaimToy( this.props.toyOwnerships, this.props.toy, this.props.user)}}><Icon name="red minus" />UNCLAIM THIS</div> 
   }   </div>

    return(
      
       <Card>
            <div key={this.props.toy.id} >
 
                <Card.Content>
                    <Image className="ToyImage" src={this.props.toy.url} alt={this.props.toy.name} />
                    <Card.Header><strong>{this.props.toy.name}</strong></Card.Header>
                    <Card.Description>{this.props.toy.description}</Card.Description>
                </Card.Content>

                <Card.Content extra>
                    <Icon name='purple user' /> {this.props.numUsers !== undefined ? this.props.toy.users.length : 0}

                </Card.Content>
 

            {this.props.user.username ? buttonsVisible : ""}
 

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
 