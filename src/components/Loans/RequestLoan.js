import React from 'react';

import axios from 'axios';
import moment from 'moment';

import Aux from '../../hoc/Aux';
import SectionHeader from '../Partials/SectionHeader';
import TextField from '../FormFields/TextField';
import RadioInput from '../FormFields/RadioInput';
import SelectInput from '../FormFields/SelectInput';

import { calculateMonthlyAmount } from '../../utils/Utilities';

export default class RequestLoan extends React.Component {
  state = {};

  handleInputChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === 'dueDate') {
      const nowDate = moment();
      nowDate.add(2, 'years');
      const dueD = moment(value, 'YYYY-MM-DD');
      if (dueD > nowDate) {
        alert('The max payment duration must be 24 months');
      } else {
        this.setState({ [name]: value });
      }
    } else if (name === 'memberID') {
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

  componentDidMount() {
    axios
      .get('/members/guarantors')
      .then(response => {
        this.setState({ guarantors: response.data.data });
      })
      .catch(error => console.error(error));
  }

  handleSubmit = e => {
    e.preventDefault();
    const data = {
      ...this.state,
      startDate: moment().format('YYYY-MM-DD')
    };
    const { amount, salary, dueDate, startDate } = data;
    if (dueDate) {
      const {loansPerMonth, months} = calculateMonthlyAmount(amount, dueDate, startDate);
      if (loansPerMonth > (2 / 3) * salary) {
        alert("Amount can't be greater than 2/3 of salary");
      } else {
        data.loansPerMont = loansPerMonth;
        data.months = months;
        axios
          .post('/loans/request', data)
          .then(response => {
            this.props.history.push('/loans/requested');
          })
          .catch(error => console.error(error));
      }
    } else {
      alert('Due Date', 'Specify a valid due date', 'error');
    }
  };

  render() {
    return (
      <Aux>
        <SectionHeader title="Request Loan" first="Loans" last="Request Loan" />
        <section className="content">
          <div className="row">
            <div style={{ padding: '60px' }}>
              <div className="box box-info">
                <div className="box-header with-border">
                  <h3 className="box-title">
                    Please fill in the information below
                  </h3>
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
                      id="amount"
                      label="Amount"
                      change={this.handleInputChange}
                      name="amount"
                      type="text"
                      placeholder="Amount"
                      valueState={this.state}
                    />
                    <TextField
                      id="salary"
                      label="Salary"
                      change={this.handleInputChange}
                      name="salary"
                      type="number"
                      placeholder="Salary"
                      valueState={this.state}
                    />
                    <TextField
                      id="dueDate"
                      label="Due Date"
                      change={this.handleInputChange}
                      name="dueDate"
                      type="date"
                      valueState={this.state}
                    />
                    <SelectInput
                      label="Loan Type"
                      name="loanType"
                      options={[
                        { name: 'Simple', value: 'Simple' },
                        { name: 'Emergency', value: 'Emergency' },
                        { name: 'Complex', value: 'Complex' }
                      ]}
                      change={this.handleInputChange}
                      valueState={this.state}
                    />
                    <SelectInput
                      label="Guarantor 1"
                      name="guarantor1"
                      options={this.state.guarantors}
                      change={this.handleInputChange}
                      valueState={this.state}
                    />
                    <SelectInput
                      label="Guarantor 2"
                      name="guarantor2"
                      options={this.state.guarantors}
                      change={this.handleInputChange}
                      valueState={this.state}
                    />
                    <div className="box-footer">
                      <button type="submit" className="btn btn-info pull-right">
                        Request Loan
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
