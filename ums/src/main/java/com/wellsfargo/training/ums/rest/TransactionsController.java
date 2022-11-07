

package com.wellsfargo.training.ums.rest;


import java.sql.Date;
import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wellsfargo.training.ums.model.Transactions;
import com.wellsfargo.training.ums.response.ResponseHandler;
import com.wellsfargo.training.ums.response.TransactionRequest;
import com.wellsfargo.training.ums.service.TransactionsService;



@RestController
//add @CrossOrigin for react here
@RequestMapping(value = "/api")
public class TransactionsController {

	@Autowired
	private TransactionsService tservice;



	@PostMapping("/transaction") 
	public ResponseEntity<Object> addTransaction(@Validated @RequestBody Transactions transaction) {
		try {
			Transactions t1=new Transactions();
			
			t1.setTransactionDate(Date.valueOf(LocalDate.now()));
			//t1.setTransactionDate(transaction.getTransactionDate());
			t1.setTransactionType(transaction.getTransactionType());
			t1.setAmount(transaction.getAmount());
			t1.setUser(transaction.getUser());

			tservice.SaveTransaction(t1);
			return ResponseHandler.generateResponse("Successful", HttpStatus.OK, t1.getTransactionId());
		} catch(Exception ex) {
			return ResponseHandler.generateResponse("Unsuccessful", HttpStatus.BAD_REQUEST, null);
		}


	}

	@GetMapping("/statement")
	public ResponseEntity<Object> ReadTransaction(@Validated @RequestBody TransactionRequest transaction){
		
		LocalDate date = LocalDate.now();
		LocalDate receivedToDate = transaction.getToDate().toLocalDate();
		LocalDate receivedFromDate = transaction.getFromDate().toLocalDate();

		if(transaction.getTransactionType().equals("withdraw")||transaction.getTransactionType().equals("deposit")){

			//if entered To-date is ahead of current date
			if(receivedToDate.compareTo(date) > 0)
				return ResponseHandler.generateResponse("Incorrect Range. " +
						receivedToDate + " is greater than today's date i.e " 
						+ date, HttpStatus.BAD_REQUEST, null);
			//if From-date is greater than To-date
			else if(receivedFromDate.compareTo(receivedToDate) > 0) 
				return ResponseHandler.generateResponse("Invalid Range", HttpStatus.BAD_REQUEST, null);

			return ResponseHandler.generateResponse("Successful", HttpStatus.OK, tservice.findall(transaction));

		}
		else {
			//if entered To-date is ahead of current date
			if(receivedToDate.compareTo(date) > 0)
				return ResponseHandler.generateResponse("Incorrect Range. " +
						receivedToDate + " is greater than today's date i.e " 
						+ date, HttpStatus.BAD_REQUEST, null);
			//if From-date is greater than To-date
			else if(receivedFromDate.compareTo(receivedToDate) > 0) 
				return ResponseHandler.generateResponse("Invalid Range", HttpStatus.BAD_REQUEST, null);

			return ResponseHandler.generateResponse("Successful", HttpStatus.OK, tservice.findalltd(transaction));

		}


	}
}

