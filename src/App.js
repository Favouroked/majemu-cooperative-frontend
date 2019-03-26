import React, { Component } from "react";

import { Redirect, withRouter } from "react-router-dom";

import Aux from "./hoc/Aux";
import Header from "./components/Header";
import Aside from "./components/Aside";
import ContentWrapper from "./components/ContentWrapper";

class App extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("token");
    this.state = token ? { loggedIn: true } : { loggedIn: false };
  }

  componentDidMount() {
    const user = localStorage.getItem("user");
    if (user) {
      let u = JSON.parse(user);
      const name = `${u.surname} ${u.otherNames}`;
      this.setState({ role: u.role, name });
    }
  }

  toggleLogin = (name, role) => {
    const thePath = this.state.loggedIn ? "/auth/login" : "/";
    this.setState((state, props) => ({
      loggedIn: !state.loggedIn,
      name,
      role
    }));
    this.props.history.push(thePath);
  };

  render() {
    let realComp = (
      <Aux>
        <Header toggleLogin={this.toggleLogin} theState={this.state} />
        <Aside theState={this.state} />
        <ContentWrapper toggleLogin={this.toggleLogin} theState={this.state} />
      </Aux>
    );
    let path = window.location.pathname;
    let comp;
    this.state.loggedIn || path === "/auth/login" || path === "/auth/register"
      ? (comp = realComp)
      : (comp = (
          <Redirect
            to={path === "/auth/register" ? "/auth/register" : "/auth/login"}
          />
        ));
    return comp;
  }
}

export default withRouter(App);
