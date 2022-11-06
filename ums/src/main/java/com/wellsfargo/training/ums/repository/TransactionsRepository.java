
package com.wellsfargo.training.ums.repository;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transaction;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.wellsfargo.training.ums.model.Transactions;
import com.wellsfargo.training.ums.model.User;
import com.wellsfargo.training.ums.response.TransactionRequest;



public interface TransactionsRepository extends JpaRepository<Transactions, Long> {
	
	
	
	
	@Query("select t from Transactions t where t.customerId=:c_id")
	public List<Transactions> findall(long c_id,String t_type,Date fDate,Date tDate);

 

}

