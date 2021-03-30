import React from "react";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

export default class Example extends React.Component {
  state = {
    isOpen: false,
  };
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  signIn = () => {
    return (
      <Nav className="ml-auto" navbar>
        <NavItem>
          <Link to="/login" className="nav-link">
            Logout
          </Link>
        </NavItem>
      </Nav>
    );
  };

  signOut = () => {
    return (
      <Nav className="ml-auto" navbar>
        <NavItem>
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/signup" className="nav-link">
            Signup
          </Link>
        </NavItem>
      </Nav>
    );
  };

  render() {
    return (
      <div>
        <Navbar color="primary" dark expand="md">
          <NavbarBrand href="/">ProfileHub</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Switch>
              <Route exact path="/profile" render={this.signIn} />
              <Route path="/" render={this.signOut} />
            </Switch>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
