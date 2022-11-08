package com.wellsfargo.training.ums.service;
import javax.transaction.Transactional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wellsfargo.training.ums.model.Loan;
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


	public void saveLoan(Loan loan)
	{
		System.out.println("a");
		lRepository.save(loan);
		
	}
	

}
