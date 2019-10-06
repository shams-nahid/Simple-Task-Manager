import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Landing extends Component {

  componentDidMount() {
    const { security, history } = this.props;
    return security.validToken && history.push('/dashboard');
  }

  render() {
    return (
      <div className="landing">
        <div className="light-overlay landing-inner text-dark">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h1 className="display-3 mb-4">Simple Task Management Tool</h1>
                        <p className="lead">
                            Manage daily tasks more efficiently
                        </p>
                        <hr />
                        <Link to="/register" className="btn btn-lg btn-primary mr-2">
                            Sign Up
                        </Link>
                        <Link to="/login" className="btn btn-lg btn-secondary mr-2">
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
  }
}

Landing.propTypes = {
  security: PropTypes.object.isRequired
};

const mapStateToProps = ({ security }) => ({ security });

export default connect(mapStateToProps, {})(Landing);
