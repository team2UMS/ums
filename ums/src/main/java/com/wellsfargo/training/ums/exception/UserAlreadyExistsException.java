package com.wellsfargo.training.ums.exception;

public class UserAlreadyExistsException extends Exception {

	private static final long serialVersionUID = 1L;
	
	public UserAlreadyExistsException(Long contactNumber) {
		super("User with Contact Number: " + contactNumber.toString() + " already exists.");
	}

}
