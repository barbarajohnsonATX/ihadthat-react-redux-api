import React, { Component } from 'react';
import { connect } from 'react-redux';
import ToyCard from '../components/ToyCard';
import { Card, Divider } from 'semantic-ui-react';
 
class MyStuff extends Component {

 

    render() {
      //Destructure to extract data from objects into their own variable- ex: toy instead this.props.toy)
      const { user  } = this.props;

      
           return (

            <div className="My Stuff">
              <Divider hidden />
 
                {user.username ? <h3>{user.username}'s Toys</h3> : <strong>Log in or sign up</strong>}
                
                <Divider hidden />

                
                 <Card.Group itemsPerRow={3}>
                 {user.toys.map((toy, id) => <ToyCard numUsers={toy.users.length} claimed={toy.claimed} key={id} toy={toy} />)}

                </Card.Group>
             </div>
        )
    }

}


const mapStateToProps = (state) => {
    return ({
      user: state.currentUser,
     })
  }

 export default connect(mapStateToProps)(MyStuff);