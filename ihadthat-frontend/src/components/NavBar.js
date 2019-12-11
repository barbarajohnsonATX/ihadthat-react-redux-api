import React from 'react';
import { connect } from 'react-redux';
import Login from "./Login"
import Logout from "./Logout"


const mapStateToProps = ({ currentUser }) => {
    return {
      currentUser
    }
  }


const NavBar = ({ currentUser }) => {

    return (
        <div className="nav">
        { currentUser ? <strong>Welcome, {currentUser.username }</strong>: <strong>Please log in</strong>}

        { currentUser ? <Logout /> : <Login /> }
        </div>
    )
}
 


export default connect(mapStateToProps)(NavBar)

