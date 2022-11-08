package com.wellsfargo.training.ums.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wellsfargo.training.ums.model.Balance;
import com.wellsfargo.training.ums.repository.BalanceRepository;
import com.wellsfargo.training.ums.response.TransactionObject;

@Service
@Transactional
public class BalanceService {
	@Autowired
	BalanceRepository bRepository;

	public void addregister(Balance balance) {
		// TODO Auto-generated method stub
		bRepository.save(balance);
		
	}



	public void deposit(TransactionObject t1) {
		// TODO Auto-generated method stub
		bRepository.deposit(t1.getC_id(),t1.getAmount());
	}



	public Balance find(TransactionObject t1) {
		// TODO Auto-generated method stub
		return bRepository.getById(t1.getC_id());
	}



	public void withdraw(TransactionObject t1) {
		// TODO Auto-generated method stub
		bRepository.withdraw(t1.getC_id(),t1.getAmount());
		
	}
	

}
