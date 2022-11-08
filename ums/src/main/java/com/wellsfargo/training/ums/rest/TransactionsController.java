

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
import org.springframework.web.bind.annotation.CrossOrigin;

import com.wellsfargo.training.ums.model.Balance;
import com.wellsfargo.training.ums.model.Transactions;
import com.wellsfargo.training.ums.model.User;
import com.wellsfargo.training.ums.response.ResponseHandler;
import com.wellsfargo.training.ums.response.TransactionObject;
import com.wellsfargo.training.ums.response.TransactionRequest;
import com.wellsfargo.training.ums.service.BalanceService;
import com.wellsfargo.training.ums.service.TransactionsService;




@RestController
//add @CrossOrigin for react here
@RequestMapping(value = "/api")
public class TransactionsController {

	@Autowired
	private TransactionsService tservice;
	
	@Autowired
	private BalanceService bService;



	@PostMapping("/deposit")
	@CrossOrigin("origins=\"http://localhost:3000/")
	public ResponseEntity<Object> deposit(@Validated @RequestBody TransactionObject t1) {
		
	
		tservice.deposit(t1);
		Transactions t=new Transactions();
		t.setAmount(t1.getAmount());
		t.setTransactionDate(Date.valueOf(LocalDate.now()));
		t.setTransactionType("deposit");
		tservice.SaveTransaction(t);
		
		return ResponseHandler.generateResponse("Successful", HttpStatus.OK, null);
		
		
	}


	


	@PostMapping("/withdraw")
	@CrossOrigin("origins=\"http://localhost:3000/")
	public ResponseEntity<Object> withdraw(@Validated @RequestBody TransactionObject t1) {
		
		Balance balance=bService.balance(t1.getCustomerId());
		if(balance.getaccBalance()< (t1.getAmount())){
			return ResponseHandler.generateResponse("InSufficient Balance", HttpStatus.OK, null);
		}
		else {
			tservice.withdraw(t1);
			Transactions t=new Transactions();
			t.setAmount(t1.getAmount());
			t.setTransactionDate(Date.valueOf(LocalDate.now()));
			t.setTransactionType("withdraw");
			tservice.SaveTransaction(t);
			return ResponseHandler.generateResponse("Successful", HttpStatus.OK, null);
		}
}




	@PostMapping("/statement")
	@CrossOrigin(origins="http://localhost:3000/")
	public ResponseEntity<Object> ReadTransaction(@Validated @RequestBody TransactionRequest transaction){

		LocalDate date = LocalDate.now();
		LocalDate receivedToDate = transaction.getToDate().toLocalDate();
		LocalDate receivedFromDate = transaction.getFromDate().toLocalDate();
		//if From-date is greater than To-date
		if(receivedFromDate.compareTo(receivedToDate) > 0) 
			return ResponseHandler.generateResponse("Invalid Range", HttpStatus.BAD_REQUEST, null);
		//if entered To-date is ahead of current date
		else if(receivedToDate.compareTo(date) > 0)
			return ResponseHandler.generateResponse("Incorrect Range. " +
					receivedToDate + " is greater than today's date i.e " 
					+ date, HttpStatus.BAD_REQUEST, null);
		//if entered From-date is ahead of current date
		else if(receivedFromDate.compareTo(date) > 0)
			return ResponseHandler.generateResponse("Incorrect Range. " +
					receivedFromDate + " is greater than today's date i.e " 
					+ date, HttpStatus.BAD_REQUEST, null);


		if(transaction.getTransactionType().equals("withdraw")||transaction.getTransactionType().equals("deposit")){
			return ResponseHandler.generateResponse("Successful", HttpStatus.OK, tservice.findall(transaction));

		}
		else {
			return ResponseHandler.generateResponse("Successful", HttpStatus.OK, tservice.findalltd(transaction));
		}


	}
}

