import React, { Component } from 'react';
import { connect } from 'react-redux';
import ToyCard from '../components/ToyCard';
import { Card, Divider } from 'semantic-ui-react';
 

class MyStuff extends Component {



    render() {
      let loggedIn=this.props.user.username

                        
           return (

            <div className="My Stuff">
              <Divider hidden />
 
                {this.props.user.username ? <h3>{this.props.user.username}'s Toys</h3> : <strong>Log in or sign up</strong>}
                
                <Divider hidden />

                
                 <Card.Group itemsPerRow={3}>
                  
                {loggedIn && this.props.user.toys[0].users ? (this.props.user.toys.map((toy, id) => <ToyCard numUsers={toy.users.length} claimed={toy.claimed} key={id} toy={toy} />)) : "" }
                  </Card.Group>
             </div>
        )
    }

}


const mapStateToProps = (state) => {
    return ({
      user: state.currentUser
    })
  }

 export default connect(mapStateToProps)(MyStuff);
 