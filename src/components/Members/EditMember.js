import React from 'react';

import axios from 'axios';
import moment from 'moment';

import Aux from '../../hoc/Aux';
import SectionHeader from '../Partials/SectionHeader';
import RegisterForm from '../Partials/RegisterForm';

const initialState = {
};

class EditMember extends React.Component {

  constructor(props) {
    super(props);
    const m = localStorage.getItem('editMember');
    const editMember = JSON.parse(m);
    this.state = { ...editMember };
  }
  state = initialState;

  handleInputChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const data = {
      ...this.state
    };
    axios
      .post('/members/edit', data)
      .then(response => {
        this.props.history.push('/members/view');
      })
      .catch(error => console.error(error));
  };
  render() {
    return (
      <Aux>
        <SectionHeader title="Add Member" first="Members" last="Add Member" />
        <section className="content">
          <div className="row">
            <div style={{ padding: '60px' }}>
              <div className="box box-info">
                <div className="box-header with-border">
                  <h3 className="box-title">Registeration Form</h3>
                </div>
                <form className="form-horizontal" onSubmit={this.handleSubmit}>
                  <div className="box-body">
                    <RegisterForm handleInputChange={this.handleInputChange} state={this.state} />
                    <div className="box-footer">
                      <button type="submit" className="btn btn-info pull-right">
                        Add Member
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Aux>
    );
  }
}

export default EditMember;
