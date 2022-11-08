package com.wellsfargo.training.ums.rest;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wellsfargo.training.ums.exception.ResourceNotFoundException;
import com.wellsfargo.training.ums.exception.UserAlreadyExistsException;
import com.wellsfargo.training.ums.model.User;
import com.wellsfargo.training.ums.response.ResponseHandler;
import com.wellsfargo.training.ums.service.LoginRestService;

@RestController
//add @CrossOrigin for react here
@RequestMapping(value = "/api")
public class LoginRestController {

	@Autowired
	private LoginRestService lrservice;

	@PostMapping("/register") 
	@CrossOrigin(origins="http://localhost:3000/")
	public ResponseEntity<Object> createUser(@Validated @RequestBody User user) throws ResourceNotFoundException{

		try {
			User u = lrservice.FindUser(user.getContactNumber()).orElseThrow(() ->
			new ResourceNotFoundException("User not found for this contact number: " + user.getContactNumber() + "."));
		}catch(ResourceNotFoundException ex) {
			User u=new User();

			u.setContactNumber(user.getContactNumber());
			u.setFirstName(user.getFirstName());
			u.setLastName(user.getLastName());
			u.setCity(user.getCity());
			u.setOccupation(user.getOccupation());
			u.setPassword(user.getPassword());
			System.out.println("Hello "+ user.getContactNumber()+" " +user.getPassword());
			u.setDob(user.getDob());
			u.setBranch(user.getBranch());
			u = lrservice.registerUser(u);
			return ResponseHandler.generateResponse("Registered", HttpStatus.OK, u.getCustomerId());
			
		}
			
			return ResponseHandler.generateResponse("User Already Exists", HttpStatus.CONFLICT, null);
	}


	@PostMapping("/login")
	@CrossOrigin(origins="http://localhost:3000/")
	public ResponseEntity<Object> loginDealer(@Validated @RequestBody Map<String,Object> credentials) throws ResourceNotFoundException
	{
		try {
			Boolean a=false;
			String contactNumber= (String) credentials.get("contactNumber");
			String password=(String) credentials.get("password");
			//System.out.println(email+password);
			User u = lrservice.FindUser(contactNumber).orElseThrow(() ->
			new ResourceNotFoundException("User not found for this contact number: " + contactNumber + "."));
	
			if(contactNumber.equals(u.getContactNumber()) && password.equals(u.getPassword()))
			{
				return ResponseHandler.generateResponse("Successful", HttpStatus.OK, u.getCustomerId());
	
			} else {
				return ResponseHandler.generateResponse("Incorrect Password", HttpStatus.UNAUTHORIZED, null);
			}
		} catch(ResourceNotFoundException ex) {
			return ResponseHandler.generateResponse("User Not Found", HttpStatus.CONFLICT, null);
		}
	}

}
