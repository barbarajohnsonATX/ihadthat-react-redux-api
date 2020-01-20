import React, { Component } from 'react';
import { connect } from 'react-redux';
import ToyCard from '../components/ToyCard';
import { Card } from 'semantic-ui-react';
import Stats from '../components/Stats';
import { Divider } from 'semantic-ui-react'


class Toys extends Component {

    render() {
        //Destructure to extract data from objects into their own variable- ex: toy instead this.props.toy)
        const { toys } = this.props;

        let sorted = toys.sort((a, b) => (a.users.length > b.users.length) ? -1 : 1)
        
        return (
            <div className="Toys">

            <Divider />
            <Stats numToys={toys.length} topThree={sorted.slice(0, 3)}/>
            <Divider />


            <strong>All Toys</strong>

                <Card.Group itemsPerRow={3}>

                    {toys.map((toy, id) => <ToyCard  claimed={toy.claimed} numUsers={toy.users.length} key={id} toy={toy} />)}
                </Card.Group>


            </div>
        )
    }


}

const mapStateToProps = (state) => {
    return ({
      toys: state.toys,
     })
  }

 export default connect(mapStateToProps)(Toys);
