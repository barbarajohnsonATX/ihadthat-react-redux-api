import React, { Component } from 'react';
import { getToys } from '../actions/toys';
import { connect } from 'react-redux';

class Toys extends Component {

componentDidMount() {
    this.props.getToys();

}

    render() {

        return (
            <div>Toys</div>

        )
    }

 
   
}

const mapStateToProps = (state) => {
    return ({
      toys: state.toys
    })
  }

export default connect(mapStateToProps, { getToys })(Toys);
