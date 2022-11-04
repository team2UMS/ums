package com.wellsfargo.training.ums.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wellsfargo.training.ums.exception.ResourceNotFoundException;
import com.wellsfargo.training.ums.exception.UserAlreadyExistsException;
import com.wellsfargo.training.ums.model.User;
import com.wellsfargo.training.ums.service.LoginRestService;

@RestController
//add @CrossOrigin for react here
@RequestMapping(value = "/api")
public class LoginRestController {
	
	@Autowired
	private LoginRestService lrservice;
	
	//Open Postman and make POST request - http://localhost:8080/ums/api/register
    //Under body tab --> raw --> Text --> Json and type the json data to be saved
	@PostMapping("/register") 
    public User createUser(@Validated @RequestBody User user) throws ResourceNotFoundException, UserAlreadyExistsException{
 
        try {
	        System.out.println("Hello "+ user.getContactNumber()+" " +user.getPassword());
	        User u=new User();
	        
	        u.setContactNumber(user.getContactNumber());
	        u.setFirstName(user.getFirstName());
	        u.setLastName(user.getLastName());
	        u.setCity(user.getCity());
	        u.setOccupation(user.getOccupation());
	        u.setPassword(user.getPassword());
	        System.out.println("Hello "+ user.getContactNumber()+" " +user.getPassword());
	        u.setDob(user.getDob());
	        u = lrservice.registerUser(u);
	        return user;
        }catch(DataIntegrityViolationException ex) {
        	throw new UserAlreadyExistsException(user.getContactNumber());
        }
    }
	
	
	 @PostMapping("/login")
	    public Boolean loginDealer(@Validated @RequestBody User user) throws ResourceNotFoundException
	    {
	        Boolean a=false;
	        Long contactNumber=user.getContactNumber();
	        String password=user.getPassword();
	        //System.out.println(email+password);
	        User u = lrservice.loginUser(contactNumber).orElseThrow(() ->
	        												new ResourceNotFoundException("User not found for this contact number: " + contactNumber + "."));

	        if(contactNumber.equals(u.getContactNumber()) && password.equals(u.getPassword()))
	                {
	            a=true;

	                }
	        return a;
	    }

}
