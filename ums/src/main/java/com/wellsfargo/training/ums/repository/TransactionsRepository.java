
package com.wellsfargo.training.ums.repository;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transaction;

import org.springframework.boot.autoconfigure.security.ConditionalOnDefaultWebSecurity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.wellsfargo.training.ums.model.Balance;
import com.wellsfargo.training.ums.model.Transactions;
import com.wellsfargo.training.ums.model.User;
import com.wellsfargo.training.ums.response.TransactionRequest;



public interface TransactionsRepository extends JpaRepository<Transactions, Long> {
	
	
	
	
	@Query("select t from Transactions t where t.user.customerId=:c and t.transactionType=:s and t.transactionDate>=:fdate and t.transactionDate<=:tdate")
	public List<Transactions> findall(long c,String s,Date fdate,Date tdate);
	
	
	@Query("select t from Transactions t where t.user.customerId=:c  and t.transactionDate>=:fdate and t.transactionDate<=:tdate")
	public List<Transactions> findalltd(long c, Date fdate, Date tdate);
	
	
	@Modifying
	@Query("update Balance b set b.accBalance=b.accBalance+:amount where b.customerId=:c_id")
	void deposit(long c_id, long amount);
    @Modifying
	@Query("update Balance b set b.accBalance=b.accBalance-:amount where b.customerId=:c_id")
	void withdraw(long c_id, long amount);
    @Query("select b from Balance b where b.customerId=:customerId")
	Balance balance(long customerId);


}

