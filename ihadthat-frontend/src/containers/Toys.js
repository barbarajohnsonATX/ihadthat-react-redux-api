import React, { Component } from 'react';
  import { connect } from 'react-redux';
import ToyCard from '../components/ToyCard';
import { Card } from 'semantic-ui-react';
import Trending from '../components/Stats';
import { Divider } from 'semantic-ui-react'


class Toys extends Component {
 
   


    render() {
         let sorted = this.props.toys.sort((a, b) => (a.users.length > b.users.length) ? -1 : 1)
        

       
        
        return (
            <div className="Toys">
 



            <Divider />
            <Trending numToys={this.props.toys.length} topThree={sorted.slice(0, 3)}/>
            <Divider />


            <strong>All Toys</strong>



                <Card.Group itemsPerRow={3}>

                    {this.props.toys.map((toy, id) => <ToyCard  claimed={toy.claimed} numUsers={toy.users.length} key={id} toy={toy} />)}
                </Card.Group>


            </div>
        )
    }


}

const mapStateToProps = (state) => {
    return ({
      toys: state.toys,
    //   currentUser: state.currentUser
    })
  }

 export default connect(mapStateToProps)(Toys);
