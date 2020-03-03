import React, { Component } from 'react'; 
import './Toy.css';
import '../App.css';
import {Card, Image } from 'semantic-ui-react';
import { claimToy, unclaimToy } from '../actions/toyOwnerships';
import { connect } from 'react-redux';
 
class ToyCard extends Component {
  
  
  constructor(props) {
    //super calls the constructor of parent class Component
    super(props);

    //set initial state in constructor since it runs first
    this.state = { liked: false }
 
  }

  //alter state when like button is clicked using setState
  clickHandler = () => {
    this.setState(state => ({
      liked: !state.liked
    }));
   }
 

 
  render(){
    //Destructure to extract data from objects into their own variable- ex: toy instead this.props.toy)
    const { toy, numUsers, claimToy, unclaimToy, toysReducer } = this.props;

   let buttonsVisible =  
   <div>
   { toy.claimed !== "true" ? 
    <div className="claim-button" onClick={() => {claimToy(toy, toysReducer.currentUser)}}><i className='plus icon plus-class'  />I HAD THIS</div> :
    <div className="unclaim-button" onClick={() => {unclaimToy( toysReducer.toyOwnerships, toy, toysReducer.currentUser)}}><i className="minus icon minus-class" />UNCLAIM THIS</div> 
   }   </div>


    return(
      
       <Card>
            <div key={toy.id} >

                <Card.Content>
                    <Image className="ToyImage" src={toy.url} alt={toy.name} />
                    <Card.Header><strong>{toy.name}</strong></Card.Header>
                    <Card.Description>{toy.description}</Card.Description>
  
   

                <div>
                  { this.state.liked ? 
                      <button className="unlike-button" onClick={this.clickHandler}><i className="red heart icon"  />Liked</button> :
                      <button className="like-button" onClick={this.clickHandler}><i className="red heart outline icon" />Like</button> 
                  }   
                  </div>


 
                </Card.Content>

                <Card.Content extra>
                    <i className='users icon user-class' /> {numUsers !== undefined ? toy.users.length : 0}
                 </Card.Content>
 

            {toysReducer.currentUser.username ? buttonsVisible : ""}
 

             </div>
        </Card>
   
    )
  }
}


 
const mapStateToProps = state => {
  return {
    toys: state.toys,
    user: state.currentUser,
    toyOwnerships: state.toyOwnerships,
    toysReducer: state.toysReducer
  }
}

export default connect(mapStateToProps, {claimToy, unclaimToy})(ToyCard);
 