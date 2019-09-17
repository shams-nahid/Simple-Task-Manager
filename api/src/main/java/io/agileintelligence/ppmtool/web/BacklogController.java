package io.agileintelligence.ppmtool.web;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.agileintelligence.ppmtool.domain.ProjectTask;
import io.agileintelligence.ppmtool.services.MapValidationErrorService;
import io.agileintelligence.ppmtool.services.ProjectTaskService;

@RestController
@RequestMapping("/api/backlog")
@CrossOrigin
public class BacklogController {
	
	@Autowired
	ProjectTaskService projectTaskService;
	@Autowired
	MapValidationErrorService mapValidationErrorService;
	
	@PostMapping("/{backlog_id}")
	public ResponseEntity<?> addProjectTask(@Valid @RequestBody ProjectTask projectTask,
											BindingResult result,								
											@PathVariable String backlog_id) {
		ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
		if (errorMap != null) {
			return errorMap;
		}
		ProjectTask projectTask1 = projectTaskService.addProjectTask(backlog_id, projectTask);
		return new ResponseEntity<ProjectTask>(projectTask1, HttpStatus.CREATED);
	}
	
	@GetMapping("/{backlog_id}")
	public Iterable<ProjectTask> getProjectBacklog(@PathVariable String backlog_id) {
		return projectTaskService.findBacklogById(backlog_id);
	}
	
	@GetMapping("/{backlog_id}/{pt_id}")
	public ResponseEntity<?> getProjectTask(@PathVariable String backlog_id,
											@PathVariable String pt_id) {
		ProjectTask projectTask = projectTaskService.findProjectTaskByProjectSequence(backlog_id ,pt_id);
		return new ResponseEntity<ProjectTask>(projectTask, HttpStatus.OK);
	}
	
	@PatchMapping("/{backlog_id}/{pt_id}")
	public ResponseEntity<?> updateProjectTask(@Valid @RequestBody ProjectTask projectTask,
												BindingResult result,
												@PathVariable String backlog_id,
												@PathVariable String pt_id) {
		ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
		if (errorMap != null) {
			return errorMap;
		}
		
		ProjectTask updatedProjectTask = projectTaskService.updateByProjectSequence(projectTask, backlog_id, pt_id);
		
		return new ResponseEntity<ProjectTask>(updatedProjectTask, HttpStatus.OK);
	}
	
	@DeleteMapping("/{backlog_id}/{pt_id}")
	public ResponseEntity<?> deleteProjectTask(@PathVariable String backlog_id,
												@PathVariable String pt_id) {
		projectTaskService.deketeProjectTaskBySequence(backlog_id, pt_id);
		return new ResponseEntity<String>("Project task with sequence id '" + pt_id + "' deleted.", HttpStatus.OK);
	}
}