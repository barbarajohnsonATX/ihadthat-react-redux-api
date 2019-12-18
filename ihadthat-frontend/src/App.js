import React from 'react';
import './App.css';
 

import { connect } from 'react-redux';
import  NavBar  from './components/NavBar'
// import MainContainer from './containers/MainContainer';
import Toys from './containers/Toys';
import ToyForm from './components/ToyForm';
import MyStuff from './containers/MyStuff';
import { BrowserRouter as Router, Route } from 'react-router-dom';


class App extends React.Component {

 
 

  render() {
     
    
    return (
      <Router>
          <div className="App">
          <NavBar />
          <ToyForm />

          <Route path="/toys" component={Toys} />
          {this.props.user ? <Route path="/myStuff" component={MyStuff} /> : ""}
 

          </div>
      </Router>
    );
  }
  
}

const mapStateToProps = (state) => {
  return {
    user: state.currentUser
  }
}

 


 export default connect(mapStateToProps)(App);
