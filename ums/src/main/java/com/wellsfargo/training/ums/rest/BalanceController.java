package com.wellsfargo.training.ums.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.wellsfargo.training.ums.model.Balance;
import com.wellsfargo.training.ums.response.TransactionObject;
import com.wellsfargo.training.ums.service.BalanceService;

@RestController
//add @CrossOrigin for react here
@RequestMapping(value = "/api")
public class BalanceController {
	@Autowired
	private BalanceService bService;
	@PostMapping("/addregister")
	public void addregister(@Validated @RequestBody Balance balance) {
		
		bService.addregister(balance);
	}
	
	@PostMapping("/deposit")
	public void deposit(@Validated @RequestBody TransactionObject t1) {
		
		
		bService.deposit(t1);
		
		
	}
	@PostMapping("/withdraw")
	public void withdraw(@Validated @RequestBody TransactionObject t1) {
		Balance balance=bService.find(t1);
		if(balance.getaBalance()< (t1.getAmount())){
			System.out.println("can't do");
		}
		else {
			bService.withdraw(t1);
		}
	}
	

}
