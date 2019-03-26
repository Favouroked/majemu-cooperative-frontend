import React from 'react';
import axios from 'axios';

import Aux from '../hoc/Aux';

class Dashboard extends React.Component {
  state = {};

  componentDidMount() {
    axios
      .get('/dashboard')
      .then(response => {
        this.setState(response.data.data)
      })
      .catch(error => console.error(error));
  }

  render() {
    return (
      <Aux>
        <section className="content-header">
          <h1>Dashboard</h1>
          <ol className="breadcrumb">
            <li>
              <a href="#">
                <i className="fa fa-dashboard" /> Home
              </a>
            </li>
            <li className="active">Dashboard</li>
          </ol>
        </section>

        <section className="content">
        {this.props.theState.role === 'exco' ?<Aux><div className="header">
            <p style={{ textAlign: 'center' }}>
              <b>Overall Account Status</b>
            </p>
          </div></Aux> : null }

          <div className="row">
          {this.props.theState.role === 'exco' ? <Aux><div className="col-md-4 col-sm-6 col-xs-12">
              <div className="info-box">
                <span className="info-box-icon bg-aqua">
                  <i className="fa fa-users" />
                </span>

                <div className="info-box-content">
                  <span className="info-box-text">Registered Members</span>
                  <span className="info-box-number">{this.state.members}</span>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="info-box">
                <span className="info-box-icon bg-green">
                  <i className="fa fa-dollar" />
                </span>

                <div className="info-box-content">
                  <span className="info-box-text">Contributions</span>
                  <span className="info-box-number">{this.state.contributions}</span>
                </div>
              </div>
            </div>

            <div className="clearfix visible-sm-block" />

            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="info-box">
                <span className="info-box-icon bg-orange">
                  <i className="fa fa-money" />
                </span>

                <div className="info-box-content">
                  <span className="info-box-text">Loans</span>
                  <span className="info-box-number">{this.state.loans}</span>
                </div>
              </div>
            </div></Aux> : null }

            <hr />

            <section className="content">
              <div className="header">
                <p style={{ textAlign: 'center' }}>
                  <b>Personal Account Status</b>
                </p>
              </div>

              <div className="row">
                <div className="col-md-4 col-sm-6 col-xs-12">
                  <div className="info-box">
                    <span className="info-box-icon bg-green">
                      <i className="fa fa-dollar" />
                    </span>

                    <div className="info-box-content">
                      <span className="info-box-text">Contributions</span>
                      <span className="info-box-number">{this.state.myContributions}</span>
                    </div>
                  </div>
                </div>
                <div className="clearfix visible-sm-block" />

                <div className="col-md-4 col-sm-6 col-xs-12">
                  <div className="info-box">
                    <span className="info-box-icon bg-orange">
                      <i className="fa fa-money" />
                    </span>

                    <div className="info-box-content">
                      <span className="info-box-text">Loans</span>
                      <span className="info-box-number">{this.state.myLoans}</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
        <div className="control-sidebar-bg" />
      </Aux>
    );
  }
}

export default Dashboard;
