import React from 'react';

import { Link } from 'react-router-dom';
import axios from 'axios';

import GenericModal from '../Partials/GenericModal/GenericModal';
import RegisterForm from '../Partials/RegisterForm';

export default class Register extends React.Component {
  state = {};

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
    axios.post('/auth/register', data)
      .then(response => {
        localStorage.setItem('token', response.data.token);
        this.props.toggleLogin();
      })
      .catch(error => console.error(error));
  }

  render() {
    return (
      <GenericModal
        show={true}
        handleClose={() => alert('You need to be authenticated')}
      >
        <h3>Register Page</h3>
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <div className="box-body">
            <RegisterForm handleInputChange={this.handleInputChange} />
          </div>
          <button type="submit" className="btn btn-info pull-right">
            Register
          </button>
          <Link to="/auth/login">Already registered? Login here</Link>
        </form>
      </GenericModal>
    );
  }
}
