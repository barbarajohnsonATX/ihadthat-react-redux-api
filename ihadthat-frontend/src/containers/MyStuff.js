import React, { Component } from 'react';
import { connect } from 'react-redux';
import ToyCard from '../components/ToyCard';
import { Card, Divider } from 'semantic-ui-react';
  

class MyStuff extends Component {

    // componentDidMount() {
    //     this.props.getMyToys(this.props.user);
     
    // }

    render() {
            console.log("state", this.props.user.toys)
             
 
          let newArray = this.props.toys.filter(toy => this.props.user.toys.map(t => t.id).includes(toy.id))
             
           return (

            <div className="My Stuff">
              <Divider hidden />
 
                {this.props.user.username ? <h3>{this.props.user.username}'s Toys</h3> : <strong>Log in or sign up</strong>}
                
                <Divider hidden />

                
                 <Card.Group itemsPerRow={3}>
                   {newArray.map((toy, id) => <ToyCard numUsers={toy.users.length} claimed={toy.claimed} key={id} toy={toy} />)}
                  </Card.Group>
             </div>
        )
    }

}


const mapStateToProps = (state) => {
    return ({
      user: state.currentUser,
      toys: state.toys 
    })
  }

 export default connect(mapStateToProps)(MyStuff);
//export default connect(mapStateToProps, { getMyToys })(MyStuff);
