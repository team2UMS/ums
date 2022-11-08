
package com.wellsfargo.training.ums.service;


import java.util.List;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wellsfargo.training.ums.model.Balance;
import com.wellsfargo.training.ums.model.Transactions;
import com.wellsfargo.training.ums.repository.TransactionsRepository;
import com.wellsfargo.training.ums.response.TransactionObject;
import com.wellsfargo.training.ums.response.TransactionRequest;

@Service
@Transactional
public class TransactionsService {

	@Autowired
	private TransactionsRepository tRepository;
	public TransactionsService() {
		// TODO Auto-generated constructor stub
	}public void SaveTransaction(Transactions transaction) {
		tRepository.save(transaction);

	}
	
	public void deposit(TransactionObject t1) {
		// TODO Auto-generated method stub
		tRepository.deposit(t1.getCustomerId(),t1.getAmount());
		
	}
	
	public void withdraw(TransactionObject t1) {
		// TODO Auto-generated method stub
		tRepository.withdraw(t1.getCustomerId(),t1.getAmount());
		
	}
	

	public List<Transactions> findall(TransactionRequest t) {

		return tRepository.findall(t.getCustomerId(),t.getTransactionType(),t.getFromDate(),t.getToDate());
	}
	public List<Transactions> findalltd(TransactionRequest t) {
		// TODO Auto-generated method stub
		return tRepository.findalltd(t.getCustomerId(),t.getFromDate(),t.getToDate());
	}


}



