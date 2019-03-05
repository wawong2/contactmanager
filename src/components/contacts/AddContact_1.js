import React, { Component } from 'react';

class AddContact extends Component {

  constructor(props) {
    super(props);

    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
  }

  onSubmit = (e) => {
    e.preventDefault();

    const contact = {
      name: this.nameInput.current.value,
      eamil: this.emailInput.current.value,
      phone: this.phoneInput.current.value
    };

    console.log(contact);
  }

  static defaultProps = { 
    name: 'Fred smith', 
    email: 'fred@yahoo.com', 
    phone: '111-222-3333' 
  }

  render() {
    const { name, email, phone } = this.props;

    return (
        <div className="card mb-3">
            <div className="card-header">Add Contact</div>
            <div className="card-bdoy">
              <form onSubmit={this.onSubmit}>
                <div className="form-group" >
                  <label htmlFor="name">Name</label>
                  <input type="text"
                         name="name" 
                         defaultValue={name}
                         className="form-control form-control-lig" 
                         placeholder="Enter Name..."
                         ref={this.nameInput}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" 
                         name="email" 
                         defaultValue={email}  
                         className="form-control form-control-lig" 
                         placeholder="Enter Email..."
                         ref={this.emailInput}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input type="text" 
                         name="phone" 
                         defaultValue={phone}
                         className="form-control form-control-lig" 
                         placeholder="Enter phone..."
                         ref={this.phoneInput}
                  />
                </div>
                <input type="submit" value="Add Contact" className="btn btn-light btn-block"/>
              </form>
            </div>
            
        </div>
    );
  }
}

export default AddContact;
