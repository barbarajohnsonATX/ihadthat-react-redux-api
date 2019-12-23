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
import Home from './components/Home';
import About from './components/About';
import Login from "./components/Login"
import Logout from "./components/Logout"
 import { getToys } from './actions/toys';
 
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Divider, Header } from 'semantic-ui-react'


class App extends React.Component {

  componentDidMount() {
    this.props.getToys();
 
  // this.props.getToyOwnerships();

}
 
 

  render() {
     
    let loggedIn=this.props.currentUser.username
   

    return (
      <div>
           
              { loggedIn ? <Logout /> : <div> <Login /> <Signup /> </div> }
 
      
      <Router>
          <div className="App">
          <NavBar />

          <Header as='h1' textAlign='center'>I had that!!!</Header>
           
          {loggedIn ? <ToyForm /> : ""}

<Switch>
          <Route exact path="/" component={Home}/>


           {loggedIn ? <Route path="/signup" component={Signup}/> : ""}


          <Route path="/toys" component={Toys} />
          {loggedIn ? <Route path="/myStuff" component={MyStuff} /> : ""}
 
          <Route path="/about" component={About}/>
   </Switch> 

            <Divider hidden />

            <Footer />


          </div>
      </Router>
      </div>
    );
  }
  
}

const mapStateToProps = (state) => {
    return {
      currentUser: state.currentUser
    }
  }

 


 export default connect(mapStateToProps, {getToys})(App);