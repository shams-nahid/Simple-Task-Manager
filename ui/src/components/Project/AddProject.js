import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { trackPromise } from 'react-promise-tracker';
import classnames from 'classnames';
import { createProject } from '../../actions/projectActions';

class AddProject extends Component {
  constructor() {
    super();

    this.state = {
      projectName: "",
      projectIdentifier: "",
      description: "",
      start_date: "",
      end_date: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  componentWillReceiveProps(props) {
    const { errors } = props;
    if (errors) {
      this.setState({
        errors
      });
    }
  }

  onSubmit(e) {
    e.preventDefault();
    const { projectName, projectIdentifier, description, start_date, end_date } = this.state;
    const newProject = {
      projectName,
      projectIdentifier,
      description,
      start_date,
      end_date
    };
    trackPromise(this.props.createProject(newProject, this.props.history));
  }

  render() {
    const {
      projectName,
      projectIdentifier,
      description,
      start_date,
      end_date,
      errors : {
        projectName: invalidProjectName,
        projectIdentifier: invalidProjectIdentifier,
        description: invalidDescription
      }
    } = this.state;
    return (
      <div className="project">
        <div className="container">
            <div className="row">
                <div className="col-md-8 m-auto">
                    <h5 className="display-4 text-center">Create Project form</h5>
                    <hr />
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input
                              type="text"
                              className={classnames("form-control form-control-lg", {
                                "is-invalid": invalidProjectName
                              })}
                              placeholder="Project Name"
                              name="projectName"
                              value={projectName}
                              onChange={this.onChange} />
                              {
                                invalidProjectName && (
                                  <div className="invalid-feedback">
                                    { invalidProjectName }
                                  </div>
                                )
                              }
                        </div>
                        <div className="form-group">
                            <input
                              type="text"
                              className={classnames("form-control form-control-lg", {
                                "is-invalid": invalidProjectIdentifier
                              })}
                              placeholder="Unique Project ID"
                              name="projectIdentifier"
                              value={projectIdentifier}
                              onChange={this.onChange} />
                            {
                              invalidProjectIdentifier && (
                                <div className="invalid-feedback">
                                  { invalidProjectIdentifier }
                                </div>
                              )
                            }
                        </div>
                        <div className="form-group">
                            <textarea
                              className={classnames("form-control form-control-lg", {
                                "is-invalid": invalidDescription
                              })}
                              placeholder="Project Description"
                              name="description"
                              value={description}
                              onChange={this.onChange}
                            ></textarea>
                            {
                              invalidDescription && (
                                <div className="invalid-feedback">
                                  { invalidDescription }
                                </div>
                              )
                            }
                        </div>
                        <h6>Start Date</h6>
                        <div className="form-group">
                            <input
                              type="date"
                              className="form-control form-control-lg"
                              name="start_date"
                              value={start_date}
                              onChange={this.onChange} />
                        </div>
                        <h6>Estimated End Date</h6>
                        <div className="form-group">
                            <input
                              type="date"
                              className="form-control form-control-lg"
                              name="end_date"
                              value={end_date}
                              onChange={this.onChange} />
                        </div>

                        <input
                          type="submit"
                          className="btn btn-primary btn-block mt-4" />
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
  }
}

AddProject.propTypes = {
  createProject: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = ({ errors }) => ({
  errors
});

export default connect(mapStateToProps, { createProject })(AddProject);
