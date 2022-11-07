

package com.wellsfargo.training.ums.rest;

import java.time.LocalDate;
import java.util.*;

import org.aspectj.weaver.ast.And;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.ConditionalOnDefaultWebSecurity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.wellsfargo.training.ums.model.Transactions;
import com.wellsfargo.training.ums.response.ResponseHandler;
import com.wellsfargo.training.ums.response.TransactionRequest;
import com.wellsfargo.training.ums.service.TransactionsService;

import net.bytebuddy.asm.Advice.Return;
import net.bytebuddy.dynamic.DynamicType.Builder.FieldDefinition.Optional;


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
		
		t1.setTransactionDate(transaction.getTransactionDate());
		t1.setTransactionType(transaction.getTransactionType());
		t1.setAmount(transaction.getAmount());
		t1.setUser(transaction.getUser());
	
		tservice.SaveTransaction(t1);
		return ResponseHandler.generateResponse("Successful", HttpStatus.OK, t1.getTransactionId());
		} catch(Exception ex) {
			return ResponseHandler.generateResponse("Unsuccessful", HttpStatus.FAILED_DEPENDENCY, null);
		}
		
		
	}
	
	@GetMapping("/statement")
	public List<Transactions> ReadTransaction(@Validated @RequestBody TransactionRequest transaction){
		
		if(transaction.getTransactionType().equals("withdraw")||transaction.getTransactionType().equals("deposit")) {
			return tservice.findall(transaction);	
			
		}
		else {
			return tservice.findalltd(transaction);
		
		}
		
		
	}

}
