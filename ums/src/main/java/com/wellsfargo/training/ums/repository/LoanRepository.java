package com.wellsfargo.training.ums.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.wellsfargo.training.ums.model.Loan;

import java.util.List;

public interface LoanRepository extends JpaRepository<Loan,Long> {

	
	@Modifying
	@Query("Update Loan l set l.loanAmount=l.loanAmount+:amount where l.customerId=:customerId")
	void applyloan(long customerId,long amount);
    
	
	@Query("select  l from Loan l where l.customerId=:customerId")
	Loan findLoan(long customerId);


}
