package com.wellsfargo.training.ums.rest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.wellsfargo.training.ums.model.Loan;
import com.wellsfargo.training.ums.service.LoanService;

import java.util.List;

@RestController
//add @CrossOrigin for react here
@RequestMapping(value = "/api")
public class LoanController {
@Autowired
private LoanService lservice;

@PostMapping("/loan")
public Loan addLoan(@Validated @RequestBody Loan loan)
{
	Loan l=new Loan();
	System.out.println("a");
	l.setBranch(loan.getBranch());
	l.setCustomerId(loan.getCustomerId());
	l.setLoanAmount(loan.getLoanAmount());
	System.out.println("a");
	lservice.saveLoan(loan);
	
	return l;
}

//@GetMapping("/statement")
//public List<Loan> ReadLoan(@RequestParam("c_id") long x){
//long cid=x;
//List<Loan> l=lservice.findall(cid);
//System.out.println(l);
//System.out.println("d");
//
//return l;
//}
}
