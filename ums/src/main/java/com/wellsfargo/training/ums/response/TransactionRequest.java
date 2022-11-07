package com.wellsfargo.training.ums.response;

import java.sql.Date;


import com.fasterxml.jackson.annotation.JsonFormat;

public class TransactionRequest {

	private long customerId;
	
	private String transactionType;
	
	@JsonFormat(pattern="yyyy-MM-dd")
	private Date fromDate;
	
	private Date toDate;
	
	
	public long getCustomerId() {
		return customerId;
	}
	public void setCustomerId(long customerId) {
		this.customerId = customerId;
	}
	public String getTransactionType() {
		return transactionType;
	}
	public void setTransactionType(String transactionType) {
		this.transactionType = transactionType;
	}
	public Date getFromDate() {
		return fromDate;
	}
	public void setFromDate(Date fromDate) {
		this.fromDate = fromDate;
	}
	public Date getToDate() {
		return toDate;
	}
	public void setToDate(Date toDate) {
		this.toDate = toDate;
	}

}
