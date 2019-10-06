import React, { Component } from 'react';
import { connect } from 'react-redux';
import { trackPromise } from 'react-promise-tracker';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { login } from '../../actions/securityActions';

class Login extends Component {

  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  componentWillReceiveProps({ errors, security }) {
    errors && this.setState({ errors });
    return security.validToken && this.props.history.push('/dashboard');
  }

  componentDidMount() {
    const { security, history } = this.props;
    return security.validToken && history.push('/dashboard');
  }

  onSubmit(e) {
    e.preventDefault();
    const { username, password } = this.state;
    const LoginRequest = {
      username,
      password
    };
    trackPromise(this.props.login(LoginRequest));
  }

  render() {
    const {
      username,
      password,
      errors: {
        username: invalidUsername,
        password: invalidPassword
      }
    } = this.state;
    return (
      <div className="login">
        <div className="container">
            <div className="row">
                <div className="col-md-8 m-auto">
                    <h1 className="display-4 text-center">Log In</h1>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input
                              type="email"
                              className={classnames("form-control form-control-lg", {
                                "is-invalid": invalidUsername
                              })}
                              placeholder="Email Address"
                              name="username"
                              value={ username }
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
                              value={ password }
                              onChange={this.onChange} />
                              {
                                invalidPassword && (
                                  <div className="invalid-feedback">
                                    { invalidPassword }
                                  </div>
                                )
                              }
                        </div>
                        <input type="submit" className="btn btn-info btn-block mt-4" />
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  security: PropTypes.object.isRequired
};

const mapStateToProps = ({ security, errors }) => ({
  security,
  errors
});

export default connect(mapStateToProps, { login })(Login);
