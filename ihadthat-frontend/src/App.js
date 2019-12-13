import React from 'react';
import './App.css';
 

import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser';
import  NavBar  from './components/NavBar'
import MainContainer from './containers/MainContainer';
import Toys from './containers/Toys';

class App extends React.Component {

 
  componentDidMount() {
    this.props.getCurrentUser()

  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <MainContainer />
        <Toys />

      </div>
        
    );
  }
  
}

 

export default connect(null, { getCurrentUser })(App);
