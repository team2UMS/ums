package com.wellsfargo.training.ums.model;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="loan")
public class Loan {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="loan_id")
	private long loanId;
	
	@Column(name="customer_id")
	private long customerId;
	
	@Column(name="branch")
	private String branch;
	
	
	@Column(name="loan_amount")
	private long loanAmount;

	public long getCustomerId() {
		return customerId;
	}
	
	
	public long getLoanId() {
		return loanId;
	}


	public void setCustomerId(long customerId) {
		this.customerId = customerId;
	}

	public String getBranch() {
		return branch;
	}

	public void setBranch(String branch) {
		this.branch = branch;
	}


	public long getLoanAmount() {
		return loanAmount;
	}

	public void setLoanAmount(long loanAmount) {
		this.loanAmount = loanAmount;
	}
	
}
