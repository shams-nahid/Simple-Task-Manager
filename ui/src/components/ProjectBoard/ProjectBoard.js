import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Backlog from './Backlog';
import { connect } from 'react-redux';
import { trackPromise } from 'react-promise-tracker';
import PropTypes from 'prop-types';
import { getBacklog } from '../../actions/backlogActions';

class ProjectBoard extends Component {

  constructor() {
    super();
    this.state = {
      errors: {}
    };
  }

  componentWillReceiveProps({errors}) {
    if (errors) {
      this.setState({
        errors
      });
    }
  }

  componentDidMount() {
    const { id: projectIdentifier } = this.props.match.params;
    trackPromise(this.props.getBacklog(projectIdentifier));
  }

  render() {
    const { id: projectIdentifier } = this.props.match.params;
    const { project_tasks } = this.props.backlog;
    const { errors } = this.props;

    const boardAlgorithm = (errors, project_tasks) => {
      if (project_tasks.length < 1) {
        if (errors.projectNotFound) {
          return (
            <div className='alert alert-danger text-center' role='alert'>
              { errors.projectNotFound }
            </div>
          );
        } else {
          return (
            <div className='alert alert-info text-center' role='alert'>
              No tasks found here
            </div>
          );
        }
      } else {
        return (
          <Backlog project_tasks={project_tasks} />
        );
      }
    };
    return (
      <div className="container">
          <Link to={`/addProjectTask/${projectIdentifier}`} className="btn btn-primary mb-3">
              <i className="fas fa-plus-circle"> Create Project Task</i>
          </Link>
          <br />
          <hr />
          { boardAlgorithm(errors, project_tasks) }
        </div>
    )
  }
}

ProjectBoard.propTypes = {
    backlog: PropTypes.object.isRequired,
    getBacklog: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = ({ backlog, errors }) => ({
  backlog,
  errors
});

export default connect(mapStateToProps, {
    getBacklog
})(ProjectBoard);
