import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateToyFormData } from '../actions/toyForm';
import { createToy } from '../actions/toys';
import { Form, Button, Divider } from 'semantic-ui-react';
 


class ToyForm extends Component {


  handleOnChange = event => {
    const { name, value } = event.target;
    const currentToyFormData = Object.assign({}, this.props.toyFormData, {
      [name]: value
    })
     
    this.props.updateToyFormData(currentToyFormData)
  }


  handleonSubmit = event => {
    event.preventDefault()
    //console.log(this.props.toyFormData)
    
     const { createToy, toyFormData } = this.props;
      createToy(toyFormData);


  


  }

  render() {
    const { name, description, url } = this.props.toyFormData;
    return(
      <div>
      <Divider />

    <Form onSubmit={this.handleonSubmit}>
          <Form.Group widths='equal'>
           <Form.Input
             fluid label='Name'
             onChange={this.handleOnChange}
             placeholder='Name'
             value={name}
             name='name'
            />
            <Form.Input
             fluid label='Description'
             onChange={this.handleOnChange}
             placeholder='Description'
             value={description}
             name='description'
            />
            <Form.Input
             fluid label='URL'
             onChange={this.handleOnChange}
             placeholder='Image URL'
             value={url}
             name='url'
            />
          
          </Form.Group>
          
        <Button color='blue'>Add New Toy</Button>
        </Form>
          
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    toyFormData: state.toyFormData,
    //errors: state.errors
  }
}

export default connect(mapStateToProps, { updateToyFormData, createToy })(ToyForm);
