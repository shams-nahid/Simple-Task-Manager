import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logout } from '../../actions/securityActions';

class Header extends Component {
  logout() {
    this.props.logout();
    window.location.href = '/';
  }
  render() {
    const { validToken, user } = this.props.security;
    const userIsAuthenticated = (
      <div className="collapse navbar-collapse" id="mobile-nav">
          <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                  <Link className="nav-link" to="/dashboard">
                      Dashboard
                  </Link>
              </li>
          </ul>

          <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                  <Link className="nav-link " to="/register">
                    <i className="fas fa-user-circle mr-1" />
                    { user.fullName }
                  </Link>
              </li>
              <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/logout"
                    onClick={ this.logout.bind(this) }>
                      Logout
                  </Link>
              </li>
          </ul>
      </div>
    );
    const userIsNotAuthenticated = (
      <div className="collapse navbar-collapse" id="mobile-nav">
          <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                  <Link className="nav-link " to="/register">
                    Signup
                  </Link>
              </li>
              <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/login">
                      Login
                  </Link>
              </li>
          </ul>
      </div>
    );

    const headerLinks = (validToken && user) ? userIsAuthenticated : userIsNotAuthenticated;

    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
        <div className="container">
            <Link className="navbar-brand" to="dashboard">
                Simple Task Management Tool
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                <span className="navbar-toggler-icon" />
            </button>
            { headerLinks }
        </div>
    </nav>
    )
  }
}

Header.propTypes = {
  logout: PropTypes.func.isRequired,
  security: PropTypes.object.isRequired
};

const mapStateToProps = ({ security }) => ({
  security
});

export default connect(mapStateToProps, { logout })(Header);
