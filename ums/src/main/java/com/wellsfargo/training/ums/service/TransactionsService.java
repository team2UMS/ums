
package com.wellsfargo.training.ums.service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transaction;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.ConditionalOnDefaultWebSecurity;
import org.springframework.stereotype.Service;

import com.wellsfargo.training.ums.model.Transactions;
import com.wellsfargo.training.ums.repository.TransactionsRepository;
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
	
	public List<Transactions> findall(TransactionRequest t) {
		
		return tRepository.findall(t.getC_id(),t.getT_type(),t.getfDate(),t.gettDate());
	}
	public List<Transactions> findalltd(TransactionRequest t) {
		// TODO Auto-generated method stub
		return tRepository.findalltd(t.getC_id(),t.getfDate(),t.gettDate());
	}
	
	
	}



