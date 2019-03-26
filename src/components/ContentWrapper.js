import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from './Dashboard';

import AddMember from './Members/AddMember';
import EditMember from './Members/EditMember';
import ViewMember from './Members/ViewMembers';

import AddContribution from './Contributions/AddContribution';
import ListContributions from './Contributions/ListContributions';
import ContributionSchedule from './Contributions/ContributionSchedule';
import EditContribution from './Contributions/EditContribution';
import MyContributions from './Contributions/MyContributions';

import RequestLoan from './Loans/RequestLoan';
import RequestedLoans from './Loans/RequestedLoans';
import ApprovedLoans from './Loans/ApprovedLoans';
import DeclinedLoans from './Loans/DeclinedLoans';
import LoanSchedule from './Loans/LoanSchedule';

import Login from './Auth/Login';
import Register from './Auth/Register';

import NoMatch from './NoMatch';

class ContentWrapper extends React.Component {
  render() {
    return (
      <div className="content-wrapper">
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <Dashboard {...props} theState={this.props.theState} />
            )}
          />
          <Route path="/members/add" component={AddMember} />{' '}
          <Route path="/members/edit" component={EditMember} />{' '}
          <Route path="/members/view" component={ViewMember} />
          <Route path="/contributions/add" component={AddContribution} />{' '}
          <Route path="/contributions/list" component={ListContributions} />{' '}
          <Route
            path="/contributions/schedule"
            component={ContributionSchedule}
          />
          <Route path="/contributions/edit" component={EditContribution} />{' '}
          <Route path="/contributions/mine" component={MyContributions} />
          <Route path="/loans/request" component={RequestLoan} />{' '}
          <Route path="/loans/requested" component={RequestedLoans} />{' '}
          <Route path="/loans/approved" component={ApprovedLoans} />{' '}
          <Route path="/loans/declined" component={DeclinedLoans} />{' '}
          <Route path="/loans/schedule" component={LoanSchedule} />
          <Route
            path="/auth/login"
            render={props => (
              <Login {...props} toggleLogin={this.props.toggleLogin} />
            )}
          />{' '}
          <Route
            path="/auth/register"
            render={props => (
              <Register {...props} toggleLogin={this.props.toggleLogin} />
            )}
          />
          <Route component={NoMatch} />{' '}
        </Switch>{' '}
      </div>
    );
  }
}

export default ContentWrapper;
