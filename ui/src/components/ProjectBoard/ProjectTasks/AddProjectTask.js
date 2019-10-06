import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { trackPromise } from 'react-promise-tracker';
import { addProjectTask } from '../../../actions/backlogActions';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class AddProjectTask extends Component {

  constructor(props) {
      super(props);
      const { id: projectIdentifier } = this.props.match.params;
      this.state = {
          summary: "",
          acceptanceCriteria: "",
          status: "",
          priority: 0,
          dueDate: "",
          projectIdentifier,
          errors: {}
      };
      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps({errors}) {
    if (errors) {
      this.setState({
        errors
      });
    }
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const {
      summary,
      acceptanceCriteria,
      status,
      priority,
      dueDate,
      projectIdentifier
    } = this.state;
    const newProjectTask = {
      summary,
      acceptanceCriteria,
      status,
      priority,
      dueDate,
      projectIdentifier
    };
    trackPromise(this.props.addProjectTask(projectIdentifier, newProjectTask, this.props.history));
  }

  render() {
    const {
        summary,
        acceptanceCriteria,
        status,
        priority,
        dueDate,
        projectIdentifier,
        errors : {
          summary: invalidSummary,
        }
    } = this.state;
    return (
      <div className="add-PBI">
        <div className="container">
            <div className="row">
                <div className="col-md-8 m-auto">
                    <Link to={`/projectBoard/${projectIdentifier}`} className="btn btn-light">
                        Back to Project Board
                    </Link>
                    <h4 className="display-4 text-center">Add Project Task</h4>
                    <p className="lead text-center">Project Name + Project Code</p>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                className={classnames("form-control form-control-lg", {
                                  "is-invalid": invalidSummary
                                })}
                                name="summary"
                                placeholder="Project Task summary"
                                value={summary}
                                onChange={this.onChange} />
                              {
                                invalidSummary && (
                                  <div className="invalid-feedback">
                                    { invalidSummary }
                                  </div>
                                )
                              }
                        </div>
                        <div className="form-group">
                            <textarea
                              className="form-control form-control-lg"
                              placeholder="Acceptance Criteria"
                              name="acceptanceCriteria"
                              value={acceptanceCriteria}
                              onChange={this.onChange}
                            ></textarea>
                        </div>
                        <h6>Due Date</h6>
                        <div className="form-group">
                            <input
                              type="date"
                              className="form-control form-control-lg"
                              name="dueDate"
                              value={dueDate}
                              onChange={this.onChange} />
                        </div>
                        <div className="form-group">
                            <select
                              className="form-control form-control-lg"
                              name="priority"
                              value={priority}
                              onChange={this.onChange} >
                                <option value={0}>Select Priority</option>
                                <option value={1}>High</option>
                                <option value={2}>Medium</option>
                                <option value={3}>Low</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <select
                              className="form-control form-control-lg"
                              name="status"
                              value={status}
                              onChange={this.onChange} >
                                <option value="">Select Status</option>
                                <option value="TO_DO">TO DO</option>
                                <option value="IN_PROGRESS">IN PROGRESS</option>
                                <option value="DONE">DONE</option>
                            </select>
                        </div>

                        <input type="submit" className="btn btn-primary btn-block mt-4" />
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
  }
}

AddProjectTask.propTypes = {
    addProjectTask: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = ({errors}) => ({
  errors
});

export default connect(mapStateToProps, { addProjectTask })(AddProjectTask);
