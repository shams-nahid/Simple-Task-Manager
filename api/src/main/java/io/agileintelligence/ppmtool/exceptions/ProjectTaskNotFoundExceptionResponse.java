package io.agileintelligence.ppmtool.exceptions;

public class ProjectTaskNotFoundExceptionResponse {
	private String ProjectTaskNotFound;
	
	public ProjectTaskNotFoundExceptionResponse(String ProjectTaskNotFound) {
		super();
		this.setProjectTaskNotFound(ProjectTaskNotFound);
	}

	public String getProjectTaskNotFound() {
		return ProjectTaskNotFound;
	}

	public void setProjectTaskNotFound(String projectTaskNotFound) {
		ProjectTaskNotFound = projectTaskNotFound;
	}
	
}
