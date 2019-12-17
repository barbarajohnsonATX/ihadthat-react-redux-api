import React, { Component } from 'react';
import { connect } from 'react-redux';
import ToyCard from '../components/ToyCard';
import { Card } from 'semantic-ui-react';
 

class MyStuff extends Component {



    render() {

        let allToys = this.props.toys
        let myToys = this.props.user.toys

        // console.log("All toys", allToys)
        // console.log("My toys", myToys)

        //filter from toys list so we can get each toy's owners from the user's toys
        //.map returns array of toy ids
        //.includes returns true if myToys id is in allToys
        let filtered = allToys.filter(toy => myToys.map(t => t.id).includes(toy.id))
        console.log("filtered", filtered)
        
           return (

            <div className="My Stuff">
 
                <strong>{this.props.user.username}'s Stuff</strong>
                <Card.Group itemsPerRow={3}>
                    {filtered.map((toy, id) => <ToyCard key={id} toy={toy} />)}
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
