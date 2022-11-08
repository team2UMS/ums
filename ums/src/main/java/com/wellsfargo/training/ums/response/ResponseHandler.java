package com.wellsfargo.training.ums.response;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

/*
 *  ResponseHandler class is used to send a custom response JSON to the front-end. 
 *  Message here refers to any message/additional information that needs to be send
 *  HttpStatus is the server's response code to the request made. Ex: 200 - OK
 *  responseObject is the data that needs to be sent to front-end. could be any object. Pass null if no data
 *  needs to be sent to the front-end
 */
public class ResponseHandler {
	
	    public static ResponseEntity<Object> generateResponse(String message, HttpStatus status, Object responseObj) {
	    	Map<String, Object> map = new HashMap<String, Object>();
            map.put("message", message);
            map.put("status", status.value());
            map.put("data", responseObj);

            return new ResponseEntity<Object>(map,status);
	    }

	

		

}
