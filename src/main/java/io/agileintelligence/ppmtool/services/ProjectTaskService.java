package io.agileintelligence.ppmtool.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import io.agileintelligence.ppmtool.domain.Backlog;
import io.agileintelligence.ppmtool.domain.Project;
import io.agileintelligence.ppmtool.domain.ProjectTask;
import io.agileintelligence.ppmtool.exceptions.ProjectNotFoundException;
import io.agileintelligence.ppmtool.exceptions.ProjectTaskNotFoundException;
import io.agileintelligence.ppmtool.repositories.BacklogRepository;
import io.agileintelligence.ppmtool.repositories.ProjectRepository;
import io.agileintelligence.ppmtool.repositories.ProjectTaskRepository;

@Service
public class ProjectTaskService {

	@Autowired
	private BacklogRepository backlogRepository;
	@Autowired
	private ProjectTaskRepository projectTaskRepository;
	@Autowired
	private ProjectRepository projectRepository;
	@Autowired
	private ProjectService projectService;
	
	public ProjectTask addProjectTask(String projectIdentifier, ProjectTask projectTask, String username) {
		try {
			Backlog backlog = projectService.findProjectByIdentifier(projectIdentifier, username).getBacklog();
			projectTask.setBacklog(backlog);
			Integer BacklogSequence = backlog.getPTSequence();
			BacklogSequence ++;
			backlog.setPTSequence(BacklogSequence);
			projectTask.setProjectSequence(projectIdentifier + "-" + BacklogSequence);
			projectTask.setProjectIdentifier(projectIdentifier);
			
			// from API, default priority will be 0
			// required to add a new requirement
			// getPriority() should be compare with 0
			if (projectTask.getPriority() == null || projectTask.getPriority() == 0) {
				projectTask.setPriority(3);
			}
			if (projectTask.getStatus() == "" || projectTask.getStatus() == null) {
				projectTask.setStatus("TO_DO");
			}
			return projectTaskRepository.save(projectTask);
		} catch (Exception e) {
			throw new ProjectNotFoundException("Project Not Found");
		}
	}

	public Iterable<ProjectTask> findBacklogById(String backlog_id, String username) {
		Project project = projectService.findProjectByIdentifier(backlog_id, username);
		if (project == null) {
			throw new ProjectNotFoundException("Project with ID: '" + backlog_id + "' does not exist.");
		}
		return projectTaskRepository.findByProjectIdentifierOrderByPriority(backlog_id);
	}
	
	public ProjectTask findProjectTaskByProjectSequence(String backlog_id, String pt_id, String username) {
		Backlog backlog = projectService.findProjectByIdentifier(backlog_id, username).getBacklog();
		if (backlog == null) {
			throw new ProjectTaskNotFoundException("Project task with sequence '" + pt_id + "' not found.");
		}
		
		ProjectTask projectTask = projectTaskRepository.findByProjectSequence(pt_id);
		
		if (projectTask == null || !projectTask.getProjectIdentifier().equals(backlog_id)) {
			throw new ProjectTaskNotFoundException("Project task with sequence '" + pt_id + "' not found.");
		}
		
		return projectTask;
	}
	
	public ProjectTask updateByProjectSequence(ProjectTask updatedTask, 
												String backlog_id, 
												String pt_id,
												String username) {
		findProjectTaskByProjectSequence(backlog_id, pt_id, username);
		return projectTaskRepository.save(updatedTask);
	}
	
	public void deketeProjectTaskBySequence(String backlog_id, String pt_id, String username) {
		ProjectTask projectTask = findProjectTaskByProjectSequence(backlog_id, pt_id, username);
		projectTaskRepository.delete(projectTask);
	}
}
