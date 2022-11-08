package com.wellsfargo.training.ums.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;



@Entity
@Table(name="Balance")
public class Balance {
	@Id
	@Column(name="customer_Id")
	private long customerId;
	@Column(name="Balance")
	private long accBalance;
	


	public long getCustomerId() {
		return customerId;
	}
	
	public long getaccBalance() {
		return accBalance;
	}
	public void setaccBalance(long aBalance) {
		this.accBalance = aBalance;
	}

	public void setCustomerId(long customerId) {
		this.customerId = customerId;
	}

	
	

}
