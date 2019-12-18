import React from 'react';
import { connect } from 'react-redux';
import Login from "./Login"
import Logout from "./Logout"
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react';


const mapStateToProps = (state) => {
    return {
      currentUser: state.currentUser
    }
  }


const NavBar = ({ currentUser }) => {

  let loggedIn=currentUser.username

    return (

 
        <div className="nav">
          <Menu> 
       

            { loggedIn ? <strong>Welcome, {currentUser.username }</strong> : <strong>Log in here</strong>}

            { loggedIn ? <Logout /> : <Login /> }


            <Link to='/toys' className='item'>
                View All Toys
            </Link>

             <Link to='/myStuff' className='item'>
                View My Toys
            </Link> 
             

        </Menu>
        </div>
    )
}
 


export default connect(mapStateToProps)(NavBar)

