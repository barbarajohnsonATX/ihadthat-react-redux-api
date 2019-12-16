import React, { Component } from 'react';
import { connect } from 'react-redux';
import ToyCard from '../components/ToyCard';
import { Card } from 'semantic-ui-react';
 

class MyStuff extends Component {

    render() {
        console.log("MyStuff toys", this.props.user.toys)
        console.log("All toys", this.props.toys)


          return (

            <div className="My Stuff">
 
                <strong>{this.props.user.username}'s Stuff</strong>
                <Card.Group itemsPerRow={3}>
                    {this.props.user.toys.map((toy, id, users) => <ToyCard users={users} key={id} toy={toy} />)}
                </Card.Group>
             </div>
        )
    }


}


const mapStateToProps = (state) => {
    return ({
      user: state.currentUser,
      toys: state.toys 
    })
  }

export default connect(mapStateToProps)(MyStuff);
