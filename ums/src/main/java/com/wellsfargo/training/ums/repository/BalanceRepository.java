package com.wellsfargo.training.ums.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.wellsfargo.training.ums.model.Balance;
import com.wellsfargo.training.ums.model.Loan;

public interface BalanceRepository extends JpaRepository<Balance, Long> {
    @Modifying
	@Query("update Balance b set b.accBalance=b.accBalance+:amount where b.customerId=:c_id")
	void deposit(long c_id, long amount);
    @Modifying
	@Query("update Balance b set b.accBalance=b.accBalance-:amount where b.customerId=:c_id")
	void withdraw(long c_id, long amount);
    
    
    @Query("select b from Balance b where b.customerId=:customerId")
	Balance balance(long customerId);
}
