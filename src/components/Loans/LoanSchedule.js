import React from 'react';

import axios from 'axios';

import Aux from '../../hoc/Aux';
import SectionHeader from '../Partials/SectionHeader';

export default class LoanSchedule extends React.Component {

  state = {
    loan: {}
  };

  componentDidMount() {
    axios.get('/loans/schedule')
      .then(response => this.setState({ loans: response.data.data }))
      .catch(error => console.error(error));
  }

  renderSchedule = () => {
    const { months, loansPerMonth } = this.state.loan;
    const rows = [];
    for (let index = 0; index < months; index++) {
      rows.push(this.getTable(index+1, loansPerMonth));
    }
    return rows;
  }

  getTable = (number, loan) => {
    return (
      <tr>
        <td>{number}</td>
        <td>{loan}</td>
        <td><input type="checkbox" /></td>
      </tr>
    )
  }

  render() {
    
    return (
      <Aux>
        <SectionHeader
          title="Loan Schedule"
          first="Loans"
          last="Loan Schedule"
        />
        <section className="content">
          <div className="row">
            <div className="col-xs-12">
              <div className="box">
                <div className="box-header">
                  <h3 className="box-title">Loan Schedule</h3>
                </div>

                <div className="box-body table-responsive no-padding">
                  <table className="table table-hover">
                    <tbody>
                      <tr>
                        <th>Month</th>
                        <th>Amount</th>
                        <th>Paid</th>
                      </tr>
                      {this.renderSchedule()}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Aux>
    );
  }
}
