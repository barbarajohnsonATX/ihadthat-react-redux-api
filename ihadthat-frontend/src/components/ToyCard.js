import React, { Component } from 'react'; 
import './Toy.css';
import '../App.css';
import {Card, Image } from 'semantic-ui-react';
import { claimToy, unclaimToy } from '../actions/toyOwnerships';
import { connect } from 'react-redux';
 
class ToyCard extends Component {


  render(){
 
    const { toy, user, numUsers, toyOwnerships } = this.props;

   let buttonsVisible =  
   <div>
   { toy.claimed !== "true" ? 
    <div className="claim-button" onClick={() => {this.props.claimToy(toy, user)}}><i className='plus icon plus-class'  />I HAD THIS</div> :
    <div className="unclaim-button" onClick={() => {this.props.unclaimToy( toyOwnerships, toy, user)}}><i className="minus icon minus-class" />UNCLAIM THIS</div> 
   }   </div>

    return(
      
       <Card>
            <div key={toy.id} >

                <Card.Content>
                    <Image className="ToyImage" src={toy.url} alt={toy.name} />
                    <Card.Header><strong>{toy.name}</strong></Card.Header>
                    <Card.Description>{toy.description}</Card.Description>
                </Card.Content>

                <Card.Content extra>
                    {/* <Icon name='user' /> {this.props.numUsers !== undefined ? this.props.toy.users.length : 0} */}

                    <i className='users icon user-class' /> {numUsers !== undefined ? toy.users.length : 0}
                 </Card.Content>
 

            {user.username ? buttonsVisible : ""}
 

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
 