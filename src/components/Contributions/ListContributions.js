import React from 'react';

import axios from 'axios';

import Aux from '../../hoc/Aux';
import SectionHeader from '../Partials/SectionHeader';
import Table from '../Partials/Table';
import Modal from '../Partials/Modal/Modal';

class ListContributions extends React.Component {
  state = { show: false, modalContent: null, values: null };

  headers = [
    { name: 'Member ID', value: 'memberID' },
    { name: 'Surname', value: 'surname' },
    { name: 'E-mail', value: 'email' },
    { name: 'Amount Paid', value: 'amountPaid' },
    { name: 'Payment Date', value: 'paymentDate' }
  ];

  componentDidMount() {
    this.afterMount();
  }

  afterMount = () => {
    axios
      .get('/contributions/list')
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

  handleEdit = (content) => {
    localStorage.setItem('editContribution', JSON.stringify(content));
    this.props.history.push('/contributions/edit');
  };

  handleDelete = (content) => {
    axios
      .post('/contributions/delete', content)
      .then(response => {
        this.afterMount();
        this.hideModal()
      })
      .catch(error => console.error(error));
  };

  render() {
    return (
      <Aux>
        <SectionHeader
          title="Contributions List"
          first="Contributions"
          last="Contributions List"
        />
        <Table
          title="List of Contributions"
          headers={this.headers}
          content={this.state.values}
          openModal={this.showModal}
        />
        <Modal
          content={this.state.modalContent}
          show={this.state.show}
          handleClose={this.hideModal}
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
          editContribution
        />
      </Aux>
    );
  }
}

export default ListContributions;
