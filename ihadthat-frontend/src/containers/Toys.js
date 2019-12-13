import React, { Component } from 'react';
import { getToys } from '../actions/toys';
import { connect } from 'react-redux';
import ToyCard from '../components/ToyCard';
import { Card } from 'semantic-ui-react';


class Toys extends Component {

componentDidMount() {
    this.props.getToys();

}

    render() {

        return (
            <div className="Toys">
                <Card.Group itemsPerRow={3}>
                    {this.props.toys.map((toy, id) => <ToyCard key={id} toy={toy} />)}
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

export default connect(mapStateToProps, { getToys })(Toys);
