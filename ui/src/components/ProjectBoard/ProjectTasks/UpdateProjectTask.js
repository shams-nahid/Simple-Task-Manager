import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { getProjectTask, updateProjectTask } from '../../../actions/backlogActions';

class UpdateProjectTask extends Component {

	constructor() {
		super();

		this.state = {
			id: '',
			projectSequence: '',
			summary: '',
			acceptanceCriteria: '',
			status: '',
			priority: '',
			dueDate: '',
			projectIdentifier: '',
			create_At: '',
			errors: {}
		};

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	componentDidMount() {
		const { backlog_id, pt_id } = this.props.match.params;
		this.props.getProjectTask(backlog_id, pt_id, this.props.history);
	}

	componentWillReceiveProps(nextProps) {
		const {
			projectTask: {
			id,
			projectSequence,
			summary,
			acceptanceCriteria,
			status,
			priority,
			dueDate,
			projectIdentifier,
			create_At
			},
			errors
		} = nextProps;

		this.setState({
			id,
			projectSequence,
			summary,
			acceptanceCriteria,
			status,
			priority,
			dueDate,
			projectIdentifier,
			create_At,
			errors
		});
	}

	onChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	onSubmit(e) {
		e.preventDefault();
		const {
			id,
			projectSequence,
			summary,
			acceptanceCriteria,
			status,
			priority,
			dueDate,
			projectIdentifier,
			create_At
		} = this.state;
		const UpdatedProjectTask = {
			id,
			projectSequence,
			summary,
			acceptanceCriteria,
			status,
			priority,
			dueDate,
			projectIdentifier,
			create_At
		};
		const { updateProjectTask, history } = this.props;
		updateProjectTask(projectIdentifier, projectSequence, UpdatedProjectTask, history);		
	}

  render() {
		const { 
			projectIdentifier, 
			projectSequence,
			summary,
			acceptanceCriteria,
			dueDate,
			priority,
			status,
			errors
		}  = this.state;
		let invalidSummary = null;
		if (errors && errors.summary) {
			invalidSummary = errors.summary;
		} 
    return (
      <div className="add-PBI">
        <div className="container">
            <div className="row">
                <div className="col-md-8 m-auto">
                    <Link to={`/projectBoard/${projectIdentifier}`} className="btn btn-light">
                        Back to Project Board
                    </Link>
                    <h4 className="display-4 text-center">Update Project Task</h4>
                    <p className="lead text-center">Project Name: { projectIdentifier } | Project Task ID: { projectSequence }</p>
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
															onChange={this.onChange} >
														</textarea>
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

UpdateProjectTask.propTypes = {
		getProjectTask: PropTypes.func.isRequired,
		updateProjectTask: PropTypes.func.isRequired,
    projectTask: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = ({ errors, backlog: { project_task } }) => ({
		projectTask: project_task,
		errors
});

export default connect(mapStateToProps, { getProjectTask, updateProjectTask })(UpdateProjectTask);
