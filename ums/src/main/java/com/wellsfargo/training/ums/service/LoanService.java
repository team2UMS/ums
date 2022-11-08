package com.wellsfargo.training.ums.service;
import javax.transaction.Transactional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wellsfargo.training.ums.model.Loan;
import com.wellsfargo.training.ums.model.User;
import com.wellsfargo.training.ums.repository.LoanRepository;

import java.util.List;

@Service
@Transactional
public class LoanService {
	
	@Autowired
	private LoanRepository lRepository;
	
	
	public LoanService() {
		// TODO Auto-generated constructor stub
	}



	public void addnewcustomer(User u) {
		// TODO Auto-generated method stub
		Loan l=new Loan();
		l.setCustomerId(u.getCustomerId());
		l.setBranch(u.getBranch());
		l.setLoanAmount(0);
		lRepository.save(l);
		
	}



	public void applyloan(Loan l) {
		// TODO Auto-generated method stub
		lRepository.applyloan(l.getCustomerId(),l.getLoanAmount());
		
		
	}



	public Loan findLoan(Loan l) {
		// TODO Auto-generated method stub
		return lRepository.findLoan(l.getCustomerId());
	}



	
	
	

}
