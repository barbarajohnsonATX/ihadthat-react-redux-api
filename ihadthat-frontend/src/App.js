import React from 'react';
import './App.css';
 

import { connect } from 'react-redux';
import  NavBar  from './components/NavBar'
// import MainContainer from './containers/MainContainer';
import Toys from './containers/Toys';
import ToyForm from './components/ToyForm';
import MyStuff from './containers/MyStuff';
import Signup from './components/Signup';
import Footer from './components/Footer';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Divider, Header } from 'semantic-ui-react'


class App extends React.Component {

 
 

  render() {
     
    
    return (
      <Router>
          <div className="App">
          <NavBar />

          <Header as='h1' textAlign='center'>
            I had that!!!
          </Header>

          <ToyForm />
          <Route path='/signup' render={()=><Signup />}/>


          <Route path="/toys" component={Toys} />
          {this.props.user ? <Route path="/myStuff" component={MyStuff} /> : ""}
 
            <Divider hidden />
            <Footer />


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
