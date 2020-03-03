import React, { Component } from 'react';
import { connect } from 'react-redux';
import ToyCard from '../components/ToyCard';
import { Card } from 'semantic-ui-react';
import Stats from '../components/Stats';
import { Divider } from 'semantic-ui-react'


class Toys extends Component {

    constructor(props) {
        //super calls the constructor of parent class Component
        super(props);
    
        //set initial state in constructor since it runs first
        this.state = { isSorted: false }
     
      }
    
      //alter state when like button is clicked using setState
      alphaSortHandler = () => {
        this.setState(state => ({
            isSorted: !state.isSorted
        }));

       }


    render() {
        //Destructure to extract data from objects into their own variable- ex: toy instead this.props.toy)
        const { toysReducer} = this.props;
        
        //copy toys so sort does not mutate
        let topToys = [...toysReducer.toys].sort((a, b) => (a.users.length > b.users.length) ? -1 : 1)

        let sortByName = [...toysReducer.toys].sort((a, b) => (a.name > b.name ? 1 : -1 ))
 
        return (
            <div className="Toys">

            <Divider />
            <Stats numToys={toysReducer.toys.length} topThree={topToys.slice(0, 3)}/>
            <Divider />


            <button onClick={this.alphaSortHandler}>Sort Toys</button>



                <Card.Group itemsPerRow={3}>
                    {this.state.isSorted ? 
                        sortByName.map((toy, id) => <ToyCard  claimed={toy.claimed} numUsers={toy.users.length} key={id} toy={toy} />) :
                        toysReducer.toys.map((toy, id) => <ToyCard  claimed={toy.claimed} numUsers={toy.users.length} key={id} toy={toy} />)
                    }

                </Card.Group>


            </div>
        )
    }


}

const mapStateToProps = (state) => {
    return ({
      toysReducer: state.toysReducer
     })
  }

 export default connect(mapStateToProps)(Toys);
