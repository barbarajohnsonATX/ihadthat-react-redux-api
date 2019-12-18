import React from 'react';
import { connect } from 'react-redux';
import Login from "./Login"
import Logout from "./Logout"
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react';


const mapStateToProps = ({ currentUser }) => {
    return {
      currentUser
    }
  }


const NavBar = ({ currentUser }) => {

    return (

    


        <div className="nav">
          <Menu> 
            <div>
              <h4 className="item">I Had That!</h4>
            </div>

            { currentUser ? <strong>Welcome, {currentUser.username }</strong>: <strong>Please log in</strong>}

            { currentUser ? <Logout /> : <Login /> }


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

