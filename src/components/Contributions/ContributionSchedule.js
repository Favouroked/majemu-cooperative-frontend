import React from 'react';

import axios from 'axios';

import Aux from '../../hoc/Aux';
import SectionHeader from '../Partials/SectionHeader';
import Table from '../Partials/Table';
import Modal from '../Partials/Modal/Modal';
import GenericModal from '../Partials/GenericModal/GenericModal';

class ContributionSchedule extends React.Component {
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
  };

  showModal = body => {
    const res = this.state.values.filter(obj => body.memberID === obj.memberID);
    this.setState({ show: true, modalContent: res[0] });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  renderSchedule = () => {
    const { memberID, surname, amountPaid } = this.state.modalContent;
    const rows = [];
    for (let index = 0; index < 12; index++) {
      rows.push(this.getTable(index + 1, amountPaid, memberID, surname));
    }
    return rows;
  };

  getTable = (month, amountPaid, memberId, surname) => {
    return (
      <tr>
        <td>{month}</td>
        <td>{memberId}</td>
        <td>{surname}</td>
        <td>{amountPaid}</td>
        <td>
          <input type="checkbox" />
        </td>
      </tr>
    );
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
        <GenericModal handleClose={this.hideModal} show={this.state.show}>
          <div className="box-body table-responsive no-padding">
            <table className="table table-hover">
              <tbody>
                <tr>
                  <th>Month</th>
                  <th>Member ID</th>
                  <th>Surname</th>
                  <th>Contribution</th>
                  <th>Payment Status</th>
                </tr>
                {this.renderSchedule()}
              </tbody>
            </table>
          </div>
        </GenericModal>
      </Aux>
    );
  }
}

export default ContributionSchedule;
