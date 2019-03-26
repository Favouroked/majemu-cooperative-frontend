import React from 'react';

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Aux from '../hoc/Aux';

class Aside extends React.Component {
  static contextTypes = {
    router: PropTypes.object
  };

  handleClick = e => {};

  render() {
    return (
      <aside className="main-sidebar">
        <section className="sidebar">
          <div className="user-panel">
            <div className="pull-left image">
              <img
                src="/dist/img/user2-160x160.jpg"
                className="img-circle"
                alt="User"
              />
            </div>
            <div className="pull-left info">
              <p>{this.props.theState.name}</p>
            </div>
          </div>

          <ul className="sidebar-menu" data-widget="tree">
            <li className="active treeview menu-open">
              <a href="#" onClick={e => this.context.router.history.push('/')}>
                <i className="fa fa-dashboard" /> <span>Dashboard</span>
                <span className="pull-right-container" />
              </a>
            </li>

            {this.props.theState.role === 'exco' ? (
              <li className="treeview">
                <a href="#">
                  <i className="fa fa-users" /> <span>Members</span>
                  <span className="pull-right-container">
                    <i className="fa fa-angle-left pull-right" />
                  </span>
                </a>
                <ul className="treeview-menu">
                  <li
                    className={
                      window.location.pathname === '/members/add'
                        ? 'active'
                        : null
                    }
                  >
                    <Link to="/members/add">
                      <i className="fa fa-circle-o" /> Add Member
                    </Link>
                  </li>
                  <li
                    className={
                      window.location.pathname === '/members/view'
                        ? 'active'
                        : null
                    }
                  >
                    <Link to="/members/view">
                      <i className="fa fa-circle-o" />
                      View Members
                    </Link>
                  </li>
                </ul>
              </li>
            ) : null}

            <li className="treeview">
              <a href="#">
                <i className="fa fa-calendar" />
                <span>Contributions</span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right" />
                </span>
              </a>
              <ul className="treeview-menu">
                {this.props.theState.role === 'exco' ? (
                  <li
                    className={
                      window.location.pathname === '/contributions/add'
                        ? 'active'
                        : null
                    }
                  >
                    <Link to="/contributions/add">
                      <i className="fa fa-circle-o" /> Add Contribution
                    </Link>
                  </li>
                ) : null}
                {this.props.theState.role === 'exco' ? (
                  <li
                    className={
                      window.location.pathname === '/contributions/list'
                        ? 'active'
                        : null
                    }
                  >
                    <Link to="/contributions/list">
                      <i className="fa fa-circle-o" /> Contribution List
                    </Link>
                  </li>
                ) : null}
                {this.props.theState.role === 'exco' ? (
                  <li
                    className={
                      window.location.pathname === '/contributions/schedule'
                        ? 'active'
                        : null
                    }
                  >
                    <Link to="/contributions/schedule">
                      <i className="fa fa-circle-o" /> Contribution Schedule
                    </Link>
                  </li>
                ) : null}
                <li
                  className={
                    window.location.pathname === '/contributions/mine'
                      ? 'active'
                      : null
                  }
                >
                  <Link to="/contributions/mine">
                    <i className="fa fa-circle-o" /> My COntributions
                  </Link>
                </li>
              </ul>
            </li>

            <li className="treeview">
              <a href="#">
                <i className="fa fa-money" />
                <span>Loans</span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right" />
                </span>
              </a>
              <ul className="treeview-menu">
                <li
                  className={
                    window.location.pathname === '/loans/request'
                      ? 'active'
                      : null
                  }
                >
                  <Link to="/loans/request">
                    <i className="fa fa-circle-o" /> Request Loan
                  </Link>
                </li>
                {this.props.theState.role === 'exco' ? (
                  <Aux>
                    <li
                      className={
                        window.location.pathname === '/loans/requested'
                          ? 'active'
                          : null
                      }
                    >
                      <Link to="/loans/requested">
                        <i className="fa fa-circle-o" /> List Requested Loans
                      </Link>
                    </li>
                    <li
                      className={
                        window.location.pathname === '/loans/approved'
                          ? 'active'
                          : null
                      }
                    >
                      <Link to="/loans/approved">
                        <i className="fa fa-circle-o" />
                        List Approved Loans
                      </Link>
                    </li>
                    <li
                      className={
                        window.location.pathname === '/loans/schedule'
                          ? 'active'
                          : null
                      }
                    >
                      <Link to="/loans/schedule">
                        <i className="fa fa-circle-o" />
                        Loans Schedule
                      </Link>
                    </li>
                    <li
                      className={
                        window.location.pathname === '/loans/declined'
                          ? 'active'
                          : null
                      }
                    >
                      <Link to="/loans/declined">
                        <i className="fa fa-circle-o" /> List Declined Loans
                      </Link>
                    </li>
                  </Aux>
                ) : null}
              </ul>
            </li>
          </ul>
        </section>
      </aside>
    );
  }
}

export default Aside;
