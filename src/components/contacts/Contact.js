import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';
import axios from 'axios';

class Contact extends Component {

    state = {
        showContactInfo: false
    }

    onDeleteClick = async (id, dispatch) => {
        try {
            await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
            dispatch({type: 'DELETE_CONTACT', payload: id})
        } catch(e) {
            dispatch({type: 'DELETE_CONTACT', payload: id})
        }

    };

    render() {
    const { id, name, email, phone } = this.props.contact; 
    const { showContactInfo } = this.state;

    return (
        <Consumer>
            {value => {
                const { dispatch } = value;

                return (
                    <div className="card card-body mb-3">
                    <i  className="fas fa-times" 
                        style={{
                            position: 'absolute',
                            right: '10px',
                            fontSize: '30px',
                            cursor: 'pointer', 
                            flaot: 'right', 
                            color: 'red',
                        }}
                        onClick = {this.onDeleteClick.bind(this, id, dispatch)}
                    />
                    <Link to={`contact/edit/${id}`}>
                        <i className="fas fa-pencil-alt"
                           style={{
                            position: 'absolute',
                            top: '25px',
                            right: '50px',
                            fontSize: '20px',
                            cursor: 'pointer', 
                            flaot: 'right',
                            color: 'gray'
                            }} 
                        />
                    </Link>
                    <h4 className="text-left">{name}{'    '}
                        <i 
                            onClick={() => this.setState({ showContactInfo: !this.state.showContactInfo })}
                            className="fas fa-sort-down"
                            style= {{ cursor : 'pointer' }}
                        />
                    </h4>
                    {showContactInfo ? (
                        <ul className="list-group">
                            <li className="list-group-item">Email: {email}</li>
                            <li className="list-group-item">Phone: {phone}</li>
                        </ul>
                    ) : null}
                </div>
                )
            }}
        </Consumer>  
    );
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired,
}

export default Contact;