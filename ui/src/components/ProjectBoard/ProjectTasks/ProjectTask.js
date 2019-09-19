import React, { Component } from 'react'

class ProjectTask extends Component {
  render() {
    const { projectSequence, priority, summary, acceptanceCriteria } = this.props.project_task;
    let priorityString;
    let priorityClass;
    switch(priority) {
      case 2:
         priorityClass = 'bg-warning text-light';
         priorityString = 'MEDIUM';
        break;
      case 3:
        priorityClass = 'bg-info text-light';
        priorityString = 'LOW';
        break;
      default:
        priorityClass = 'bg-danger text-light';
        priorityString = 'HIGH';
        break;
    }
    return (
      <div className="card mb-1 bg-light">
          <div className={`card-header text-primary ${ priorityClass }`}>
              ID: { projectSequence } -- Priority: { priorityString }
          </div>
          <div className="card-body bg-light">
              <h5 className="card-title">{ summary }</h5>
              <p className="card-text text-truncate ">
                  { acceptanceCriteria }
              </p>
              <a href="#" className="btn btn-primary">
                  View / Update
              </a>

              <button className="btn btn-danger ml-4">
                  Delete
              </button>
          </div>
      </div>
    )
  }
}

export default ProjectTask;
