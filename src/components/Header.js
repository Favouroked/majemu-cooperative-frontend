import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  handleLogout = () => {
    localStorage.removeItem('token');
    this.props.toggleLogin();
  };

  render() {
    return (
      <header className="main-header">
        <Link to="/" className="logo">
          <span className="logo-mini">
            <b>CO</b>OP
          </span>

          <span className="logo-lg">
            <b>COOP</b>
          </span>
        </Link>

        <nav className="navbar navbar-static-top">
          <a
            href="#"
            className="sidebar-toggle"
            data-toggle="push-menu"
            role="button"
          >
            <span className="sr-only">Toggle navigation</span>
          </a>
          <div className="navbar-custom-menu">
            <ul className="nav navbar-nav">
              <li className="dropdown notifications-menu">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  <i className="fa fa-bell-o" />
                  <span className="label label-warning">3</span>
                </a>
                <ul className="dropdown-menu">
                  <li className="header">Members that requested for loan</li>
                  <li>
                    <ul className="menu">
                      <li>
                        <a href="#">
                          <i className="fa fa-user text-blue" /> Tobi Smith{' '}
                          <br />
                          <small>5 months ago</small>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-user text-blue" /> Segun Adams{' '}
                          <br />
                          <small> 1 month ago</small>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-user text-blue" />
                          Eze Chukwudi <br />
                          <small>2 months ago</small>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="footer">
                    <a href="#">View all</a>
                  </li>
                </ul>
              </li>

              <li className="dropdown user user-menu">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  <img
                    src="/dist/img/user2-160x160.jpg"
                    className="user-image"
                    alt="User"
                  />
                  <span className="hidden-xs">
                    {this.props.theState.name || null}
                  </span>
                </a>
                <ul className="dropdown-menu">
                  <li className="user-header">
                    <img
                      src="/dist/img/user2-160x160.jpg"
                      className="img-circle"
                      alt="User"
                    />

                    <p>
                      {this.props.theState.name || null} -{' '}
                      {this.props.theState.role === 'exco' ? 'Admin' : 'Member'}
                      <small>Member since Nov. 2012</small>
                    </p>
                  </li>

                  <li className="user-footer">
                    <div className="pull-right">
                      <a
                        href="#"
                        className="btn btn-default btn-flat"
                        onClick={this.handleLogout}
                      >
                        Sign out
                      </a>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
