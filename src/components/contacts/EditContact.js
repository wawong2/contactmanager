import React, { Component } from 'react'

import axios from 'axios'

import { Consumer } from '../../context'
import TextInputGroup from '../layout/TextInputGroup'


class EditContact extends Component {

    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    }

    async componentDidMount() {

        const { id } = this.props.match.params

        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        
        const contact = res.data

        this.setState({
            name: contact.name,
            email: contact.email,
            phone: contact.phone,
        })
    }

  onSubmit = async (dispatch, e) => {
    e.preventDefault()

    const { name, email, phone } = this.state;

    //Check For Errors
    if(name === '') {
      this.setState({errors: {name: 'Name is required'}})
      return;
    }
    if(email === '') {
      this.setState({errors: {email: 'Email is required'}})
      return;
    }
    if(phone === '') {
      this.setState({errors: {phone: 'Phone is required'}})
      return;
    }

    const updContact = {
        name,
        email,
        phone
    }

    const { id } = this.props.match.params

    const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updContact)
    dispatch({type:'UPDATE_CONTACT', payload: res.data})

    //clear State
    this.setState({
            name: '',
            email: '',
            phone: '',
            errors: {}
        })

    this.props.history.push('/');
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, phone, errors } = this.state;
    
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Edit Contact</div>
              <div className="card-bdoy m-3">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Name"
                    name="name"
                    placeholder="Enter Name"
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}
                  />
                  <TextInputGroup 
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={this.onChange}
                    error={errors.email}
                  />
                  <TextInputGroup 
                    label="Phone"
                    name="phone"
                    placeholder="Enter Phone"
                    value={phone}
                    onChange={this.onChange}
                    error={errors.phone}
                  />
                  <input type="submit" value="Update Contact" 
                         className="btn btn-lg 
                                    btn-light 
                                    btn-block mt-5"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>   
    );
  }
}

export default EditContact;