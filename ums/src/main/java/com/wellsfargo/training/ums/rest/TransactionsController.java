

package com.wellsfargo.training.ums.rest;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.wellsfargo.training.ums.model.Transactions;
import com.wellsfargo.training.ums.response.TransactionRequest;
import com.wellsfargo.training.ums.service.TransactionsService;

import net.bytebuddy.dynamic.DynamicType.Builder.FieldDefinition.Optional;


@RestController
//add @CrossOrigin for react here
@RequestMapping(value = "/api")
public class TransactionsController {
	
	@Autowired
	private TransactionsService tservice;
	
	
	
	@PostMapping("/transaction") 
	public Transactions addTransaction(@Validated @RequestBody Transactions transaction) {
		Transactions t1=new Transactions();
		
		t1.setTransactionDate(transaction.getTransactionDate());
		//t1.setTransactionId(transaction.getTransactionId());
		t1.setTransactionType(transaction.getTransactionType());
		t1.setCustomerId(transaction.getCustomerId());
		tservice.SaveTransaction(t1);
		return t1;
		
	}
	@GetMapping("/statement")
	public List<Transactions> ReadTransaction(@Validated @RequestBody TransactionRequest transaction){
		
		TransactionRequest t=new TransactionRequest();
		
		t.setC_id(transaction.getC_id());
		t.setT_type(transaction.getT_type());
		t.setfDate(transaction.getfDate());
		t.settDate(transaction.gettDate());
//		List<Transactions> x=tservice.findall(t);
		List<Transactions> x=new ArrayList<>();
		return x;
	}

}
