package com.wellsfargo.training.ums.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.wellsfargo.training.ums.model.Loan;

import java.util.List;

public interface LoanRepository extends JpaRepository<Loan,Long> {

//	@Query("select L from Loan l where l.customerId=:x")
//	public List<Loan> findall(long x);
}
