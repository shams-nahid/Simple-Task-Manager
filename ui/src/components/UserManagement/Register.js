import React, { Component } from 'react';
import { createNewUser } from '../../actions/securityActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class Register extends Component {

  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      fullName: '',
      confirmPassword: '',
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps({ errors }) {
    if (errors) {
      this.setState({ errors });
    }
  }

  componentDidMount() {
    const { security, history } = this.props;
    return security.validToken && history.push('/dashboard');
  }


  onChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const {
      username,
      password,
      fullName,
      confirmPassword
    } = this.state;

    const newUser = {
      username,
      fullName,
      password,
      confirmPassword
    };

    this.props.createNewUser(newUser, this.props.history);
  }

  render() {
    const {
      username,
      password,
      fullName,
      confirmPassword,
      errors: {
        username: invalidUsername,
        password: invalidPassword,
        fullName: invalidFullName,
        confirmPassword: invalidConfirmPassword
      }
    } = this.state;
    return (
      <div className="register">
        <div className="container">
            <div className="row">
                <div className="col-md-8 m-auto">
                    <h1 className="display-4 text-center">Sign Up</h1>
                    <p className="lead text-center">Create your Account</p>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input
                              type="text"
                              className={classnames("form-control form-control-lg", {
                                "is-invalid": invalidFullName
                              })}
                              placeholder="Full Name"
                              name="fullName"
                              value={fullName}
                              onChange={this.onChange} />
                              {
                                invalidFullName && (
                                  <div className="invalid-feedback">
                                    { invalidFullName }
                                  </div>
                                )
                              }
                        </div>
                        <div className="form-group">
                            <input
                              type="email"
                              className={classnames("form-control form-control-lg", {
                                "is-invalid": invalidUsername
                              })}
                              placeholder="Email Address"
                              name="username"
                              value={username}
                              onChange={this.onChange} />
                              {
                                invalidUsername && (
                                  <div className="invalid-feedback">
                                    { invalidUsername }
                                  </div>
                                )
                              }
                        </div>
                        <div className="form-group">
                            <input
                              type="password"
                              className={classnames("form-control form-control-lg", {
                                "is-invalid": invalidPassword
                              })}
                              placeholder="Password"
                              name="password"
                              value={password}
                              onChange={this.onChange} />
                              {
                                invalidPassword && (
                                  <div className="invalid-feedback">
                                    { invalidPassword }
                                  </div>
                                )
                              }
                        </div>
                        <div className="form-group">
                            <input
                              type="password"
                              className={classnames("form-control form-control-lg", {
                                "is-invalid": invalidConfirmPassword
                              })}
                              placeholder="Confirm Password"
                              name="confirmPassword"
                              value={confirmPassword}
                              onChange={this.onChange} />
                              {
                                invalidConfirmPassword && (
                                  <div className="invalid-feedback">
                                    { invalidConfirmPassword }
                                  </div>
                                )
                              }
                        </div>
                        <input
                          type="submit"
                          className="btn btn-info btn-block mt-4" />
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
  }
}

Register.propTypes = {
  createNewUser: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  security: PropTypes.object.isRequired
};

const mapStateToProps = ({ errors, security }) => ({
  errors,
  security
});

export default connect(mapStateToProps, { createNewUser })(Register);
