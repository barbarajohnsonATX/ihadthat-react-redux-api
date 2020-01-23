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
import { Divider } from 'semantic-ui-react'


class App extends React.Component {

  componentDidMount() {
    console.log("a")
    this.props.getToys();
    console.log("b")
}
 
 

  render() {
     
    let loggedIn=this.props.currentUser.username
   

    return (
      <div>
    
      <Router>
          <div className="App">
          <NavBar />

          <h3>I HAD THAT!</h3>
           
          { loggedIn ? <Logout /> : <div> <Login /> <Signup /> </div> }
          { loggedIn ? <ToyForm /> : ""}

          <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/toys" component={Toys} />
                <Route path="/myStuff" component={MyStuff} /> 
                <Route path="/about" component={About}/>
          </Switch> 

          <Divider />

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