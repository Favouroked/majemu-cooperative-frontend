import React from 'react';

import axios from 'axios';

import Aux from '../../hoc/Aux';
import SectionHeader from '../Partials/SectionHeader';
import Table from '../Partials/Table';
import Modal from '../Partials/Modal/Modal';

export default class MyContributions extends React.Component {
  state = { show: false, modalContent: null, values: null };

  headers = [
    { name: 'Member ID', value: 'memberID' },
    { name: 'Surname', value: 'surname' },
    { name: 'E-mail', value: 'email' },
    { name: 'Amount Paid', value: 'amountPaid' },
    { name: 'Payment Date', value: 'paymentDate' }
  ];

  componentDidMount() {
    axios
      .get('/contributions/mine')
      .then(response => this.setState({ values: response.data.data }))
      .catch(error => console.error(error));
  }

  showModal = body => {
    const res = this.state.values.filter(obj => body.memberID === obj.memberID);
    this.setState({ show: true, modalContent: res[0] });
  };

  hideModal = () => {
    this.setState({ show: false });
	};
	
  render() {
    return (
      <Aux>
        <SectionHeader
          title="My Contribution"
          first="Contributions"
          last="My Contributions"
        />
				<Table
          title="List of My Contributions"
          headers={this.headers}
          content={this.state.values}
          openModal={this.showModal}
        />
        <Modal
          content={this.state.modalContent}
          show={this.state.show}
          handleClose={this.hideModal}
        />
      </Aux>
    );
  }
}
