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
	private long aBalance;
	


	public long getCustomerId() {
		return customerId;
	}
	
	public long getaBalance() {
		return aBalance;
	}
	public void setaBalance(long aBalance) {
		this.aBalance = aBalance;
	}

	public void setCustomerId(long customerId) {
		this.customerId = customerId;
	}

	
	

}
