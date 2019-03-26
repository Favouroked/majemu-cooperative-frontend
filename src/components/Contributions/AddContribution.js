import React from 'react';

import axios from 'axios';

import Aux from '../../hoc/Aux';
import SectionHeader from '../Partials/SectionHeader';
import TextField from '../FormFields/TextField';
import RadioInput from '../FormFields/RadioInput';
import SelectInput from '../FormFields/SelectInput';

class AddContribution extends React.Component {
  state = {};

  handleInputChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === 'memberID') {
      this.setState({ [name]: value });
      this.getMemberInfo(value);
    } else {
      this.setState({ [name]: value });
    }

    
  };

  getMemberInfo = (memberID) => {
    const data = { memberID };
    axios
      .post('/members', data)
      .then(response => this.setState(response.data.data))
      .catch(error => console.error(error));
  }

  handleSubmit = e => {
    e.preventDefault();
    const data = {
      ...this.state
    };
    axios
      .post('/contributions/add', data)
      .then(response => {
        this.props.history.push('/contributions/mine');
      })
      .catch(error => console.error(error));
  };

  render() {
    return (
      <Aux>
        <SectionHeader
          title="Add Contribution"
          first="Contributions"
          last="Add Contributions"
        />
        <section className="content">
          <div className="row">
            <div style={{ padding: '60px' }}>
              <div className="box box-info">
                <div className="box-header with-border">
                  <h3 className="box-title">New Contribution</h3>
                </div>
                <form className="form-horizontal" onSubmit={this.handleSubmit}>
                  <div className="box-body">
                    <TextField
                      id="memberID"
                      label="Member ID"
                      change={this.handleInputChange}
                      name="memberID"
                      placeholder="Member ID"
                      type="text"
                      valueState={this.state}
                    />
                    <TextField
                      id="surname"
                      label="Surname"
                      change={this.handleInputChange}
                      name="surname"
                      placeholder="Surname"
                      type="text"
                      valueState={this.state}
                    />
                    <TextField
                      id="otherNames"
                      label="Other Names"
                      change={this.handleInputChange}
                      name="otherNames"
                      placeholder="Other Names"
                      type="text"
                      valueState={this.state}
                    />
                    <TextField
                      id="email"
                      label="E-mail"
                      name="email"
                      change={this.handleInputChange}
                      placeholder="E-mail"
                      type="email"
                      valueState={this.state}
                    />
                    <TextField
                      id="phone"
                      label="Phone Number"
                      name="phone"
                      change={this.handleInputChange}
                      placeholder="Phone Number"
                      type="text"
                      valueState={this.state}
                    />

                    <RadioInput
                      label="Gender"
                      name="gender"
                      change={this.handleInputChange}
                      inputs={[
                        { label: 'Male', value: 'male' },
                        { label: 'Female', value: 'female' }
                      ]}
                    />
                    <br />
                    <TextField
                      id="amountPaid"
                      label="Amount Paid"
                      change={this.handleInputChange}
                      name="amountPaid"
                      type="number"
                      placeholder="Amount Paid"
                      valueState={this.state}
                    />
                    <SelectInput
                      label="Contribution Type"
                      name="savingsType"
                      options={[
                        { name: 'Savings', value: 'savings' },
                        { name: 'Shares', value: 'shares' },
                        { name: 'Retirement Savings', value: 'retirement' }
                      ]}
                      change={this.handleInputChange}
                      valueState={this.state}
                    />
                    
                    <TextField
                      id="paymentDate"
                      label="Payment Date"
                      change={this.handleInputChange}
                      name="paymentDate"
                      type="date"
                      valueState={this.state}
                    />
                    <TextField
                      id="narration"
                      label="Narration"
                      change={this.handleInputChange}
                      name="narration"
                      placeholder="Narration"
                      type="text"
                      valueState={this.state}
                    />
                    <div className="box-footer">
                      <button type="submit" className="btn btn-info pull-right">
                        Add Contribution
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

export default AddContribution;
