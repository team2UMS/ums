package com.wellsfargo.training.ums.rest;

import java.sql.Date;
import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.wellsfargo.training.ums.model.Balance;
import com.wellsfargo.training.ums.model.Loan;
import com.wellsfargo.training.ums.model.Transactions;
import com.wellsfargo.training.ums.model.User;
import com.wellsfargo.training.ums.response.ResponseHandler;
import com.wellsfargo.training.ums.response.TransactionObject;
import com.wellsfargo.training.ums.service.BalanceService;
import com.wellsfargo.training.ums.service.TransactionsService;

@RestController
//add @CrossOrigin for react here
@RequestMapping(value = "/api")
public class BalanceController {
	@Autowired
	private BalanceService bService;
	
	@Autowired
	private TransactionsService tService;
	
	

	@GetMapping("/balance")
	public ResponseEntity<Object> addLoan(@Validated @RequestParam(name="c_id") long customerId){
		
	
		long bAmount=bService.balance(customerId).getaccBalance();
		return ResponseHandler.generateResponse("Your balance amount is:"+bAmount, HttpStatus.OK, null);	
	}
	

}
