import React from 'react';

import { getBanks, getStates } from '../../utils/Utilities';

import Aux from '../../hoc/Aux';
import TextField from '../FormFields/TextField';
import RadioInput from '../FormFields/RadioInput';
import SelectInput from '../FormFields/SelectInput';

export default class RegisterForm extends React.Component {
  state = { banks: null, states: null};

  async componentDidMount() {
    const states = await getStates();
    const banks = await getBanks();
    this.setState({banks, states});
  }

  render() {
    return (
      <Aux>
        <TextField
          id="memberID"
          label="Member ID"
          name="memberID"
          placeholder="Member ID"
          type="text"
          change={this.props.handleInputChange}
          valueState={this.props.state}
        />
        <TextField
          id="password"
          label="Password"
          name="password"
          placeholder="Password"
          type="password"
          change={this.props.handleInputChange}
          valueState={this.props.state}
        />
        <TextField
          id="surname"
          label="Surname"
          name="surname"
          placeholder="Surname"
          type="text"
          change={this.props.handleInputChange}
          valueState={this.props.state}
        />
        <TextField
          id="otherNames"
          label="Other Names"
          name="otherNames"
          placeholder="Other Names"
          type="text"
          change={this.props.handleInputChange}
          valueState={this.props.state}
        />
        <TextField
          id="email"
          label="E-mail"
          name="email"
          placeholder="E-mail"
          type="email"
          change={this.props.handleInputChange}
          valueState={this.props.state}
        />
        <TextField
          id="phone"
          label="Phone Number"
          name="phone"
          placeholder="Phone Number"
          type="text"
          change={this.props.handleInputChange}
          valueState={this.props.state}
        />
        <TextField
          id="dob"
          label="Date of Birth"
          name="dob"
          type="date"
          change={this.props.handleInputChange}
          valueState={this.props.state}
        />
        <RadioInput
          label="Gender"
          name="gender"
          inputs={[
            { label: 'Male', value: 'male' },
            { label: 'Female', value: 'female' }
          ]}
          change={this.props.handleInputChange}
        />
        <RadioInput
          label="Marital Status"
          name="maritalStatus"
          inputs={[
            { label: 'Single', value: 'single' },
            { label: 'Married', value: 'married' },
            { label: 'Divorced', value: 'divorced' }
          ]}
          change={this.props.handleInputChange}
        />
        <RadioInput
          label="Role"
          name="role"
          inputs={[
            { label: 'Exco', value: 'exco' },
            { label: 'Member', value: 'member' }
          ]}
          change={this.props.handleInputChange}
          valueState={this.props.state}
        />
        <br />
        <TextField
          id="accountNo"
          label="Member Account No"
          name="accountNo"
          type="text"
          placeholder="Member Account No"
          change={this.props.handleInputChange}
          valueState={this.props.state}
        />
        <SelectInput
          label="Bank Name"
          name="bankName"
          options={this.state.banks}
          change={this.props.handleInputChange}
          valueState={this.props.state}
        />
        <SelectInput
          label="State of Origin"
          name="state"
          options={this.state.states}
          change={this.props.handleInputChange}
          valueState={this.props.state}
        />
        <TextField
          id="homeTown"
          label="Home Town"
          name="homeTown"
          placeholder="Home Town"
          type="text"
          change={this.props.handleInputChange}
          valueState={this.props.state}
        />
        <TextField
          id="contactAddress"
          label="Contact Address"
          name="contactAddress"
          placeholder="Contact Address"
          type="text"
          change={this.props.handleInputChange}
          valueState={this.props.state}
        />
        <TextField
          id="contributionAmount"
          label="Contribution Amount"
          name="contributionAmount"
          placeholder="Contribution Amount"
          type="text"
          change={this.props.handleInputChange}
          valueState={this.props.state}
        />
        <TextField
          id="startDate"
          label="Start Date"
          name="startDate"
          type="date"
          change={this.props.handleInputChange}
          valueState={this.props.state}
        />
        <TextField
          id="workplace"
          label="Place of Work"
          name="workplace"
          placeholder="Place of Work"
          type="text"
          change={this.props.handleInputChange}
          valueState={this.props.state}
        />
        <TextField
          id="position"
          label="Position"
          name="position"
          placeholder="Position"
          type="text"
          change={this.props.handleInputChange}
          valueState={this.props.state}
        />
        <TextField
          id="nok"
          label="Next of Kin"
          name="nok"
          placeholder="Next of Kin"
          type="text"
          change={this.props.handleInputChange}
          valueState={this.props.state}
        />
        <TextField
          id="nokAddress"
          label="Next of Kin Address"
          name="nokAddress"
          placeholder="Next of Kin Address"
          type="text"
          change={this.props.handleInputChange}
          valueState={this.props.state}
        />
        <TextField
          id="nokPhone"
          label="Next of Kin Phone"
          name="nokPhone"
          placeholder="Next of Kin Phone"
          type="text"
          change={this.props.handleInputChange}
          valueState={this.props.state}
        />
      </Aux>
    );
  }
  
};
