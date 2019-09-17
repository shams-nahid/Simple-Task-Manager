package io.agileintelligence.ppmtool.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
@RestController
public class CustomResponseEntityExceptionHandler extends ResponseEntityExceptionHandler {

	@ExceptionHandler
	public final ResponseEntity<Object> handleProjectIdException(ProjectIdException ex, WebRequest request) {
		ProjectIdExceptionResponse projectIdExceptionResponse = new ProjectIdExceptionResponse(ex.getMessage());
		return new ResponseEntity(projectIdExceptionResponse, HttpStatus.BAD_REQUEST);
	}
	
	@ExceptionHandler
	public final ResponseEntity<Object> handleProjectNotFoundException(ProjectNotFoundException ex, WebRequest request) {
		ProjectNotFoundExceptionResponse projectNotFoundExceptionResponse = new ProjectNotFoundExceptionResponse(ex.getMessage());
		return new ResponseEntity(projectNotFoundExceptionResponse, HttpStatus.BAD_REQUEST);
	}
	
	@ExceptionHandler
	public final ResponseEntity<Object> handleProjectTaskNotFoundException(ProjectTaskNotFoundException ex, WebRequest request) {
		ProjectTaskNotFoundExceptionResponse projectTaskNotFoundExceptionResponse = new ProjectTaskNotFoundExceptionResponse(ex.getMessage());
		return new ResponseEntity(projectTaskNotFoundExceptionResponse, HttpStatus.BAD_REQUEST);
	}
	
}
