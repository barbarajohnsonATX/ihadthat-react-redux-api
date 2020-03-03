import React, { Component } from 'react';
import { connect } from 'react-redux';
import ToyCard from '../components/ToyCard';
import { Card } from 'semantic-ui-react';
import Stats from '../components/Stats';
import { Divider } from 'semantic-ui-react'


class Toys extends Component {

    state = {newSearch: ""}


    handleInputChange = e => {
        this.setState({newSearch: e.target.value})
    }


    render() {
        //Destructure to extract data from objects into their own variable- ex: toy instead this.props.toy)
        const { toysReducer} = this.props;
        
        //copy toys so sort does not mutate
        let topToys = [...toysReducer.toys].sort((a, b) => (a.users.length > b.users.length) ? -1 : 1)
        let toysMatch = toysReducer.toys.filter( (toy ) => toy.name.toLowerCase().includes(this.state.newSearch.toLowerCase()))
  
        return (
            <div className="Toys">
                <input placeholder="toyName" value={this.state.newSearch} name="toyName" type="text" onChange={this.handleInputChange} />
            <Divider />
            <Stats numToys={toysReducer.toys.length} topThree={topToys.slice(0, 3)}/>
            <Divider />


 
                <Card.Group itemsPerRow={3}>
                    {/* { toysReducer.toys.map((toy, id) => <ToyCard  claimed={toy.claimed} numUsers={toy.users.length} key={id} toy={toy} />)} */}
                            { toysMatch.map((toy, id) => <ToyCard  claimed={toy.claimed} numUsers={toy.users.length} key={id} toy={toy} />)}
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
