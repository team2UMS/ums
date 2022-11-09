package com.wellsfargo.training.ums.rest;
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

import com.wellsfargo.training.ums.model.Loan;
import com.wellsfargo.training.ums.response.ResponseHandler;
import com.wellsfargo.training.ums.service.LoanService;

import java.util.List;

@RestController
//add @CrossOrigin for react here
@RequestMapping(value = "/api")
public class LoanController {
@Autowired
private LoanService lservice;

@PostMapping("/applyloan")
@CrossOrigin(origins="http://localhost:3000/")
public ResponseEntity<Object> addLoan(@Validated @RequestBody Loan loan)
{
	
	long lAmount=lservice.findLoan(loan).getLoanAmount()+loan.getLoanAmount();
	System.out.println(loan.getLoanAmount());
	if(lAmount>1000000) {
		return ResponseHandler.generateResponse("Loan limit(10,00,000) exceeded check your loan Balance once!", HttpStatus.OK, null);
	}
	else {
		lservice.applyloan(loan);
		return ResponseHandler.generateResponse("Success!", HttpStatus.OK, null);
		
	}
}

	

	
	@GetMapping("/loanbalance")
	@CrossOrigin(origins="http://localhost:3000/")
	public ResponseEntity<Object> addLoan(@Validated @RequestParam(name="c_id") long customerId){
		Loan l=new Loan();
		l.setBranch("");
		l.setCustomerId(customerId);
		l.setLoanAmount(0);
	
		long lAmount=lservice.findLoan(l).getLoanAmount();
		return ResponseHandler.generateResponse("Your loan amount is:"+lAmount, HttpStatus.OK, null);	
	}
}



