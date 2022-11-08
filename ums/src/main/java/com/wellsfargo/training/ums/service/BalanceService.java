package com.wellsfargo.training.ums.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wellsfargo.training.ums.model.Balance;
import com.wellsfargo.training.ums.model.Loan;
import com.wellsfargo.training.ums.model.User;
import com.wellsfargo.training.ums.repository.BalanceRepository;
import com.wellsfargo.training.ums.response.TransactionObject;

@Service
@Transactional
public class BalanceService {
	@Autowired
	BalanceRepository bRepository;




	public void deposit(TransactionObject t1) {
		// TODO Auto-generated method stub
		bRepository.deposit(t1.getCustomerId(),t1.getAmount());
		
	}



	@SuppressWarnings("deprecation")
	public Balance find(TransactionObject t1) {
		// TODO Auto-generated method stub
		
		return bRepository.getById(t1.getCustomerId());
	}



	public void withdraw(TransactionObject t1) {
		// TODO Auto-generated method stub
		bRepository.withdraw(t1.getCustomerId(),t1.getAmount());
		
	}



	public void addnewCustomer(User u) {
		// TODO Auto-generated method stub
		Balance balance=new Balance();
		balance.setCustomerId(u.getCustomerId());
		balance.setaccBalance(0);
		bRepository.save(balance);
		
	}



	public Balance balance(long customerId) {
		// TODO Auto-generated method stub
		return bRepository.balance(customerId);
	}
	

}
