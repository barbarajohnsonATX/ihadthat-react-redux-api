import React, { Component } from 'react';
import { getToys } from '../actions/toys';
import { getToyOwnerships } from '../actions/toyOwnerships';
import { connect } from 'react-redux';
import ToyCard from '../components/ToyCard';
import { Card } from 'semantic-ui-react';


class Toys extends Component {

componentDidMount() {
    this.props.getToys();
    this.props.getToyOwnerships();

}

    render() {

        
        return (
            <div className="Toys">
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
      toys: state.toys
    })
  }

export default connect(mapStateToProps, { getToys, getToyOwnerships })(Toys);
