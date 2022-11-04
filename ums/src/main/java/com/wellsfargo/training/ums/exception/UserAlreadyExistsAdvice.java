package com.wellsfargo.training.ums.exception;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
public class UserAlreadyExistsAdvice {
	
	@ResponseBody
	@ExceptionHandler(UserAlreadyExistsException.class)
	@ResponseStatus(HttpStatus.CONFLICT)
	public Map<String, String> excceptionHandler(UserAlreadyExistsException exception) {
		Map<String, String> errMap =  new HashMap<>();
		errMap.put("errorMessage", exception.getMessage());
		return errMap;
	}
}
