import React from 'react';

import axios from 'axios';
import swal from 'sweetalert2';

import GenericModal from '../Partials/GenericModal/GenericModal';

export default class Login extends React.Component {
  state = {
    memberID: '',
    password: ''
  };

  handleInputChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      ...this.state
    };
    axios.post('/auth/login', data)
      .then(response => {
        if (response.status === 201) {
          const {token, name, role, user} = response.data;
          localStorage.setItem('token', token);
          localStorage.setItem('user', JSON.stringify(user));
          this.props.toggleLogin(name, role);
        } else {
          // swal('Login', 'Login credentials incorrect', 'error')
          alert("Login credentials incorrect");
        }
        
      })
      .catch(error => console.error(error));
  }

  render() {
    return (
      <GenericModal
        show={true}
        handleClose={() => alert('You need to be authenticated')}
      >
        <h3 className="text-center">Login Page</h3>
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <div className="box-body">
            <div className="form-group">
              <label htmlFor="memberID">Member ID</label>
              <input
                type="text"
                className="form-control"
                id="memberID"
                name="memberID"
                value={this.state.memberID}
                onChange={this.handleInputChange}
                placeholder="Enter memberID"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChange}
                placeholder="Password"
              />
            </div>
          </div>
          <button type="submit" className="btn btn-info pull-right">
            Sign in
          </button>
        </form>
      </GenericModal>
    );
  }
}
